import { body, param } from 'express-validator';


export const validarCreacionUsuario = [
  body('nombre')
    .notEmpty().withMessage('El nombre es requerido')
    .isLength({ max: 100 }).withMessage('El nombre no debe superar 100 caracteres'),
  body('email')
    .notEmpty().withMessage('El email es requerido')
    .isEmail().withMessage('Debe ser un email válido'),
  body('fecha_nacimiento')
    .optional()
    .isDate().withMessage('La fecha de nacimiento debe ser válida (YYYY-MM-DD)'),
  body('estado')
    .optional()
    .isIn(['activo', 'inactivo']).withMessage('El estado debe ser activo o inactivo')
];

export const validarActualizarUsuario = [
  body('id')
    .notEmpty().withMessage('El ID es requerido')
    .isInt().withMessage('El ID debe ser un número entero'),
  body('nombre')
    .notEmpty().withMessage('El nombre es requerido')
    .isLength({ max: 100 }).withMessage('El nombre no debe superar 100 caracteres'),
  body('email')
    .notEmpty().withMessage('El email es requerido')
    .isEmail().withMessage('Debe ser un email válido'),
  body('fecha_nacimiento')
    .optional()
    .isDate().withMessage('La fecha de nacimiento debe ser válida (YYYY-MM-DD)'),
  body('estado')
    .optional()
    .isIn(['activo', 'inactivo']).withMessage('El estado debe ser activo o inactivo')
];

export const validarGetUsuarioPorId = [
  param('id')
    .notEmpty().withMessage('El ID es requerido')
    .isInt().withMessage('El ID debe ser un número entero')
];

export const validarEliminarUsuario = [
  param('id')
    .notEmpty().withMessage('El ID es requerido')
    .isInt().withMessage('El ID debe ser un número entero')
];

export const validarPatchEstadoUsuario = [
  param('id')
    .notEmpty().withMessage('El ID es requerido')
    .isInt().withMessage('El ID debe ser un número entero'),
  body('estado')
    .notEmpty().withMessage('El estado es requerido')
    .isIn(['activo', 'inactivo']).withMessage('El estado debe ser activo o inactivo')
];
