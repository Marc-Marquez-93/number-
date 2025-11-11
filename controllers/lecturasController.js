import lecturasModel from "../models/lecturasModel.js";

export const generarLecturaPrincipal = async (req, res) => {
  const { usuario_id } = req.params;

  const resultado = await lecturasModel.generarLecturaNumerologica(usuario_id);

  if (!resultado) {
    return res.status(400).json({ error: "No se pudo generar la lectura principal" });
  }

  res.status(200).json(resultado);
};

export const generarLecturaDiaria = async (req, res) => {
  const { usuario_id } = req.params;

  const resultado = await lecturasModel.generarLecturaDiaria(usuario_id);

  if (!resultado) {
    return res.status(400).json({ error: "No se pudo generar la lectura diaria" });
  }

  res.status(200).json(resultado);
};

export const getLecturasPorUsuario = async (req, res) => {
  const { usuario_id } = req.params;
  try {
    const lecturas = await lecturasModel.obtenerLecturasPorUsuario(usuario_id);
    return res.status(200).json(lecturas);
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener las lecturas del usuario' });
  }
};

export const getLecturaPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const lectura = await lecturasModel.obtenerLecturaPorId(id);
    return res.status(200).json(lectura);
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener la lectura por id' });
  }
};