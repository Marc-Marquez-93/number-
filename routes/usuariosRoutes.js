import { Router } from 'express';
import { postUsuario } from '../controllers/usuariosController.js';
import { getUsuario } from '../controllers/usuariosController.js';
import { validarCreacionUsuario } from '../validators/usuariosValidator.js';



const router = Router();

router.get('/', getUsuario );
router.get('/:id', getUsuarioid);
router.post('/', validarCreacionUsuario, postUsuario);
// router.put('/:id', );
// router.patch('/:id/estado', );
// router.delete('/:id', );

export default router;