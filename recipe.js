//Access inptus via their ids
const addRecipeBtn = document.getElementById("Add-recipe");
const displayRecipeSection = document.getElementById("recipeDisplay");

let recipes = [];

addRecipeBtn.addEventListener('click',(e) => {
    const recipeName = document.getElementById("recipe-name").value.trim();
    const recipeIngredients = document.getElementById("recipe-ingredients").value.trim();
    const recipeInstructions = document.getElementById("recipe-instructions").value.trim();

    
    let anotherRecipe = {recipeName, recipeIngredients, recipeInstructions};
    recipes.push(anotherRecipe);
      
    document.getElementById("recipe-name").value = "";
    document.getElementById("recipe-ingredients").value = "";
    document.getElementById("recipe-instructions").value = "";
           
    addRecipe();
});

function addRecipe() {
displayRecipeSection.innerHTML = "";
recipes.forEach((element, index) => {
let recipeSection = document.createElement("div");
recipeSection.className = "section-class"
recipeSection.innerHTML =`
<p><strong>Name of Recipe:</strong> <br> ${element.recipeName}</p><br>
<pre><strong>Ingredients names:</strong> <br>${element.recipeIngredients}</pre>
<pre><strong>Follow these Instructions: <br></strong>${element.recipeInstructions}</pre>
<button onclick= "deleteRecipe(${index})">if unwanted ingredient delete</button>

`;
displayRecipeSection.append(recipeSection);

});
};
function deleteRecipe(index){
    recipes.splice(index,1);
    addRecipe();
};