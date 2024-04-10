
const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });


const Formapagamento = mongoose.model('Formapagamento', schema)

module.exports = Formapagamento