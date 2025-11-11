import { UsuariosModel } from '../models/usuariosModel.js';
import { getUsuariosModel } from '../models/usuariosModel.js';
import { getUsuariosModelid } from '../models/usuariosModel.js';

export const getUsuario = async (req, res) => {
  try {
    const usuarios = await getUsuariosModel.obtenerUsuarios();  
    return res.json(usuarios);
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
};

export const getUsuarioid = async (req, res)=>{
  try{
    const usuariosid = await getUsuariosModelid.  obtenerUsuarioPorId(id);
    return res.json(usuariosid)
  } catch(error){
    return res.status(500).json({ error: 'Error al obtener los usuarios por id' });
  }
  }



export const postUsuario = async (req, res) => {
  const {
    id,
    nombre,
    email,
    fecha_nacimiento,
    estado,
    fecha_registro
  } = req.body;

  try {
    const result = await UsuariosModel.crearUsuario({
      id,
      nombre,
      email,
      fecha_nacimiento,
      estado,
      fecha_registro
    });

    res.json({
      message: 'Usuario creado correctamente',
      id: result.insertId || id
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear usuario' });
  }
};
