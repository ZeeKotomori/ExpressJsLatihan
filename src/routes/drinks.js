const { Router } = require('express');

const router = Router();

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

router.get('/', (req, res) => { //get a object data
    res.send(drinks);
});

router.get('/:item', (req, res) => { //item = set parameter, :item adalah parameter dinamis yang dapat diambil dari URL. Saat sebuah permintaan HTTP diterima, Express.js dapat menangkap nilai yang diberikan pada bagian URL yang sesuai dengan parameter tersebut.
    // console.log(req.params.item); //item = get parameter
    const { item } = req.params; //Dalam kode const { item } = req.params;, kita menggunakan destructuring assignment untuk mengekstrak nilai dari properti item dalam objek req.params. `{ item }` = const item = req.params.item;
    const drinksItem = drinks.find((g) => g.item === item); //const drinksItem = drinks.find((g) => g.item === item);, kita menggunakan metode find() untuk mencari objek dalam array drinks yang memiliki properti item yang sama dengan nilai dari parameter dinamis yang diambil dari URL. (g) => g.item === item adalah fungsi untuk memeriksa apakah properti item dari object dalam array drinks nilainya sama dengan :item, bila ada akan memunculkan data, bila tidak akan memunculkan undifined.
    res.send(drinksItem);
});

router.post('/', (req , res) => { //created a object data
    console.log(req.body); //req.body: Objek req (request) adalah objek yang mewakili permintaan HTTP yang masuk. req.body adalah bagian dari objek ini yang berisi data yang dikirimkan melalui tubuh permintaan (request body) baik itu dari postman, thunder client atau rest client.
    drinks.push(req.body); // dataType = JSON
    res.send(201);
});

module.exports = router;