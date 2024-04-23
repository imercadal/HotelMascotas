import app from './server/app.js'; // Importando el servidor
import { connectDB } from './server/db.js'; // Importando la conexión a la base de datos


connectDB(); // Conectando a la base de datos

const puerto = app.listen(3000) // Iniciando el servidor en el puerto 3000

console.log(`El servidor esta en el puerto: ${puerto.address().port}`) // Imprimiendo en consola el puerto en el que se esta ejecutando el servidor




