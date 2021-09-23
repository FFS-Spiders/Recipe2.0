const models = require('../models/userModel.js');
const axios = require('axios');
//none of this is really used in the production version...
const recipeController = {};

recipeController.getRecipe = (req, res, next) => {
  const titleArr = [];
  const idArr = [];
  const imageArr = [];
  const responseArr = [];
  console.log('in recipe post')
  if (req.body.cuisine && req.body.ingredients) {
    console.log('hit post condition')
    //apikey limited to 150 calls per day (3 calls per fetch request (1 for title/image, 1 for directions, 1 for ingredients))
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=b590a20addb14d829ce4023ee7dcb171&cuisine=${req.body.cuisine}&includeIngredients=${req.body.ingredients}`
      )
      .then(response => {
        // console.log(response.data.results[0].id);
        // console.log(response.data.results[0].title);
        // console.log(response.data.results[0].image);
        // const result = response.data.results[0];
        // console.log(result);
        // console.log(response.id);
        // console.log(response.data.results.data)
        // res.send(response.data.results);
        for (let i = 0; i < req.body.count; i++) {
          titleArr.push(response.data.results.data[i].title);
          idArr.push(response.data.results.data[i].id);
          imageArr.push(response.data.results.data[i].image);
        };
        // // console.log('titles',titleArr);
        // console.log('ids',idArr)
        // return res.send(titleArr)
        // res.locals.recipe = response.data.results;
        // console.log('getrecipe', res.locals.recipe)
        console.log(titleArr)
        console.log(res.locals.recipe[0])
        next();
      })
  } else {
    //hi from joel brb 1 min
    return res.status(400).send('Could not find recipe.');
  }
};

recipeController.getIngredients = (req, res, next) => {
  // console.log('getingredients',res.locals.recipe)
  // console.log('in get ingredients')
  // return res.send(res.locals.recipeIds)
  // console.log(res.locals.recipeIds)
  // const instructions = [];
  // return res.send(res.locals.recipe.data)
  // axios
  //   .get(`https://api.spoonacular.com/recipes/${res.locals.recipeIds[0]}/analyzedInstructions`
  //   )
  //   .then(response => {
  //     res.locals.ingredients = response;
  //     return next();
  //   })
  //   .catch( error => res.status(300).send('bad request for get ingreditents'))
  // console.log('instructions', instructions)
  next();
}

recipeController.getDirections = (req, res, next) => {
  return next();
}

recipeController.findMeals = (req, res, next) => {
  //fetch api data and have a way to filter out data
  //take in pantry ingredients in request body and prioritize results based on pantry ingredients
  //filter based on cuisines and input ingredients from filter pop-up
};

/* Spoonacular Docs: https://spoonacular.com/food-api/docs */
//example of fetch request from frontend to API:
// componentDidMount() {
//     //additional params and api key needed at end of fetch req
//     fetch("https://api.spoonacular.com/recipes/findByIngredients?ingredients=<ingredientStringInput>") //ingredientStringInput
//       .then(res => res.json())
//       .then(
//         (result) => {
//           this.setState({
//             isLoaded: true,
//             items: result.items
//           });
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error
//           });
//         }
//       )
//   }

module.exports = recipeController;
