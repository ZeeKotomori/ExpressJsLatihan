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

app.get('/drinks/:item', (req, res) => { //item = set parameter, :item adalah parameter dinamis yang dapat diambil dari URL. Saat sebuah permintaan HTTP diterima, Express.js dapat menangkap nilai yang diberikan pada bagian URL yang sesuai dengan parameter tersebut.
    // console.log(req.params.item); //item = get parameter
    const { item } = req.params; //Dalam kode const { item } = req.params;, kita menggunakan destructuring assignment untuk mengekstrak nilai dari properti item dalam objek req.params. `{ item }` = const item = req.params.item;
    const drinksItem = drinks.find((g) => g.item === item); //const drinksItem = drinks.find((g) => g.item === item);, kita menggunakan metode find() untuk mencari objek dalam array drinks yang memiliki properti item yang sama dengan nilai dari parameter dinamis yang diambil dari URL. (g) => g.item === item adalah fungsi untuk memeriksa apakah properti item dari object dalam array drinks nilainya sama dengan :item, bila ada akan memunculkan data, bila tidak akan memunculkan undifined.
    res.send(drinksItem);
});

app.post('/drinks', (req , res) => { //created a object data
    console.log(req.body);
    drinks.push(req.body); // dataType = JSON
    res.send(201);
});