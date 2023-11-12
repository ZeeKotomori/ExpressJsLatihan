const express = require('express');
const drinksRouter = require('./routes/drinks.js'); //export data file drinks.js dari ./routes/
const foodRouter = require('./routes/foods.js');
const marketRouter = require('./routes/markets.js');

const app = express();
const PORT = 3001;

app.use(express.json()); //Middleware express.json() digunakan untuk mem-parsing (mengurai) data permintaan HTTP yang dikirim dalam format JSON. JSON -> OBJECT
app.use(express.urlencoded()); //Middleware express.urlencoded() digunakan untuk mem-parsing data permintaan HTTP yang dikirim dalam format URL-encoded. Ini adalah format standar untuk mengirim data formulir melalui permintaan HTTP.

app.use((req, res, next) => { //next adalah fungsi yang harus dipanggil untuk melanjutkan eksekusi ke middleware berikutnya atau ke penanganan rute jika diperlukan.
    console.log(`${req.method}:${req.url}`); //${req.method} mengambil metode HTTP dari objek permintaan, seperti "GET," "POST," atau "PUT.", ${req.url} mengambil URL permintaan.
    next(); // fungsi next(), yang mengindikasikan bahwa middleware ini telah selesai menjalankan tugasnya dan harus melanjutkan eksekusi ke middleware berikutnya
});

app.use('/api/v1/drinks', drinksRouter); //Menambahkan base path atau prefix path ini dapat membantu dalam pengorganisasian rute-rute API, terutama jika berencana untuk mengembangkan versi API yang berbeda di masa depan. Ini juga membantu memisahkan rute-rute yang berkaitan dengan minuman (drinks) dari rute-rute lain yang mungkin ada di dalam aplikasi Anda.
app.use('/api/v1/foods', foodRouter);
app.use('/api/v1/markets', marketRouter);

app.listen(PORT, () => console.log(`server run on port ${PORT}`)); //port