const express = require('express')
require("dotenv").config();
const app = express();
const clienteRoutes = require('./routes/clienteRoutes')
const autoRoutes = require('./routes/autoRoute')
const alquilerRoutes = require('./routes/alquilerRoute')
const PORT = process.env.PORT

app.use(express.json());

app.use('/api', clienteRoutes);
app.use('/api', autoRoutes);
app.use('/api', alquilerRoutes);

app.listen(PORT, () =>{
    console.log("Servidor corriendo en puerto " + PORT)
})