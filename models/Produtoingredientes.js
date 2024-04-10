
const mongoose = require('mongoose')

const schema = mongoose.Schema({
    produto_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produto',
        required: true
    },
    ingrediente_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingrediente',
        required: true
    }
}, { timestamps: true });

const Produtoingredientes = mongoose.model('Produtoingredientes', schema)

module.exports = Produtoingredientes