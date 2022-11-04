import Tarea from "../models/tarea";

export const listarTareas = (req, res) => {
  res.send("Esto es una prueba de una peticion get");
};

export const crearTarea = async (req, res) => {
  // Validar el body

  // Guardar el objeto
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
