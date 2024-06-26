const Comandas = require("../models/Comandas")

const ComandasController = {
    getAll: async (req, res) => {
        res.json( await Comandas.find() )
    },
    get: async (req, res) => {

        try {
            res.json( await Comandas.findById(req.params.id) )
        } catch (error) {
            res.status(404).json({error: 'Registro não encontrado'})
        }


    },
    create: async (req, res) => {
        try {
            res.json( await Comandas.create(req.body) )
        } catch (error) {
            res.status(400).json({error})
        }
    },
    update: async (req, res) => {
        try {
            res.json( await Comandas.findByIdAndUpdate(req.params.id, req.body) )
        } catch (error) {
            res.status(404).json({error: 'Registro não encontrado'})
        }
    },
    delete: async (req, res) => {
        try {
            res.json( await Comandas.findByIdAndDelete(req.params.id) )
        } catch (error) {
            res.status(404).json({error: 'Registro não encontrado'})
        }
    },


}

module.exports = ComandasController