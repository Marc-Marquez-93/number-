import { Router } from 'express';
import { postUsuario, putuser } from '../controllers/usuariosController.js';
import { getUsuario } from '../controllers/usuariosController.js';
import { getUsuarioid } from '../controllers/usuariosController.js';
import { validarCreacionUsuario } from '../validators/usuariosValidator.js';
import { deleteuser } from '../controllers/usuariosController.js';



const router = Router();

router.get('/', getUsuario );
router.get('/:id', getUsuarioid);
router.post('/', validarCreacionUsuario, postUsuario);
router.put('/:id', putuser);
router.patch('/:id/estado', );
router.delete('/:id', deleteuser );

export default router;