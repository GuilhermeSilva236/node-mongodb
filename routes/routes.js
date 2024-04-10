const express = require('express')
const ProdutoController = require('../controllers/ProdutoController')
const ClienteController = require('../controllers/ClienteController')
const FuncionarioController = require('../controllers/FuncionarioController')
const ComandasController = require('../controllers/ComandasController')
const CargoController = require('../controllers/CargoController')
const FormapagamentoController = require('../controllers/FormapagamentoController')
const IngredienteController = require('../controllers/IngredienteController')
const ProdutocomandasController = require('../controllers/ProdutocomandasController')
const ProdutoingredientesController = require('../controllers/ProdutoingredientesController')
const TiposController = require('../controllers/TiposController')

const Produto = require('../models/Produto')
const router = express.Router()

router.get('/', function(req, res){
    res.json({})
})
 
// Produto
router.get('/Produto', (req, res) => ProdutoController.getAll(req, res))
router.post('/Produto', (req, res) => ProdutoController.create(req, res))
router.get('/Produto/:id', (req, res) => ProdutoController.get(req, res))
router.put('/Produto/:id', (req, res) => ProdutoController.update(req, res))
router.delete('/Produto/:id', (req, res) => ProdutoController.delete(req, res))

//Funcionario
router.get('/Funcionario', (req, res) => FuncionarioController.getAll(req, res))
router.post('/Funcionario', (req, res) => FuncionarioController.create(req, res))
router.get('/Funcionario/:id', (req, res) => FuncionarioController.get(req, res))
router.put('/Funcionario/:id', (req, res) => FuncionarioController.update(req, res))
router.delete('/Funcionario/:id', (req, res) => FuncionarioController.delete(req, res))

//Comandas
router.get('/Comandas', (req, res) => ComandasController.getAll(req, res))
router.post('/Comandas', (req, res) => ComandasController.create(req, res))
router.get('/Comandas/:id', (req, res) => ComandasController.get(req, res))
router.put('/Comandas/:id', (req, res) => ComandasController.update(req, res))
router.delete('/Comandas/:id', (req, res) => ComandasController.delete(req, res))

//Cliente
router.get('/Cliente', (req, res) => ClienteController.getAll(req, res))
router.post('/Cliente', (req, res) => ClienteController.create(req, res))
router.get('/Cliente/:id', (req, res) => ClienteController.get(req, res))
router.put('/Cliente/:id', (req, res) => ClienteController.update(req, res))
router.delete('/Cliente/:id', (req, res) => ClienteController.delete(req, res))

// Cargo
router.get('/Cargo', (req, res) => CargoController.getAll(req, res))
router.post('/Cargo', (req, res) => CargoController.create(req, res))
router.get('/Cargo/:id', (req, res) => CargoController.get(req, res))
router.put('/Cargo/:id', (req, res) => CargoController.update(req, res))
router.delete('/Cargo/:id', (req, res) => CargoController.delete(req, res))

// FormaPagamento
router.get('/Formapagamento', (req, res) => FormapagamentoController.getAll(req, res))
router.post('/Formapagamento', (req, res) => FormapagamentoController.create(req, res))
router.get('/Formapagamento/:id', (req, res) => FormapagamentoController.get(req, res))
router.put('/Formapagamento/:id', (req, res) => FormapagamentoController.update(req, res))
router.delete('/Formapagamento/:id', (req, res) => FormapagamentoController.delete(req, res))

// Ingrediente
router.get('/Ingrediente', (req, res) => IngredienteController.getAll(req, res))
router.post('/Ingrediente', (req, res) => IngredienteController.create(req, res))
router.get('/Ingrediente/:id', (req, res) => IngredienteController.get(req, res))
router.put('/Ingrediente/:id', (req, res) => IngredienteController.update(req, res))
router.delete('/Ingrediente/:id', (req, res) => IngredienteController.delete(req, res))

// Produtocomandas
router.get('/Produtocomandas', (req, res) => ProdutocomandasController.getAll(req, res))
router.post('/Produtocomandas', (req, res) => ProdutocomandasController.create(req, res))
router.get('/Produtocomandas/:id', (req, res) => ProdutocomandasController.get(req, res))
router.put('/Produtocomandas/:id', (req, res) => ProdutocomandasController.update(req, res))
router.delete('/Produtocomandas/:id', (req, res) => ProdutocomandasController.delete(req, res))

// Produtoingredientes
router.get('/Produtoingredientes', (req, res) => ProdutoingredientesController.getAll(req, res))
router.post('/Produtoingredientes', (req, res) => ProdutoingredientesController.create(req, res))
router.get('/Produtoingredientes/:id', (req, res) => ProdutoingredientesController.get(req, res))
router.put('/Produtoingredientes/:id', (req, res) => ProdutoingredientesController.update(req, res))
router.delete('/Produtoingredientes/:id', (req, res) => ProdutoingredientesController.delete(req, res))

// Tipos
router.get('/Tipos', (req, res) => TiposController.getAll(req, res))
router.post('/Tipos', (req, res) => TiposController.create(req, res))
router.get('/Tipos/:id', (req, res) => TiposController.get(req, res))
router.put('/Tipos/:id', (req, res) => TiposController.update(req, res))
router.delete('/Tipos/:id', (req, res) => TiposController.delete(req, res))

module.exports = router
