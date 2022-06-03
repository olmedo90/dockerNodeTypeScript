import express from 'express';
import IndexRoutes from './routes';
import bodyParser from 'body-parser';
import ComentRoutes from './routes/comentarios';
import UsersRoutes from './routes/usersRoutes';
//inicializacion
const app = express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
//settigns
require('dotenv').config();

app.set('port', process.env.PORT || 3000);
//midlewares
app.use(express.urlencoded({extended:false}))
app.use(express.json());
//routes
app.use('/',IndexRoutes)
app.use('/comentarios', ComentRoutes);
app.use('/users', UsersRoutes);

//conect data base
import './database';
//starting the server
app.listen(app.get('port'),()=>{
    console.log(`servidor en el puerto ${app.get('port')}`);
});



