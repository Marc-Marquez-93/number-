import lecturasModel from "../models/lecturasModel.js";

export const generarLecturaPrincipal = async (req, res) => {
  const { usuario_id } = req.params; 

  const resultado = await lecturasModel.generarLecturaNumerologica(usuario_id);

  if (!resultado) {
    return res.status(400).json({ error: "No se pudo generar la lectura principal" });
  }

  res.status(200).json(resultado);
};
