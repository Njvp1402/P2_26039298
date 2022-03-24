const { response } = require('express');
const express = require ('express');
const path= require ('path');
const port = process.env.port || 3000;

const app = express ();

app.get('/', (request, response) =>

{

    response.sendFile(path.resolve(__dirname, 'index.html'))

});

app.listen(port, ()=> {
    console.log('servidor en el puerto, port')
})