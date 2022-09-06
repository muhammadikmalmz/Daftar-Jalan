const express = require('express')
const jalan = require('../models/jalan')
const router = express.Router()

router.post('/', async (req, res) => {
    const jalanPost = new jalan({
        nama: req.body.nama,
        alamat: req.body.alamat
    })

    try {
        const jalan = await jalanPost.save()
        res.json(jalan)
    }catch(err){
        res.json({message: err})
    }


})


router.get('/', async (req, res) => {
    try {
        const jalan1 = await jalan.find()
        res.json(jalan1)
    }catch(err){
        res.json({message: err})
    }
})


router.put('/:jalanId', async (req, res) => {
    try{
        const jalanUpdate = await jalan.updateOne({_id: req.params.jalanId}, {
            nama: req.body.nama,
            alamat: req.body.alamat
        })
        res.json(jalanUpdate)
    }catch(err){
        console.log(req.body.nama) 
        console.log(req.body.alamat) 
        res.json({message: err})
    }
})
 
router.delete('/:jalanId', async (req, res) => {
    try{
        const jalanUpdate = await jalan.deleteOne({_id: req.params.jalanId}, {
            nama: req.body.nama,
            alamat: req.body.alamat
        })
        res.json(jalanUpdate)
    }catch(err){
        res.json({message: err})
    }
})

module.exports = router