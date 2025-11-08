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





