// const recipes = require('../data/recipes');
// const ingredients = require('../data/ingredients');
// const allIngredients = ingredients.ingredientsData;
// const data = require('../test/Data')
// dummyIngredientData = data.dummyIngredientData
class Recipe {
  constructor(recipeObject) {
    this.id = recipeObject.id;
    this.image = recipeObject.image;
    this.ingredients = recipeObject.ingredients;
    this.instructions = recipeObject.instructions;
  }

  returnIngredients() {
    return this.ingredients.map(ingredient => dummyIngredientData.find(i => i.id === ingredient.id).name);
  }

  returnTotalCost() {
    let costs = this.ingredients.map(ingredient => dummyIngredientData.find(i => i.id === ingredient.id).estimatedCostInCents * ingredient.quantity.amount);
    let totalCost = costs.reduce((total, currentValue) => total + currentValue);
    return totalCost / 100;
  }

  returnInstructions() {
    return this.instructions;
  }

}


if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
