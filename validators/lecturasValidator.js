import { param } from 'express-validator';

export const validarGenerarLecturaPrincipal = [
  param('usuario_id')
    .notEmpty().withMessage('El usuario_id es requerido')
    .isInt().withMessage('El usuario_id debe ser un número entero')
];

export const validarGenerarLecturaDiaria = [
  param('usuario_id')
    .notEmpty().withMessage('El usuario_id es requerido')
    .isInt().withMessage('El usuario_id debe ser un número entero')
];

export const validarGetLecturasPorUsuario = [
  param('usuario_id')
    .notEmpty().withMessage('El usuario_id es requerido')
    .isInt().withMessage('El usuario_id debe ser un número entero')
];

export const validarGetLecturaPorId = [
  param('id')
    .notEmpty().withMessage('El ID de la lectura es requerido')
    .isInt().withMessage('El ID de la lectura debe ser un número entero')
];
