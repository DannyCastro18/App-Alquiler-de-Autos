const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.post('/cliente', clienteController.agregarCliente);
router.get('/cliente', clienteController.verClientes);
router.put('/cliente/:id', clienteController.actualizarDatos);
router.delete('/cliente/:id', clienteController.eliminarCliente); 
router.get('/buscarpor/:id', clienteController.buscarClienteId);

module.exports = router;