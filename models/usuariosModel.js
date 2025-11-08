// import pool from '../config/db.js';

// export async function crearUsuario({ nombre, email }) {
//   const [result] = await pool.query(
//     'INSERT INTO usuarios (id,nombre, email,fecha_nacimiento,estado,fecha_registro ) VALUES (?, ?,?,?,?,?)',
//     [id,nombre, email,fecha_nacimiento,estado,fecha_registro ]
//   );
//   return { id: result.insertId, nombre, email,fecha_nacimiento,estado,fecha_registro };
// }

// models/usuarioModel.js
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

    
