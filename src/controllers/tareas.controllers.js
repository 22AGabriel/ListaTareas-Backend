import { validationResult } from "express-validator";
import Tarea from "../models/tarea";

export const listarTareas = async(req, res) => {
  try {
    const tareas = await Tarea.find()
    res.status(200).json(tareas)
  } catch (error) {
    res.status(400).json({
      mensaje: "Error al buscar las tareas"
    })
  }
};

export const crearTarea = async (req, res) => {
  try {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({
        errores: errors.array()
      })
    }
    const tareaNueva = new Tarea(req.body)
    await tareaNueva.save();
    res.status(201).json({
        mensaje: "Se agregó la tarea"
    })
  } catch (error) {
    console.log(error);
    res.status(404).json({
        mensaje: "Ocurrió un error al intentar agregar la tarea"
    })
  }
};

export const borrarTarea = async(req, res) => {
  try {
    await Tarea.findByIdAndDelete(req.params.id)
    res.status(200).json({
      mensaje: "Se eliminó correctamente la tarea"
    })
  } catch (error) {
    res.status(404).json({
      mensaje: "Error al intentar borrar la tarea"
    })
  }
}