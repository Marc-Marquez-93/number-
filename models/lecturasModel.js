import axios from "axios";
import pool from "../config/db.js";

const lecturasModel = {
    generarLecturaNumerologica: async (usuario_id) => {
        try {
            const [existePrincipal] = await pool.query(
                `SELECT id FROM lecturas 
         WHERE usuario_id = ? AND estado = 'principal' 
         LIMIT 1`,
                [usuario_id]
            );

            if (existePrincipal.length > 0) {
                console.log("✅ Ya existe una lectura principal para este usuario. No se generará otra.");
                return null;
            }

            const [rows] = await pool.query(
                `SELECT fecha_nacimiento FROM usuarios WHERE id = ? LIMIT 1`,
                [usuario_id]
            );

            if (rows.length === 0) {
                console.log("⚠️ No se encontró una fecha de nacimiento para este usuario.");
                return null;
            }

            const fechaNacimiento = new Date(rows[0].fecha_nacimiento).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric"
            });

            const keys = [
                process.env.API_KEY,
                process.env.API_KEY2,
                process.env.API_KEY3
            ];

            const MODEL = "gemini-2.0-flash";
            let respuesta = null;

            for (const key of keys) {
                try {
                    const contenido = [
                        {
                            role: "user",
                            parts: [{
                                text: `Eres un experto en numerología moderna. Analiza la fecha ${fechaNacimiento} y haz una lectura mística, clara y breve.`
                            }]
                        }
                    ];

                    const resGemini = await axios.post(
                        `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${key}`,
                        { contents: contenido },
                        { headers: { "Content-Type": "application/json" } }
                    );

                    respuesta = resGemini.data.candidates?.[0]?.content?.parts?.[0]?.text;
                    if (respuesta) break;
                } catch (err) {
                    console.warn(`⚠️ Falló la API key actual, probando siguiente...`);
                }
            }

            if (!respuesta) {
                console.error("❌ No se pudo obtener respuesta de ninguna API key.");
                return null;
            }

            await pool.query(
                `INSERT INTO lecturas (usuario_id, contenido, estado) VALUES (?, ?, 'principal')`,
                [usuario_id, respuesta]
            );

            const fechaActual = new Date().toISOString().slice(0, 19).replace("T", " ");
            console.log(`💾 Lectura principal guardada correctamente el ${fechaActual}.`);
            return {id:usuario_id, fecha: fechaActual, respuesta };

        } catch (err) {
            console.error("❌ Error al generar lectura numerológica principal:", err);
            return null;
        }
    },
    generarLecturaDiaria: async (usuario_id) => {
        try {
            const [usuario] = await pool.query(
                `SELECT estado, fecha_nacimiento FROM usuarios WHERE id = ? LIMIT 1`,
                [usuario_id]
            );

            if (usuario.length === 0) {
                console.log("⚠️ Usuario no encontrado.");
                return null;
            }

            if (usuario[0].estado !== "activo") {
                console.log("⛔ El usuario está inactivo, no se puede generar lectura diaria.");
                return null;
            }

            const hoy = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

            const [lecturaHoy] = await pool.query(
                `SELECT id FROM lecturas 
         WHERE usuario_id = ? 
         AND estado = 'diaria' 
         AND DATE(fecha_lectura) = ? 
         LIMIT 1`,
                [usuario_id, hoy]
            );

            if (lecturaHoy.length > 0) {
                console.log("✅ Ya existe una lectura diaria para este usuario hoy.");
                return null;
            }

            const fechaNacimiento = new Date(usuario[0].fecha_nacimiento).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric"
            });

            const keys = [
                process.env.API_KEY,
                process.env.API_KEY2,
                process.env.API_KEY3
            ];

            const MODEL = "gemini-2.0-flash";
            let respuesta = null;

            for (const key of keys) {
                try {
                    const contenido = [
                        {
                            role: "user",
                            parts: [{
                                text: `Eres un experto en numerología pitagórica diaria. 
                Analiza la energía del día actual según la fecha de nacimiento ${fechaNacimiento}. 
                Menciona el número del día y cómo influye en las emociones, decisiones y energía del usuario hoy. 
                Tono: inspirador, breve (máximo 4 frases) y con un toque místico.`
                            }]
                        }
                    ];

                    const resGemini = await axios.post(
                        `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${key}`,
                        { contents: contenido },
                        { headers: { "Content-Type": "application/json" } }
                    );

                    respuesta = resGemini.data.candidates?.[0]?.content?.parts?.[0]?.text;
                    if (respuesta) break;
                } catch (err) {
                    console.warn(`⚠️ Falló la API key actual, probando siguiente...`);
                }
            }

            if (!respuesta) {
                console.error("❌ No se pudo obtener respuesta de ninguna API key.");
                return null;
            }

            await pool.query(
                `INSERT INTO lecturas (usuario_id, contenido, estado) VALUES (?, ?, 'diaria')`,
                [usuario_id, respuesta]
            );

            const fechaActual = new Date().toISOString().slice(0, 19).replace("T", " ");
            console.log(`💾 Lectura diaria guardada correctamente el ${fechaActual}.`);

            return {id:usuario_id, fecha: fechaActual, respuesta };

        } catch (err) {
            console.error("❌ Error al generar lectura numerológica diaria:", err);
            return null;
        }
    },
    obtenerLecturasPorUsuario: async (usuario_id) => {
        const [rows] = await pool.query(
            `SELECT * FROM lecturas WHERE usuario_id = ? ORDER BY fecha_lectura DESC`,
            [usuario_id]
        );
        return rows;
    },
    obtenerLecturaPorId: async (id) => {
        const [rows] = await pool.query(
            `SELECT * FROM lecturas WHERE id = ?`,
            [id]
        );
        return rows[0];
    }
};


export default lecturasModel;
