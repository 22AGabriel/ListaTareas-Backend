import Tarea from "../models/tarea";

export const listarTareas = (req, res) => {
  res.send("Esto es una prueba de una peticion get");
};

export const crearTarea = async (req, res) => {
  // Validar el body

  try {
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