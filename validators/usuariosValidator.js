export const validarCreacionUsuario = (req, res, next) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: 'El body está vacío' });
  }

  const { id, nombre, email } = req.body;

  if (!id || !nombre || !email) {
    return res.status(400).json({ error: 'id, nombre y email son obligatorios' });
  }

  next();
};
