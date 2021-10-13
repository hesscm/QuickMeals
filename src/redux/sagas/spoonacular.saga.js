import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

//get random recipe from Spoonacular API and send to reducer
function* getRandomRecipe(action) {
    try {
        const response = yield axios.get(`/api/spoonacular/random`);
        yield put({ type: 'SET_RANDOM_RECIPE', payload: response.data.recipes[0] });
        yield put({ type: 'SET_RANDOM_RECIPE_INGREDIENTS', payload: response.data.recipes[0].extendedIngredients });

    } catch (error) {
        console.log(error);
    }
}//end saga function*/

//get random recipe from Spoonacular API and send to reducer
function* getAPIRecipes(action) {
    try {
        const response = yield axios.get(`/api/spoonacular/search`);
        console.log('search response', response.data.results)
        console.log('ingredients test', response.data.results[0].extendedIngredients[0].original);

        yield put({ type: 'SET_API_RECIPES', payload: response.data.results });
        // yield put({ type: 'SET_API_RECIPE_INGREDIENTS', payload: response.data.recipes.extendedIngredients });

    } catch (error) {
        console.log(error);
    }
}//end saga function*/

function* spoonacularSaga() {
    // yield takeEvery('GET_RANDOM_RECIPE', getRandomRecipe);
    // yield takeEvery('GET_API_RECIPES', getAPIRecipes)
}

export default spoonacularSaga;