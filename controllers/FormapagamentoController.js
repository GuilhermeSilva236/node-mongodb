
const Formapagamento = require("../models/Formapagamento")

const FormapagamentoController = {
    getAll: async (req, res) => {
        res.json( await Formapagamento.find() )
    },
    get: async (req, res) => {

        try {
            res.json( await Formapagamento.findById(req.params.id) )
        } catch (error) {
            res.status(404).json({error: 'Registro não encontrado'})
        }


    },
    create: async (req, res) => {
        try {
            res.json( await Formapagamento.create(req.body) )
        } catch (error) {
            res.status(400).json({error})
        }
    },
    update: async (req, res) => {
        try {
            res.json( await Formapagamento.findByIdAndUpdate(req.params.id, req.body) )
        } catch (error) {
            res.status(404).json({error: 'Registro não encontrado'})
        }
    },
    delete: async (req, res) => {
        try {
            res.json( await Formapagamento.findByIdAndDelete(req.params.id) )
        } catch (error) {
            res.status(404).json({error: 'Registro não encontrado'})
        }
    },


}

module.exports = FormapagamentoController