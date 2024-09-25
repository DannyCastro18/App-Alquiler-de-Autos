const express = require('express');
const router = express.Router();
const autoController = require('../controllers/autoController');

router.post('/auto', autoController.agregarAuto);
router.get('/auto', autoController.verAutos);
router.put('/auto/:id', autoController.actualizarAuto);
router.delete('/auto/:id', autoController.eliminarAuto); 
router.get('/buscarpor/:id', autoController.buscarAutoId);

module.exports = router;