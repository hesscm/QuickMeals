import { combineReducers } from 'redux';
import { recipe, recipeIngredients, searchRecipesVar } from '../../TestVariables';

const randomRecipeIngredients = (state = recipeIngredients, action) => {
    switch (action.type) {
        case 'SET_RANDOM_RECIPE_INGREDIENTS':
            return action.payload;
        default:
            return state;
    }
};//end randomRecipeIngredients reducer function*/

const randomRecipe = (state = recipe, action) => {
    switch (action.type) {
        case 'SET_RANDOM_RECIPE':
            return action.payload;
        default:
            return state;
    }
};//end randomRecipe reducer function*/

const searchRecipes = (state = searchRecipesVar, action) => {
    switch (action.type) {
        case 'SET_API_RECIPES':
            return action.payload;
        default:
            return state;
    }
};//end randomRecipe reducer function*/

const userMeals = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_MEALS':
            return action.payload;
        default:
            return state;
    }
};//end userMeals reducer function*/

export default combineReducers({
    randomRecipeIngredients,
    randomRecipe,
    searchRecipes,
    userMeals,
});