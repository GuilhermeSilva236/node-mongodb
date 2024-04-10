
const Tipos = require("../models/Tipos")

const TiposController = {
    getAll: async (req, res) => {
        res.json( await Tipos.find() )
    },
    get: async (req, res) => {

        try {
            res.json( await Tipos.findById(req.params.id) )
        } catch (error) {
            res.status(404).json({error: 'Registro não encontrado'})
        }


    },
    create: async (req, res) => {
        try {
            res.json( await Tipos.create(req.body) )
        } catch (error) {
            res.status(400).json({error})
        }
    },
    update: async (req, res) => {
        try {
            res.json( await Tipos.findByIdAndUpdate(req.params.id, req.body) )
        } catch (error) {
            res.status(404).json({error: 'Registro não encontrado'})
        }
    },
    delete: async (req, res) => {
        try {
            res.json( await Tipos.findByIdAndDelete(req.params.id) )
        } catch (error) {
            res.status(404).json({error: 'Registro não encontrado'})
        }
    },


}

module.exports = TiposController