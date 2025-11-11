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