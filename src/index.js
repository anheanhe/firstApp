const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const cors = require('cors');

const userRoutes = require('./routes/user.js');

// la variable de ambiente PORT es propia de nodejs. Si no usa el puerto 3000 usar el 3001
const port = process.env.PORT || 3001; 

//middleware (puente entre la aplicación del servidor y los clientes que solicitan recursos a través de la API)
// en el middleware se hacen validaciones y transformaciones de datos, autenticacion y autorizacion de usuarios, cache de respuestas (para que sea mas rapido)
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors()); // esto permite que se conecte el front desde otro dominio diferente al del dominio del back . permite solicitudes https
app.use('/api',userRoutes) ; //aca llamas a todas las rutas de usuarios


//definis la ruta principal de la api
app.get('/', (req,res) => {res.send("Hello world")});

//te conectas a la base de datos Mongo
mongoose
.connect(process.env.DBMONGO_URI)
.then( () => console.log("Conexion Mongo DB Atlas OK"))
.catch( (error) => console.log(error));

//pones a escuchar en un determinado puerto
app.listen(port, ()=> console.log('Servidor web funcionando',port));