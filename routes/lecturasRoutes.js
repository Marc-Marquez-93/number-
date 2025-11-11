import { Router } from 'express';
import { generarLecturaPrincipal, generarLecturaDiaria } from '../controllers/lecturasController.js';


const router = Router();

router.post('/principal/:usuario_id', generarLecturaPrincipal);
router.post('/diaria/:usuario_id', generarLecturaDiaria);
// router.get('/usuario/:usuario_id', );
// router.get('/:id', );

export default router;