var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var assert = require('assert');

var url = 'mongodb://localhost:27017/zombie_schoolA';

var Zombie = require('../models/zombie');
/* GET home page. */
router.get('/', function(req, res, next) {
  Zombie.find().exec(function(error,zombies){
    if(!error){
      console.log(zombies);
      res.render('zombies/zombiesIndex', { title: 'Express' , coleccion:zombies});
    }
  });
});

router.get('/zombies/add', function(req,res){
  res.render('zombies/newZombie',{clase: '', mensaje:''});
});

router.post('/zombies/nuevo', function(req, res, next) {
  var data = req.body;
  var nuevoZombie = new Zombie({
    name: data.name,
    email: data.email,
    type: data.type
  });

  nuevoZombie.save(function(error){
    if(error){
      var mensaje = error.message;
      res.render('zombies/newZombie',{clase:'alert alert-danger',mensaje:mensaje});
    }else{
      res.render('zombies/newZombie',{clase:'alert alert-success',mensaje:'Se ha agregado un zombie'});
    }
  });
});

router.get('/zombies/edit/:id', async function(req, res){
  var zombie = await Zombie.findById(req.params.id);

  res.render('zombies/editZombie',{zombie:zombie,clase:'',mensaje:''});
});

router.put('/zombies/edit/:id', async function(req, res){
  try{
    var zombie = await Zombie.findById(req.params.id);
    zombie.name = req.body.name;
    zombie.email = req.body.email;
    zombie.type = req.body.type;

    await zombie.save(function (error){
      if(error){
        var mensaje = error.message;
        res.render('zombies/newZombie',{zombie:zombie,clase:'alert alert-danger',mensaje:mensaje});
      }else{
        res.render('zombies/newZombie',{zombie:zombie,clase:'alert alert-success',mensaje:'Se ha modificado un zombie'});
      }
    });
  }
  catch(e){
    res.render('zombies/editZombie',{zombie:zombie, title:"Editar Zombie"});
  }
});

router.get('/zombies/del/:id', async function(req, res){
  var zombie = await Zombie.findById(req.params.id);
  res.render('zombies/delZombie',{zombie:zombie, title:"Borrar Zombie"});
});

router.delete('/zombies/del/:id', async function(req,res){
  try
  {
    var zombie = await Zombie.findById(req.params.id);
    zombie.remove();

    res.redirect('/');
  }
  catch(e)
  {
    res.send('Es el nemesis, no se murió');
  }
});

var Cerebro = require('../models/cerebro');
router.get('/cerebros', function(req, res, next) {
  Cerebro.find().exec(function(error,cerebros){
    if(!error){
      console.log(cerebros);
      res.render('cerebros/cerebrosIndex', { title: 'Express' , coleccion:cerebros});
    }
  });
});

router.get('/cerebros/add', function(req,res){
  res.render('cerebros/newCerebro',{title: 'Nuevo Cerebro', alert:0});
});

router.post('/cerebros/nuevo', function(req, res, next) {
  var data = req.body;
  var nuevoCerebro = new Cerebro({
    flavor: data.flavor,
    description: data.description,
    iq: data.iq,
    picture: data.picture
    });

  nuevoCerebro.save(function(error){
    if(error){
      res.render('cerebros/newCerebro',{alert:1, tError: error.message, title: 'Nuevo cerebro'});
    }else{
      res.render('cerebros/newCerebro',{alert:2, title: 'Nuevo cerebro'});
    }
  });
});

router.get('/cerebros/edit/:id', async function(req, res){
  var cerebro = await Cerebro.findById(req.params.id);

  res.render('cerebros/editCerebro',{cerebro:cerebro, title:"Editar Cerebro", alert:0});
});

router.put('/cerebros/edit/:id', async function(req, res){
  try{
    var cerebro = await Cerebro.findById(req.params.id);
    cerebro.flavor = req.body.flavor;
    cerebro.description = req.body.description;
    cerebro.iq = req.body.iq;
    cerebro.picture = req.body.picture;

    await cerebro.save(function(error){
      if(error){
        res.render('cerebros/editCerebro',{cerebro:cerebro, alert:1, tError: error.message, title: 'Nuevo cerebro'});
      }else{
        res.render('cerebros/editCerebro',{cerebro:cerebro, alert:2, title: 'Nuevo cerebro'});
      }
    });
  }
  catch(e){
    
  }
});

router.get('/cerebros/del/:id', async function(req, res){
  var cerebro = await Cerebro.findById(req.params.id);
  res.render('cerebros/delCerebro',{cerebro:cerebro, title:"Borrar Cerebro"});
});

router.delete('/cerebros/del/:id', async function(req,res){
  try
  {
    var cerebro = await Cerebro.findById(req.params.id);
    cerebro.remove();

    res.redirect('/cerebros');
  }
  catch(e)
  {
    res.send('No se borro el cerebro mano');
  }
});
module.exports = router;
