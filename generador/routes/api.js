let express = require('express');
let router = express.Router();
let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');

let Zombie = require('../models/zombie');
let Cerebro = require('../models/cerebro');
let Usuarios = require('../models/usuarios');

router.get('/zombies', async(req, res)=>{
    Zombie.find().exec((error, zombies)=>{
        if(!error){
            res.status(200).json(zombies);
        }else{
            res.status(500).json(error);
        }
    });
});

router.post('/zombies/nuevo', function(req, res) {
  let data = req.body;
  let nuevoZombie = new Zombie({
    name: data.name,
    email: data.email,
    type: data.type
  });
  nuevoZombie.save(function(error){
    if(error){
      res.status(500).json({clase: 'alert alert-danger', mensaje: error.message});
    }else{
      res.status(200).json({clase: '', mensaje: 'Nuevo zombie'});
    }
  });
});

router.put('/zombies/edit/:id', async function(req, res){
  try{
    var zombie = await Zombie.findById(req.params.id);
    zombie.name = req.body.name;
    zombie.email = req.body.email;
    zombie.type = req.body.type;
    
    await zombie.save(function (error){
      if(error){
        res.status(500).json({clase: 'alert alert-danger', mensaje: error.message});
      }else{
        res.status(200).json({clase: '', mensaje: 'Actualizado'});
      }
    });
  }
  catch(e){
    res.status(500).json({clase: 'alert alert-danger', mensaje: error.message});
  }
});

  router.delete('/zombies/delete/:id', async function(req,res){
    try
    {
      var zombie = await Zombie.findById(req.params.id);
      zombie.remove();
      res.status(200).json(zombie);
    }
    catch(e)
    {
      res.status(500).json(error);
    }
  });


router.get('/cerebros', async(req, res)=>{
    Cerebro.find().exec((error, cerebros)=>{
        if(!error){
            res.status(200).json(cerebros);
        }else{
            res.status(500).json(error);
        }
    });
});

router.post('/cerebros/nuevo', function(req, res) {
  let data = req.body;
  let nuevoCerebro = new Cerebro({
    flavor: data.flavor,
    description: data.description,
    iq: data.iq,
    picture: data.picture,
    usuario: data.usuario
  });

  nuevoCerebro.save(function(error){
    if(error){
      res.status(500).json({clase: 'alert alert-danger', mensaje: error.message});
    }else{
      res.status(200).json({clase: '', mensaje: 'Nuevo cerebro'});
    }
  });
});

router.put('/cerebros/edit/:id', async function(req, res){
  try{
    var cerebro = await Cerebro.findById(req.params.id);
    cerebro.flavor = req.body.flavor;
    cerebro.description = req.body.description;
    cerebro.iq = req.body.iq;
    cerebro.picture = req.body.picture;
    cerebro.usuario = req.body.usuario;

    await cerebro.save(function(error){
      if(error){
        res.status(500).json({clase: 'alert alert-danger', mensaje: error.message});
      }else{
        res.status(200).json({clase: '', mensaje: 'Actualizado'});
      }
    });
  }
  catch(e){
    res.status(500).json({clase: 'alert alert-danger', mensaje: error.message});
  }
});

router.delete('/cerebros/delete/:id', async function(req,res){
  try
  {
    var cerebro = await Cerebro.findById(req.params.id);
    cerebro.remove();

    res.status(200).json(cerebro);
  }
  catch(e)
  {
    res.status(500).json(error);
  }
});


router.get('/usuarios', async(req, res)=>{
  Usuarios.find().exec((error, usuarios)=>{
      if(!error){
          res.status(200).json(usuarios);
      }else{
          res.status(500).json(error);
      }
  });
});

router.post('/usuarios/nuevo', function(req, res) {
  let data = req.body;
  let nuevoUsuario = new Usuarios({
    name: data.name,
    email: data.email,
    password: data.password,
    type: 'Regular',
    picture: data.picture
  });
  nuevoUsuario.save(function(error){
    if(error){
      res.status(500).json({clase: 'alert alert-danger', mensaje: error.message});
    }else{
      res.status(200).json({clase: '', mensaje: 'Usuario registrado'});
    }
  });
});

router.post('/usuarios/login', function(req, res){
  try{
    Usuarios.findOne({email : req.body.email}).then(user => {
      if(user){
        bcrypt.compare(req.body.password,user.password).then(match => {
          if(match){
            let token = jwt.sign({usuario: user},'MiguelGR',{expiresIn : '3h'});
            res.status(200).json({token: token});
          }else{
            res.status(500).json({clase: 'alert alert-danger', mensaje: 'La contraseña es incorrecta'});
          }
        }).catch(error => {
          res.status(500).json({clase: 'alert alert-danger', mensaje: error.message});  
        });
      }else{
        res.status(500).json({clase: 'alert alert-danger', mensaje: 'El usuario no existe'});  
      }
    }).catch(error => {
      res.status(500).json({clase: 'alert alert-danger', mensaje: error.message});  
    });
  }catch(e){
    res.status(500).json({clase: 'alert alert-danger', mensaje: error.message});
  }
});

router.get('/usuarios/username', verifyToken, function(req,res,next){
  return res.status(200).json(decodedToken);
});
var decodedToken;
function verifyToken(req,res,next){
  let token = req.query.token;

  jwt.verify(token,'MiguelGR', function(err, tokendata){
    if(err){
      return res.status(400).json({clase: 'alert alert-danger', mensaje:err});
    }
    if(tokendata){
      decodedToken = tokendata;
      next();
    }
  });
}

module.exports=router;