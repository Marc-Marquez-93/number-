import { Router } from 'express';
import {
    generarLecturaPrincipal,
    generarLecturaDiaria,
    getLecturasPorUsuario,
    getLecturaPorId
} from '../controllers/lecturasController.js';

import {
    validarGenerarLecturaPrincipal,
    validarGenerarLecturaDiaria,
    validarGetLecturasPorUsuario,
    validarGetLecturaPorId
} from '../validators/lecturasValidator.js';

import { validateResult } from '../validators/validateResult.js';

const router = Router();

router.post('/principal/:usuario_id', validarGenerarLecturaPrincipal, validateResult, generarLecturaPrincipal);
router.post('/diaria/:usuario_id', validarGenerarLecturaDiaria, validateResult, generarLecturaDiaria);
router.get('/usuario/:usuario_id', validarGetLecturasPorUsuario, validateResult, getLecturasPorUsuario);
router.get('/:id', validarGetLecturaPorId, validateResult, getLecturaPorId);

export default router;
