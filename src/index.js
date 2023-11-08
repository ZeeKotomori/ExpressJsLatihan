const express = require("express"); //get a module of express.js

const app = express(); //important
const PORT =  3001; //var port

app.use(express.json()); //Middleware express.json() digunakan untuk mem-parsing (mengurai) data permintaan HTTP yang dikirim dalam format JSON. JSON -> OBJECT
app.use(express.urlencoded()); //Middleware express.urlencoded() digunakan untuk mem-parsing data permintaan HTTP yang dikirim dalam format URL-encoded. Ini adalah format standar untuk mengirim data formulir melalui permintaan HTTP.

app.listen(PORT, () => console.log(`server run at port ${PORT}`)); //port

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
