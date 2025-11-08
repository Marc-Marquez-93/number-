// "dotenv": "^17.2.3",
//     "express": "^5.1.0",
//     "express-validator": "^7.3.0",
//     "mysql2": "^3.15.3"

import express from 'express';
import 'dotenv/config' 
const app = express();

app.use(express.json());

// app.use('/api/usuarios', usuarioRoutes);

app.listen(process.env.PORT, () => console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`));