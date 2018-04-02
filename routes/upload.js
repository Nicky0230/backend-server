var express = require('express');

var fileUpload = require('express-fileupload');

var app = express();

// default options
app.use(fileUpload());

app.put( '/', (req, res, next) => {

    if( !req.files ){
      return res.status(400).json({
        ok: false,
        mensaje: 'No selecciono nada',
        errors: { message: 'Debe de seleccionar una imagen'}
        });
     }

     // Obtener nombre del archivo
     var archivo = req.files.imagen;
     var nombreCortado =  archivo.name.split('.');
     var extensionArchivo = nombreCortado [ nombreCortado.length -1 ];

     // Solo estas extensiones aceptamos 
     var extensionesValidas = ['png', 'jpg', 'gif', 'jpeg'];

     if( extensionesValidas.indexOf( extensionesValidas ) < 0 ){
        return res.status(400).json({
            ok: false,
            mensaje: 'Extension no valida',
            errors: { message: 'Las extensiones válidas son ' + extensionesValidas.join(', ') }
            });
     }

    res.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente',
        extensionArchivo: extensionArchivo
    });

});

module.exports = app;