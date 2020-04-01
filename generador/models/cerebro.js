var mongoose = require('mongoose');

var modelSchema= mongoose.Schema({
    flavor: {
        type: String,
        minlength:[6,"El nombre del sabor es muy corto"],
        maxlength:[15,"El nombre del sabor es muy largo"],
        required: [true, 'El sabor es obligatorio']
    },
    description: {
        type: String,
        minlength:[6,"La descripcion es muy corta"],
        maxlength:[50,"La descripcion es muy larga"],
        required: [true, 'La descripcion es obligatoria']
    },
    iq: {
        type: Number,
        required: [true, 'El IQ es obligatorio']
    },
    picture: {
        type: String,
        required: [true, 'La foto es obligatoria']
    },
    usuario: {
        type: String,
        required: [true, 'No se selecciono el usuario']
    }
});

var cerebro = mongoose.model("cerebro", modelSchema);
module.exports = cerebro;