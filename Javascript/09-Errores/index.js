/**
 * Crea un nuevo proyecto de Node

- Instala la dependencia Winston
- En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
- Registra el error en un archivo a través de un try...catch
 */
const logger = require("./errores/index")

function errores () {
    throw new Error("soy un error")
}


try {
    errores();
} catch (error) {
    logger.error(error);
    logger.log("Error ups!", error);
}