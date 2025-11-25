import pool from '../config/db.js';


 const pagosModel = {
  listarPagos: async () => {
    const [rows] = await pool.query("SELECT * FROM pagos");
    return rows;
  },

  pagosPorUsuario: async (usuario_id) => {
    const [rows] = await pool.query(
      "SELECT * FROM pagos WHERE usuario_id = ? ORDER BY fecha_pago DESC",
      [usuario_id]
    );
    return rows;
  },

  registrarPago: async ({ usuario_id, fecha_pago, fecha_vencimiento }) => {
    const [result] = await pool.query(
      `INSERT INTO pagos (usuario_id, fecha_pago, fecha_vencimiento)
       VALUES (?, ?, ?)`,
      [usuario_id, fecha_pago, fecha_vencimiento]
    );
    return result;
  },

  actualizarEstadoUsuario: async (usuario_id, estado) => {
    await pool.query(
      "UPDATE usuarios SET estado = ? WHERE id = ?",
      [estado, usuario_id]
    );
  },

  obtenerEstado: async (usuario_id) => {
    const [rows] = await pool.query(
      `SELECT estado FROM usuarios WHERE id = ?`,
      [usuario_id]
    );
    return rows.length ? rows[0] : null;
  },
};

export default pagosModel;