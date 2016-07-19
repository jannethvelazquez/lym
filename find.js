// 1. Rescatando el argumento que es
// pasado al script
var ageArgument = +process.argv[2];

// Conectarnos a la base de datos
// Paso 1. Cargar el driver en nuestro script

var mongodb = require('mongodb');
// Paso 2. Eldriver de ÇMongodb nos proporciona 
// un cliente , por lo que extraemos de 
// la libreria
var mongoClient = mongodb.MongoClient;
// Paso 3. Conectamos el cliente con la base 
// de datos
mongoClient.connect("mongodb://127.0.0.1:27017/learnyoumongo",
function(err, db){
    // Verificando si hubno error
    // en la conexion
    if(err){
        console.log("> Error al conectarse a: "+
        'mongodb://127.0.0.1:27017/learnyoumongo');
        throw err;

    }
// Obteniendo la coleccion
   var parrotsCollection = db.collection('parrots');
   // Aplicando un query sobre la coleccion
 var objectoResultado =  parrotsCollection.find({
           age : {$gt : ageArgument}
       }); 
       //
       objectoResultado.toArray(function(err,docs){
           console.log(docs);
           // cerrando la conexion
           db.close();

       });   
});