const express = require('express')
const app = express()

// Motor de plantillas
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + '/public')) // Fijamos el directorio donde ira la web

// Rutas Web (API)
app.use('/', require('./router/rutasWeb'))
app.use('/mascotas', require('./router/Mascotas'))


app.use((req, res, next) => {
    res.status(404).render('404', {
        titulo: 'Error 404',
        descripcion: 'Página de error 404',
        apreciacion: 'Tolili'
    })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Servidor en servicio en el puerto: ', port)
})