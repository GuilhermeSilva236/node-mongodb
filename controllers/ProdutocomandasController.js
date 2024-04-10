
const Produtocomandas = require("../models/Produtocomandas")

const ProdutocomandasController = {
    getAll: async (req, res) => {
        res.json( await Produtocomandas.find() )
    },
    get: async (req, res) => {

        try {
            res.json( await Produtocomandas.findById(req.params.id) )
        } catch (error) {
            res.status(404).json({error: 'Registro não encontrado'})
        }


    },
    create: async (req, res) => {
        try {
            res.json( await Produtocomandas.create(req.body) )
        } catch (error) {
            res.status(400).json({error})
        }
    },
    update: async (req, res) => {
        try {
            res.json( await Produtocomandas.findByIdAndUpdate(req.params.id, req.body) )
        } catch (error) {
            res.status(404).json({error: 'Registro não encontrado'})
        }
    },
    delete: async (req, res) => {
        try {
            res.json( await Produtocomandas.findByIdAndDelete(req.params.id) )
        } catch (error) {
            res.status(404).json({error: 'Registro não encontrado'})
        }
    },


}

module.exports = ProdutocomandasController