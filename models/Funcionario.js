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
    cpf: {
        type: String,
        required: true,
        unique: true
    },
    endereco: String,
    sexo: {
        type: String,
        enum: ['Masculino', 'Feminino', 'Outro']
    },
    telefone: String,
    cargo: String
}, { timestamps: true });

const Funcionario = mongoose.model('Funcionario', schema)

module.exports = Funcionario