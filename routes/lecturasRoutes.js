import { Router } from 'express';
import {
    generarLecturaPrincipal,
    generarLecturaDiaria,
    getLecturasPorUsuario
} from '../controllers/lecturasController.js';


const router = Router();

router.post('/principal/:usuario_id', generarLecturaPrincipal);
router.post('/diaria/:usuario_id', generarLecturaDiaria);
router.get('/usuario/:usuario_id', getLecturasPorUsuario);
router.get('/:id', getLecturaPorId);

export default router;