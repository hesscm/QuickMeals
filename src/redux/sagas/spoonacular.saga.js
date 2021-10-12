import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

//get images to be displayed on search page
function* getRandomRecipe(action) {
    try {
        const response = yield axios.get(`/api/spoonacular`);
        yield put({ type: 'SET_RANDOM_RECIPE', payload: response.data.recipes[0] });
        yield put({ type: 'SET_RANDOM_RECIPE_INGREDIENTS', payload: response.data.recipes[0].extendedIngredients });

    } catch (error) {
        console.log(error);
    }
}//end saga function*/

function* spoonacularSaga() {
    yield takeEvery('GET_RANDOM_RECIPE', getRandomRecipe);
}

export default spoonacularSaga;