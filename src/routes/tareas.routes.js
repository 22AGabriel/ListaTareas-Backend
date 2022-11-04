import { Router } from "express";
import { borrarTarea, crearTarea, listarTareas } from "../controllers/tareas.controllers";
import { check } from "express-validator";

const router = Router();

router
  .route("/tareas")
  .get(listarTareas)
  .post(
    [
        check("nombreTarea")
          .notEmpty()
          .withMessage("Este campo es obligatorio")
          .isLength({min: 5})
          .withMessage("El mínimo de caracteres es de 5")
    ],
    crearTarea);
  
router
  .route("/tareas/:id")
  .delete(borrarTarea);

export default router;