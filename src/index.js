const express = require('express');

const app = express();
const PORT = 3001;

app.use(express.json()); //Middleware express.json() digunakan untuk mem-parsing (mengurai) data permintaan HTTP yang dikirim dalam format JSON. JSON -> OBJECT
app.use(express.urlencoded()); //Middleware express.urlencoded() digunakan untuk mem-parsing data permintaan HTTP yang dikirim dalam format URL-encoded. Ini adalah format standar untuk mengirim data formulir melalui permintaan HTTP.

app.use((req, res, next) => { //next adalah fungsi yang harus dipanggil untuk melanjutkan eksekusi ke middleware berikutnya atau ke penanganan rute jika diperlukan.
    console.log(`${req.method}:${req.url}`); //${req.method} mengambil metode HTTP dari objek permintaan, seperti "GET," "POST," atau "PUT.", ${req.url} mengambil URL permintaan.
    next(); // fungsi next(), yang mengindikasikan bahwa middleware ini telah selesai menjalankan tugasnya dan harus melanjutkan eksekusi ke middleware berikutnya
});

app.listen(PORT, () => console.log(`server run on port ${PORT}`)); //port
const drinks = [ //obejct data
    {
    item: 'milk',
    quantity: 2
    },
    {
    item: 'coffee',
    quantity: 2
    },
    {
    item: 'tea',
    quantity: 2
    }
]
app.get('/drinks', (req, res) => { //get a object data
    res.send(drinks);
});

app.post('/drinks', (req , res) => { //created a object data
    console.log(req.body);
    drinks.push(req.body); // dataType = JSON
    res.send(201);
});