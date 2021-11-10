const express = require('express')
const app = express()

// Motor de plantillas
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + '/public')) // Fijamos el directorio donde ira la web


app.get('/', (req, res) => {
    res.render('index', { titulo: 'mi titulo del index dinámico' })
})
app.get('/servicios', (req, res) => {
    res.render('servicios', { titulo: 'Mi título dinámico de servicios' })
})

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