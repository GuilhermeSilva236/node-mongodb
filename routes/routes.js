const express = require('express')
const ProdutoController = require('../controllers/ProdutoController')
const ClienteController = require('../controllers/ClienteController')
const FuncionarioController = require('../controllers/FuncionarioController')
const ComandasController = require('../controllers/ComandasController')
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

module.exports = router
