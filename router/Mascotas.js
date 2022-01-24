const express = require('express')
const router = express.Router()


const Mascota = require('../models/mascota')

router.get('/', async (req, res) => {
    try {

        const arrayMascotasDB = await Mascota.find()
        //console.log(arrayMascotasDB)
        res.render('mascotas', {
            arrayMascotas: arrayMascotasDB
        })

    } catch (error) {
        console.log(error)
    }
})


router.get('/crear', (req, res) => {
    res.render('crear')
})

router.post('/', async (req, res) => {
    const body = req.body
    try {
        const mascotaDB = new Mascota(body)
        await mascotaDB.save()

        res.redirect('/mascotas')
    } catch (error) {
        console.log(error)
    }
})

router.get('/:identificador', async (req, res) => {
    const id = req.params.identificador
    try {
        const mascotaDB = await Mascota.findOne({ _id: id }) // _id se debe al nombre dado en MongoDB
        res.render('detalle', {
            mascota: mascotaDB,
            error: false
        })
    } catch (error) {
        res.render('detalle', {
            error: true,
            mensaje: 'No se encuentra el ID seleccionado'
        })
    }
})


/* router.get('/', (req, res) => {
    res.render('mascotas', {
        arrayMascotas: [
            {
                id: '000', nombre: 'Ventormenta', descripcion: 'Capital de La Alianza'
            },
            {
                id: '010', nombre: 'Orgrimmar', descripcion: 'Capital de La Horda'
            }
        ]
    })
}) */

module.exports = router