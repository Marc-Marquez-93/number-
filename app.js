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
import 'dotenv/config' 
import usuarioRoutes from './routes/usuariosRoutes.js';
// import pagoRoutes from './routes/pagosRoutes.js';
// import lecturaRoutes from './routes/lecturasRoutes.js';    


const app = express();

app.use(express.json());

app.use('/api/usuarios', usuarioRoutes);   
// app.use('/api/pagos', pagoRoutes);
// app.use('/api/lecturas', lecturaRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`);
});





