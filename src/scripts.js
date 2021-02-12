const allRecipesArray = [];
const filterRecipeButton = document.getElementById('filterRecipeButton')
const allRecipesButton = document.getElementById("allRecipesButton")
const allRecipesPage = document.getElementById("allRecipesPage")
const randomRecipesLeft = document.getElementById("leftRecipe")
const randomRecipesRight = document.getElementById("reightRecipe")
const randomRecipes = document.getElementById("randomRecipes")

allRecipesButton.addEventListener("click", displayAllRecipesPage);
window.addEventListener("load", loadAllRecipes);
allRecipesPage.addEventListener("click", displayRecipeInfo)

function loadAllRecipes() {
  createRecipes();
  generateRandomRecipe();
  displayRandomRecipe();
}


function createRecipes() {
  recipeData.forEach((recipe, i) => {
    let recipeToBePushed = new Recipe(recipeData[i])
    allRecipesArray.push(recipeToBePushed)
  })
}

function generateRandomRecipe() {
  return allRecipesArray[Math.floor(Math.random() * allRecipesArray.length)];
}

function displayRandomRecipe() {
  const randomRecipe = generateRandomRecipe()
  const randomRecipe2 = generateRandomRecipe()
  console.log(randomRecipe)
  randomRecipes.innerHTML =
    `<img id=${randomRecipe.id} class="cover-recipes-images" src=${randomRecipe.image}>
      <p class="recipe-name">${randomRecipe.name}</p>
    <img id=${randomRecipe2.id} class="cover-recipes-images" src=${randomRecipe2.image}>
      <p class="recipe-name">${randomRecipe2.name}</p>`
}

function displayRandomRecipeInfo() {
  
}

function displayAllRecipesPage() {
  allRecipesPage.classList.toggle("hidden");
  randomRecipes.classList.toggle("hidden");
  // randomRecipesRight.classList.toggle("hidden");
  if(allRecipesButton.innerHTML === "All Recipes") {
    allRecipesButton.innerHTML = "Home";
  } else {
    allRecipesButton.innerHTML = "All Recipes";
  }
  displayAllRecipeImages();
}

function displayAllRecipeImages() {
  allRecipesPage.innerHTML = ``
  allRecipesArray.forEach(recipe => {
    allRecipesPage.innerHTML +=
    `<img id=${recipe.id} class="all-recipes-images" src=${recipe.image}>`
  })
}

function displayRecipeInfo() {
  const clickedRecipeImage = event.target.closest('.all-recipes-images');
  allRecipesArray.forEach(recipe => {
    if(recipe.id === Number(clickedRecipeImage.id)){
      recipeCardDisplay(recipe.id)
    }
  })
}

function recipeCardDisplay(id) {
  allRecipesArray.forEach(recipe => {
    if(recipe.id === id) {
      allRecipesPage.innerHTML =
      `<section class="recipe-name">${recipe.name}</section>
      <section class="recipe-ingredients">${recipe.returnIngredients()}</section>
      <section class="recipe-cost">${recipe.returnTotalCost()}</section>
      <section class="recipe-instructions" >${recipe.returnInstructions()}</section>`
    }
  } )
}
