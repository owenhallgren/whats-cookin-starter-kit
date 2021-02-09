const ingredients = require('../data/ingredients')
const ingredientsData = ingredients.ingredientsData
const recipe = require('./Recipe')

class Ingredient {
  constructor(array) {
    this.ingredients = array;
    this.id = [];
  }
  findIngredientName() {
    this.ingredients.forEach(element => this.id.push(element.id))
    let ingredientObjects;
    this.id.forEach(id => {
      ingredientObjects = ingredientsData.filter(element => element.id === id);
    })
    console.log(ingredientObjects)
    const ingredientNames = [];
    ingredientObjects.forEach(element => ingredientNames.push(element.name));
    return ingredientNames
  };
};


module.exports = Ingredient;
