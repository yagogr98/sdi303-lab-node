// Módulos
var mongo = require('mongodb');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var swig = require('swig');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Variables
app.set('port', 8081);
app.set('db',"mongodb://admin:sdi@tiendamusica-shard-00-00-l4it7.mongodb.net:27017,tiendamusica-shard-00-01-l4it7.mongodb.net:27017,tiendamusica-shard-00-02-l4it7.mongodb.net:27017/test?ssl=true&replicaSet=tiendaMusica-shard-0&authSource=admin&retryWrites=true");

//Rutas/controladores por lógica
require("./routes/rusuarios.js")(app, swig); // (app, param1, param2, etc.)
require("./routes/rcanciones.js")(app, swig, mongo); // (app, param1, param2, etc.)

// lanzar el servidor
app.listen(app.get('port'), function() {
    console.log("Servidor activo");
});