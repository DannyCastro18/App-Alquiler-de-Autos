const {Auto} = require('../models');

exports.agregarAuto = async (req,res) => {
    try{
        const a = await Auto.create({marca, modelo, year, estadoDisponibilidad})
        res.json(a);
        console.log(error);
    }catch(e){
        res.json({Mensaje: "Registro fallido"});
    }
};

exports.verAutos = async (req, res) => {
    try{
        const result = await Auto.findAll();
        res,json({Mensaje: result})
    }catch(e){
        res.json[{Mensaje: "No se logro completar la solicitud"}]
    }
};

exports.actualizarAuto = async (req, res) => {
    const {id} = req.params
    const {marca, modelo, year, estadoDisponibilidad} = req.body
    try{
        let nemo = await Auto.findByPk(id)
        if(nemo){
            nemo.marca = marca;
            nemo.modelo = modelo;
            nemo.year = year;
            nemo.estadoDisponibilidad = estadoDisponibilidad;
            await nemo.save();
            res.json({Mensaje: "Actualización exitosa"})
        }else{
            res.json({Mensaje: "Actualización fallida"})
        }
    }catch(e){
        console.error(e)
        res.json({Mensaje: "No se relizaron las actualizaciones solicitadas"})
    }
};

exports.eliminarAuto = async (req, res) => {
    const {idAuto} = req.params;
    console.log("Prueba", idAuto)
    try{
        const dory = await Auto.findByPk(idAuto);
        if(dory){
            await dory.destroy();
            res.json({mensaje: "Eliminación exitosa"})
        }else{
            res.json({mensaje: "Eliminación fallida"})
        }
    }catch(e){
        res.json({Mensaje: "Auto no eliminado"})
    }
};

exports.buscarAutoId = async (req, res) => {
    const {idA} = req.params
    console.log(idA);
    try{
        const au = await Auto.findByPk(idA)
        return res.json(au);
    }catch(e){
        res.json({Mensaje: error})
    }
};