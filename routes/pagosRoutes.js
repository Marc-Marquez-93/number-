// import { Router } from 'express';


// const router = Router();

// router.get('/', );
// router.get('/:usuario_id', );
// router.post('/', );
// router.get('/estado/:usuario_id', );

// export default router;


import express from "express";
import { pagosController } from "../controllers/pagosController.js";
import { validarPago } from "../validators/pagosValidator.js";

const router = express.Router();

router.get("/", pagosController.listar);

router.get("/:usuario_id", pagosController.pagosUsuario);

router.post("/registrar/:usuario_id", validarMembresia, lecturasController.registrar);


router.get("/estado/:usuario_id", pagosController.estado);

export default router;
