const express = require('express');
const router = express.Router();
const alquilerController = require('../controllers/alquilerController');

router.post('/alquiler', alquilerController.registraralquiler);
router.get('/alquiler', alquilerController.consultarAlquileres );
router.put('/alquiler/:id', alquilerController.actualizarAlquiler);
router.delete('/alquiler/:id', alquilerController.eliminarAlquiler); 
router.get('/buscarpor/:id', alquilerController.buscarAlquilerPorAuto);

module.exports = router;