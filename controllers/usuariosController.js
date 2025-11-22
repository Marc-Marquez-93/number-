import { deletemodelid, UsuariosModel } from '../models/usuariosModel.js';
import {
  getUsuariosModel,
  getUsuariosModelid,
  updateUsuarioModel
} from '../models/usuariosModel.js';

export const getUsuario = async (req, res) => {
  try {
    const usuarios = await getUsuariosModel.obtenerUsuarios();
    return res.json(usuarios);
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
};

export const putuser = async (req, res) => {
  try {

    const { id, nombre, email, fecha_nacimiento, estado } = req.body;

    if (!id) {
      return res.status(400).json({ error: 'El ID es requerido' });
    }

    const result = await updateUsuarioModel.actualizarUsuario({
      id,
      nombre,
      email,
      fecha_nacimiento,
      estado
    });

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    return res.json({ message: 'Usuario actualizado correctamente' });

  } catch (error) {
    return res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
};


export const getUsuarioid = async (req, res) => {
  try {
    const { id } = req.params;

    const usuario = await getUsuariosModelid.obtenerUsuarioPorId(id);

    return res.json(usuario);

  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener el usuario por id' });
  }
};

export const deleteuser = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await deletemodelid.deleteusuario(id);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    return res.json({ message: 'Usuario eliminado correctamente' });

  } catch (error) {
    return res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
};

export const postUsuario = async (req, res) => {
  try {
    const fecha_registro = new Date.now();

    const {
      id,
      nombre,
      email,
      fecha_nacimiento,
      estado
    } = req.body;

    const result = await UsuariosModel.crearUsuario({
      id,
      nombre,
      email,
      fecha_nacimiento,
      estado,
      fecha_registro
    });

    return res.json({
      message: 'Usuario creado correctamente',
      id: result.insertId || id
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error al crear usuario' });
  }
};
