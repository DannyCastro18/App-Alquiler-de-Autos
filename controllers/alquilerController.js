const {Alquiler} = require('../models');

exports.registarAlquiler = async (req,res) => {
    try{
        const al = await Alquiler.create({fechaInicio, fechaFin, clienteId, autoId})
        res.json(al);
        console.log(error);
    }catch(e){
        res.json({Mensaje: "Registro fallido"})
    }
};

exports.consultarAlquileres = async (req,res) => {
    try{
        const resulta2 = await Alquiler.findAll();
        res.json(resulta2);
    }catch(e){
        res.json({Mensaje: "No se logro completar la solicitud"})
    }
};

exports.actualizarAlquiler = async (req,res) => {
    const {id} = req.params
    const {fechaInicio, fechaFin, clienteId, autoId} = req.body
    try{
        let buscar = await Alquiler.findByPk(id)
        if(buscar){
            buscar.fechaInicio = fechaInicio;
            buscar.fechaFin = fechaFin;
            buscar.clienteId = clienteId;
            buscar.autoId = autoId;
            await buscar.save();
            res.json({Mensaje: "Actualización exitosa"});
        }else{
            res.json({Mensaje: "Actualización fallida"})
        }
    }catch(e){
        console.error(e)
        res.json({Mensaje: "No se realizaron las actualizaciones solicitadas"})
    }
};

exports.eliminarAlquiler = async (req,res) => {
    const {idAlquiler} = req.params;
    console.log("Prueba", idAlquiler)
    try{
        let buscar = await Alquiler.findByPk(idAlquiler)
        if(buscar){
            await buscar.destroy();
            res.json({Mensaje: "Eliminación exitosa"});
        }else{
            res.json({Mensaje: "Eliminación fallida"})
        }
    }catch(e){
        console.error(e)
        res.json({Mensaje: "No se pudo eliminar el alquiler"})
    }
};

exports.buscarAlquilerPorAuto = async (req, res) => {
    const {idAl} = req.params
    console.log(idAl);
    try{
        const Alq = await Alquiler.findByPk(idAl)
        return res.json(Alq)
    }catch(e){
        res.json({Mensaje: error})
    }
};


                                              