const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
require('dotenv').config();
const cors = require('cors');
const { connectionDB } = require('./db/config');


connectionDB();

app.use(cors());

//sapp.use( express.static('public') );

app.use(express.json());

//rutas

app.use('/api/santapriscila/chanduy/eb', require('./routes/santapriscila/chanduy/eb'));
app.use('/api/santapriscila/cabala1/eb', require('./routes/santapriscila/cabala1/eb'));
app.use('/api/santapriscila/cabala2/eb', require('./routes/santapriscila/cabala2/eb'));
app.use('/api/santapriscila/california/eb', require('./routes/santapriscila/california/eb'));
app.use('/api/santapriscila/california/aireacion', require('./routes/santapriscila/california/aireacion'));
app.use('/api/auth', require('./routes/auth/auth'));

server.listen(process.env.PORT, () => {
    console.log(`Servidor ejecutandose en puerto ${process.env.PORT}`)
});
