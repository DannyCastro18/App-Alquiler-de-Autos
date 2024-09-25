const {Cliente} = require('../models');

exports.agregarCliente = async(req,res) => {
    try{
        const c = await Cliente.create({nombre, correo, numeroLicencia});
        res.json(c)
        console.log(error);
    }catch(e){
        res.json({Mensaje: "Registro fallido"});
    }
};

exports.verClientes = async(req, res) => {
    try{
        const resultado = await Cliente.findAll();
        res.json({Mensaje: resultado})
    }catch(e){
        res.json({Mensaje: "Error al obtener clientes"});
    }
};

exports.actualizarDatos = async(req, res) => {
    const {id} = req.params
    const {nombre, correo, numeroLicencia} = req.body
    try{
        let buscar = await Cliente.findByPk(id);
        if(buscar){
            buscar.nombre = nombre;
            buscar.correo = correo;
            buscar.numeroLicencia = numeroLicencia;
            await buscar.save();
            res.json({Mensaje: "Actualización exitosa"})
        }else{
            res.json({Mensaje: "Actualización fallida"})
        }
    }catch(e){
        console.error(e)
        res.json({Mensaje: "Error al actualizar datos"})
    }
};

exports.eliminarCliente = async(req, res) => {
    const {idCliente} = req.params;
    console.log("Ensayo" , idCliente)
    try{
        const busqueda = await Cliente.findByPk(idCliente);
        if(busqueda){
            await busqueda.destroy();
            res.json({Mensaje: "Eliminación exitosa"})
        }else{
            res.json({Mensaje: "Eliminación fallida"})
        }
    }catch(e){
        res.json({Mensaje: "Cliente no encontrado"})
    }
};

exports.buscarClienteId = async(req, res) => {
    const {idC} = req.params
    console.log(idC);
    try{
        const cli = await Cliente.findByPk(idC)
        return res.json(cli);
    }catch(e){
        res.json({Mensaje: error})
    }
}