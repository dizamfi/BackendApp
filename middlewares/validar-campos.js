const { response } = require('express');

const validarCampos = (req, res = response, next) => {
    try {
        console.log('verificacion');
    } catch (error) {
        
    }

    next();

}

module.exports = {
    validarCampos

}