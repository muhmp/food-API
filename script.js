const searcBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDeatailContent = document.querySelector('.meal-detalis-content');

const recipeCloseBtn = document.getElementById('recipe-close-btn');

//event listeners
searcBtn.addEventListener('click',getMealList);

//get meal list that matches with the ingredients
function getMealList(){
    let searchInputTxt = document.getElementById('search-input').ariaValueMax.trim();
    console.log(searchInputTxt);
}