const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefinfo = require('./data/chefinfo.json');
const recipes = require('./data/recipes.json');

app.use(cors());

app.get('/', (req, res) =>{
    res.send('Cooking Studio is Running');
});


app.get('/chefinfo', (req, res) => {
    res.send(chefinfo);
});




app.listen(port, () =>{
    console.log(`Cooking Studio is running on port:${port}`)
})