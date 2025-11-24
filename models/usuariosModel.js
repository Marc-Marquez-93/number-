import pool from '../config/db.js';

export const UsuariosModel = {
  crearUsuario: async ({ nombre, email, fecha_nacimiento, estado }) => {
    const [result] = await pool.query(
      `INSERT INTO usuarios (nombre, email, fecha_nacimiento, estado)
       VALUES (?, ?, ?, ?)`,
      [nombre, email, fecha_nacimiento, estado]
    );

    return result;
  }
};

 export const getUsuariosModel = {
  obtenerUsuarios: async () => {
    const [rows] = await pool.query(`SELECT * FROM usuarios`);
    return rows;
  }
};

export const getUsuariosModelid = {
  obtenerUsuarioPorId: async (id) => {
    const [rows] = await pool.query(
      `SELECT * FROM usuarios WHERE id = ?`,
      [id]
    );
    return rows;
  }
};

export const updateUsuarioModel = {
  actualizarUsuario: async ({ id, nombre, email, fecha_nacimiento, estado }) => {
    const [result] = await pool.query(
      `UPDATE usuarios
       SET nombre = ?, email = ?, fecha_nacimiento = ?, estado = ?
       WHERE id = ?`,
      [nombre, email, fecha_nacimiento, estado, id]
    );
    return result;
  }
};

export const updateEstadoUsuarioModel = {
  actualizarEstado: async ({ id, estado }) => {
    const [result] = await pool.query(
      `UPDATE usuarios
       SET estado = ?
       WHERE id = ?`,
      [estado, id]
    );
    return result;
  }
};

export const deletemodelid = {
  deleteusuario: async (id) => {
    const [result] = await pool.query(
      `DELETE FROM usuarios WHERE id = ?`,
      [id]
    );
    return result;
  }
};