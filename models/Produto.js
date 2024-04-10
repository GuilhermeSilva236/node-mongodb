const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
        uppercase: true,
        trim: true

    },
    preco: {
        type: String,
        default: 0,
        min: [0, 'Mais fácil'],
        match: /^\d+(\.\d{1,2})?$/,
    },
    tamanho: String,
    tipo: {
    type: String,
    enum: ["Bebidas", "Pizza", "Massas", "Sobremesas",]
    },
    ingredientes: [String]

}, {timestamps: true})
const Produto = mongoose.model('Produto', schema)

module.exports = Produto