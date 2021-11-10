const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('mascotas', { 
        arrayMascotas:[
            {
                id: '000', nombre: 'Ventormenta', descripcion: 'Capital de La Alianza',
                id: '010', nombre: 'Orgrimmar', descripcion: 'Capital de La Horda'
            }
        ]
    })
})

module.exports = router