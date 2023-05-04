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

// API for All Chefs Info

app.get('/chefinfo', (req, res) => {
    res.send(chefinfo);
});

// API for individual chefs recipes

app.get('/recipes/:chef_id', (req, res) => {
    const {chef_id} = req.params;
    console.log(chef_id);

    const chefRecipes = recipes.filter(n=>n.chef_id === chef_id);
    res.send(chefRecipes);
    
});

// API for individual ChefInfo

app.get('/chefinfo/:chef_id',(req, res) =>{
    const {chef_id} = req.params;
    console.log(chef_id);

    const chefInfo = chefinfo.find(n=>n.chef_id === chef_id);
    res.send(chefInfo);
})

// API for All Recipes

app.get('/recipes', (req, res) => {
    res.send(recipes);
 });

//  APIfor Recipe Details

// app.get('/recipes/:id', (req, res) =>{
//     const id = req.params.id;
//     console.log(id);
//     const selectedRecipe = recipes.find(n=>n.recipe_id === id);
//     res.send(selectedRecipe);
// })


 

 


app.listen(port, () =>{
    console.log(`Cooking Studio is running on port:${port}`)
})