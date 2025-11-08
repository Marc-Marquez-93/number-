import pool from '../config/db.js';

export const UsuariosModel = {
  crearUsuario: async ({ id, nombre, email, fecha_nacimiento, estado, fecha_registro }) => {
    const [result] = await pool.query(
      `INSERT INTO usuarios (id, nombre, email, fecha_nacimiento, estado, fecha_registro)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [id, nombre, email, fecha_nacimiento, estado, fecha_registro]
    );

    return result;
  }
};

