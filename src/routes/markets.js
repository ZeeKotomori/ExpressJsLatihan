const { Router } = require("express");

const router = Router();

const markets = [
    {
        id: 1,
        name: "toko merah",
        km : 1
    },
    {
        id: 2,
        name: "toko kuning",
        km : 2
    },
    {
        id: 3,
        name: "toko hijau",
        km : 3
    },
    {
        id: 4,
        name: "toko biru",
        km : 4
    }
];

router.get('/', (req, res) => {
    const { km } = req.query; //req.query adalah properti dari objek req (request) pada Express.js yang berisi parameter query dari URL. (markets?km=...)
    const parseKm = parseInt(km); //parseInt() adalah fungsi JavaScript yang digunakan untuk mengonversi nilai menjadi bilangan bulat (integer).parseInt() adalah fungsi JavaScript yang digunakan untuk mengonversi nilai menjadi bilangan bulat (integer).
    if(!isNaN(parseKm)){ //isNaN() adalah fungsi JavaScript yang mengembalikan true jika nilai yang diberikan adalah NaN (Not a Number), dan false jika bukan NaN.
        const filterMarkets = markets.filter((s) => s.km <= parseKm); //filter() adalah metode pada array JavaScript yang digunakan untuk membuat array baru dengan elemen-elemen yang memenuhi suatu kondisi. Dalam konteks ini, filterMarkets akan berisi elemen-elemen dari array markets yang memenuhi kondisi s.km <= parseKm.
        res.send(filterMarkets);
    }else{
        res.send("tidak ada toko terdekat");
    }
});

router.post('/', (req, res) => {
    console.log(req.body);
    markets.push(req.body);
    res.status(201);
});

module.exports = router;