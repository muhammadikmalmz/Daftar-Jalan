const mongoose = require('mongoose')

const jalanSchema = mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    alamat : {
        type: String,
        required: true
    },
    tglTerkumpul: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('jalan', jalanSchema)