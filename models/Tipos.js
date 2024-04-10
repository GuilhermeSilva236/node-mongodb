
const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });


const Tipos = mongoose.model('Tipos', schema)

module.exports = Tipos