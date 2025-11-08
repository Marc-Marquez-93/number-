import { Router } from 'express';
import { postUsuario } from '../controllers/usuariosController.js';
import { validarCreacionUsuario } from '../validators/usuariosValidator.js';

const router = Router();

router.post('/', validarCreacionUsuario, postUsuario);

export default router;
