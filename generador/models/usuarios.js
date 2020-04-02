var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var modelSchema= mongoose.Schema({
    name: {
        type: String,
        minlength:[6,"El nombre de usuario es muy corto"],
        maxlength:[15,"El nombre de usuario es muy largo"],
        required: [true, 'El nombre de usuario es obligatorio']
    },
    email: {
        type: String,
        required: [true,"El correo electronico es obligatorio"],
        unique: [true,"Ya existe un usuario con este correo"]
    },
    password: {
        type: String,
        minlength:[6,"La contraseña es muy corta"],
        required: [true, 'La contraseña es obligatoria']
    },
    type: {
        type: String,
        defaul: "Usuario",
        enum: ["Usuario","Administrador"],
        required: true
    },
    picture: {
        type: String,
        required: [true, 'La foto es obligatoria']
    }
});

modelSchema.pre('save',function(next){
    bcrypt.genSalt(10).then(salts =>{
        bcrypt.hash(this.password,salts).then(hash => {
            this.password=hash;
            next();
        }).catch(error => next(error));
    }).catch(error => next(error));
});

var usuarios = mongoose.model("usuarios", modelSchema);
module.exports = usuarios;