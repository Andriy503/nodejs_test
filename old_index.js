var app = require('express')();
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

let cars = [
    {
        id: 1,
        name: 'audi'
    },
    {
        id: 2,
        name: 'mersedec'
    },
    {
        id: 3,
        name: 'bmw'
    }
];
 
app.get('/', (req, res) => res.render('index', {cars: cars, link: 'Add'}));
app.get('/create', (req, res) => res.render('create'));

app.post('/create', (req, res) => {
    let newId = cars[cars.length-1].id + 1;

    cars.push({
        id: newId,
        name: req.body.text || 'No name'
    });

    res.redirect('/');
});
 
app.listen(3000);