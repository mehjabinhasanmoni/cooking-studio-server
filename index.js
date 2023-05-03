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

// API for ChefInfo

app.get('/chefinfo', (req, res) => {
    res.send(chefinfo);
});

// API for ChefInfo id wise 3 or more recipes

app.get('/chefinfo/:id', (req, res) => {
    const {id} = req.params;
    console.log(id);

    const chefRecipes = recipes.filter(n=>n.chef_id === id);
    res.send(chefRecipes);
    
});

// API for All Recipes

app.get('/recipes', (req, res) => {
    res.send(recipes);
 });

//  APIfor Recipe Details

app.get('/recipes/:id', (req, res) =>{
    const id = req.params.id;
    console.log(id);
    const selectedRecipe = recipes.find(n=>n.recipe_id === id);
    res.send(selectedRecipe);
})


 

 


app.listen(port, () =>{
    console.log(`Cooking Studio is running on port:${port}`)
})