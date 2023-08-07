const moment = require('moment');
//BAsicamente es una funcion que sirve para la validacion en un middlegwware en este caso le retornamos el value 
//retorna verdadero o faltso
const isDate = ( value ) => {

    if ( !value ) {
        return false;
    }

    const fecha = moment( value );
    if ( fecha.isValid() ) {
        return true;
    } else {
        return false;
    }
    
}



module.exports = { isDate };


