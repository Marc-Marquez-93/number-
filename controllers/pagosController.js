import {
  pagosModel
} from '../models/pagosModels.js';



export const pagosController = {
  listar: async (req, res) => {
    try {
      const pagos = await pagosModel.listarPagos();
      res.json(pagos);
    } catch (err) {
      res.status(500).json({ error: "Error al listar pagos" });
    }
  },

  pagosUsuario: async (req, res) => {
    try {
      const { usuario_id } = req.params;
      const pagos = await pagosModel.pagosPorUsuario(usuario_id);
      res.json(pagos);
    } catch (err) {
      res.status(500).json({ error: "Error al consultar pagos" });
    }
  },

  registrarPago: async (req, res) => {
    try {
      const { usuario_id } = req.body;

      const fecha_pago = new Date();
      const fecha_vencimiento = new Date();
      fecha_vencimiento.setDate(fecha_vencimiento.getDate() + 30);

      await pagosModel.registrarPago({
        usuario_id,
        fecha_pago,
        fecha_vencimiento,
      });

      await pagosModel.actualizarEstadoUsuario(usuario_id, "activo");

      res.json({
        mensaje: "Pago registrado correctamente",
        estado: "activo",
      });
    } catch (err) {
      res.status(500).json({ error: "Error al registrar pago" });
    }
  },

  estado: async (req, res) => {
    try {
      const { usuario_id } = req.params;

      const estado = await pagosModel.obtenerEstado(usuario_id);

      if (!estado) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }

      res.json({ usuario_id, estado: estado.estado });
    } catch (err) {
      res.status(500).json({ error: "Error al consultar estado" });
    }
  },
};
