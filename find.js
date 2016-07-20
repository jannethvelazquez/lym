// 1* Rescatando el argumento que es 
// pasando el script
var ageArgument = +process.argv[2];

//Conectarnos a la base de datos 
// Paso 1.. Cargar el driver en nuestro script
var mongodb = require('mongodb');
//Paso 2. El driver de mongodb nos proporciona un cliente 
// Por lo q extraemos d ela libreria 
var mongoClient = mongodb.MongoClient;
// Paso 3. Conectamos el cliente con la base de datos 
mongoClient.connect("mongodb://127.0.0.1:27017/learnyoumongo",
function(err, db){
    //Verificando si hubo un error en la base de datos
    if(err){
        console.log("> Error al conectarse a: "+
        "mongodb://127.0.0.1:27017/learnyoumongo");
        throw err; // El codigo no continuo
    }
//Obteniendo la coleccion 
 var parrotsCollection = db.collection('parrots');
 // aplicando un query sobre la collection
 var objetoResultado = parrotsCollection.find({
        age: {$gt : ageArgument}
 });
   // 
   objetoResultado.toArray(function(err, docs){
      console.log(docs);
      //Cerrando la conexion 
      db.close();
   });
});                                                                                                                                                 
          