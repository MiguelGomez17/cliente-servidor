var mongoose = require('mongoose');

var modelSchema= mongoose.Schema({
    name:{
        type: String,
        minlength:[6,"El nombre es muy corto"],
        maxlength:[12,"El nombre es muy largo"],
        required: [true, 'El nombre es obligatorio']
    },
    email:{
        type: String,
        required: [true,"El correo electronico es obligatorio"]
    },
    type:{
        type: String,
        enum: ["Alumno zombie","Profesor"],
        required: [true,"Seleccione un tipo de zombie valido"]
    },
    usuario: {
        type: String,
        required: [true, 'No se selecciono el usuario']
    }
});

var zombie = mongoose.model("zombie", modelSchema);
module.exports = zombie;