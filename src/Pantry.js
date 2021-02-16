class Pantry {
  constructor(ingredients) {
    this.ingredients = ingredients
    this.canCook = false;
  }

  returnPantryIngredients(x, recipes) {
    let ingredientInfo = this.ingredients.map(ingredient => {
      let ingredientName = x.find(y => ingredient.ingredient === y.id)
      let recipeUnit = recipes.reduce((acc, current) => {
        current.ingredients.forEach(r => {
          if(r.id === ingredient.ingredient) {
            acc = r.quantity.unit;
          }
        })
        return acc;
      }, "")
      return `${ingredient.amount} ${ingredientName.name} ${recipeUnit}`
    })
    console.log(ingredientInfo)
    return ingredientInfo
  }

  checkUserIngredients(recipe) {
  let result = "You cooked this!"
	let missingIngredient;

   recipe.ingredients.forEach(recipeIngredient => {
      if(!this.ingredients.find(pantryIngredient => recipeIngredient.id === pantryIngredient.ingredient && recipeIngredient.quantity.amount <= pantryIngredient.amount)) {
		missingIngredient = recipeIngredient;
      }
    });

	if(missingIngredient){

		let qtyOnHand = 0;

		let ingredientOnHand = this.ingredients.find(pantryIngredient => missingIngredient.id === pantryIngredient.ingredient);

		if(ingredientOnHand) {
			qtyOnHand = ingredientOnHand.amount;
		}
    let missingIngredientName = ingredientsData.find(ingredient => ingredient.id === missingIngredient.id).name
		let missingAmount = missingIngredient.quantity.amount - qtyOnHand;
    this.canCook = false;
	  result = `You can’t cook this, you need ${missingAmount} more ${missingIngredient.quantity.unit} of ${missingIngredientName}`;
    return result;
	}
    this.canCook = true;
    this.cookMeal(recipe)
    return result;
  }

  cookMeal(recipe) {
    if(this.canCook) {recipe.ingredients.forEach(recipeIngredient => {
    let pantryIngredient = this.ingredients.find(pantryIngredient => pantryIngredient.ingredient === recipeIngredient.id);
    pantryIngredient.amount -= recipeIngredient.quantity.amount;
    });}

  }

}


if (typeof module !== "undefined") {
  module.exports = Pantry;
}
