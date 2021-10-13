import { combineReducers } from 'redux';
import { recipe, recipeIngredients } from '../../TestVariables';

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

const searchRecipes = (state = recipe, action) => {
    switch (action.type) {
        case 'SET_API_RECIPE':
            return action.payload;
        default:
            return state;
    }
};//end randomRecipe reducer function*/

const searchRecipeIngredients = (state = recipeIngredients, action) => {
    switch (action.type) {
        case 'SET_API_RECIPE_INGREDIENTS':
            return action.payload;
        default:
            return state;
    }
};//end randomRecipeIngredients reducer function*/

export default combineReducers({
    randomRecipeIngredients,
    randomRecipe,
    searchRecipes,
    searchRecipeIngredients,
});