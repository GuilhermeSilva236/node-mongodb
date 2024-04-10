
const Produtoingredientes = require("../models/Produtoingredientes")

const ProdutoingredientesController = {
    getAll: async (req, res) => {
        res.json( await Produtoingredientes.find() )
    },
    get: async (req, res) => {

        try {
            res.json( await Produtoingredientes.findById(req.params.id) )
        } catch (error) {
            res.status(404).json({error: 'Registro não encontrado'})
        }


    },
    create: async (req, res) => {
        try {
            res.json( await Produtoingredientes.create(req.body) )
        } catch (error) {
            res.status(400).json({error})
        }
    },
    update: async (req, res) => {
        try {
            res.json( await Produtoingredientes.findByIdAndUpdate(req.params.id, req.body) )
        } catch (error) {
            res.status(404).json({error: 'Registro não encontrado'})
        }
    },
    delete: async (req, res) => {
        try {
            res.json( await Produtoingredientes.findByIdAndDelete(req.params.id) )
        } catch (error) {
            res.status(404).json({error: 'Registro não encontrado'})
        }
    },


}

module.exports = ProdutoingredientesController