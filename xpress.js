const express = require('express')
const app = express()

require('dotenv').config()
const port = process.env.PORT || 3000

// Conexión a la BBDD
const mongoose = require('mongoose')


const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.fwr7p.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`
mongoose.connect(uri,
    {useNewUrlParser: true, useUnifiedTopology: true}
    )
    .then(() => console.log('Base de datos conectada'))
    .then(e => console.log(e))

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


app.listen(port, () => {
    console.log('Servidor en servicio en el puerto: ', port)
})