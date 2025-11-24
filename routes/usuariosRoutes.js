import { Router } from 'express';
import { postUsuario, putuser, patchEstadoUsuario } from '../controllers/usuariosController.js';
import { getUsuario } from '../controllers/usuariosController.js';
import { getUsuarioid } from '../controllers/usuariosController.js';
import { deleteuser } from '../controllers/usuariosController.js';
import {
  validarCreacionUsuario,
  validarActualizarUsuario,
  validarGetUsuarioPorId,
  validarEliminarUsuario,
  validarPatchEstadoUsuario
} from '../validators/usuariosValidator.js';
import { validateResult } from '../validators/validateResult.js';

const router = Router();

router.get('/', getUsuario );
router.get('/:id', validarGetUsuarioPorId, validateResult, getUsuarioid);
router.post('/', validarCreacionUsuario, validateResult, postUsuario);
router.put('/:id', validarActualizarUsuario, validateResult, putuser);
router.patch('/:id', validarPatchEstadoUsuario, validateResult, patchEstadoUsuario);
router.delete('/:id', validarEliminarUsuario, validateResult, deleteuser);

export default router;
