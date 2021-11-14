const express = require('express')
const router = express.Router()


const Mascota = require('../models/mascota')

router.get('/', async (req, res) =>{
    try {
        
        const arrayMascotasDB = await Mascota.find()
        console.log(arrayMascotasDB)
        res.render('mascotas', {
            arrayMascotas: arrayMascotasDB
        })

    } catch (error) {
        console.log(error)
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