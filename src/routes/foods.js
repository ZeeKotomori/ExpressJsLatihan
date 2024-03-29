const { Router } = require('express');

const router = Router();

const foods = [
    {
        id: 1,
        item: 'Basreng',
        quantity: 20
    },
    {
        id: 2,
        item: 'Batagor',
        quantity: 10
    },
    {
        id: 3,
        item: 'Baso',
        quantity: 5
    },
]

router.get('/', (req, res) => {
    res.send(foods);
});

router.get('/:item', (res, req) => {
    const { item } = req.params;
    const foodItems = foods.find((g) => g.item === item);
    res.send(foodItems);
});

router.post('/', (res, req) => {
    console.log(req.body);
    foods.push(req.body);
    res.send(201);
});

module.exports = router;