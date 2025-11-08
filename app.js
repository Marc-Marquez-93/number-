// import express from 'express';
// import "dotenv/config"
// // import usuariosRouter from './routes/usuariosRoutes.js';


// const app = express();

// // Middleware para recibir JSON
// app.use(express.json());

// // Rutas principales
// // app.use('/api/usuarios', usuarioRouter);


// // // Ruta por defecto (opcional)
// // app.get('/', (req, res) => {
// //   res.send('API funcionando correctamente');
// // });


// app.listen(process.env.PORT, () => console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`));
import express from 'express';
import 'dotenv/config';

import usuariosRouter from './routes/usuariosRouter.js';   // ✅ Import CORRECTO

const app = express();

// Middleware para recibir JSON
app.use(express.json());

// Rutas principales
app.use('/api/usuarios', usuariosRouter);   

// Ruta por defecto
app.get('/', (req, res) => {
  res.send('API funcionando correctamente');});

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`);
});


