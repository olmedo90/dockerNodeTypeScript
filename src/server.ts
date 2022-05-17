import express from 'express';
import IndexRoutes from './routes'
import ComentRoutes from './routes';
//inicializacion
const app = express();
//settigns
require('dotenv').config();
app.set('port', process.env.PORT || 3000);
//midlewares

//routes
app.use('/saludos',IndexRoutes)
app.use('/comentarios', ComentRoutes)
//conect data base

//starting the server
app.listen(app.get('port'),()=>{
    console.log(`servidor en el puerto ${app.get('port')}`);
});



