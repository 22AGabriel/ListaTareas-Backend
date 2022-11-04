import { Router } from "express";
import { borrarTarea, crearTarea, listarTareas } from "../controllers/tareas.controllers";

const router = Router();

router
  .route("/tareas")
  .get(listarTareas)
  .post(crearTarea);
  
router
  .route("/tareas/:id")
  .delete(borrarTarea);

export default router;