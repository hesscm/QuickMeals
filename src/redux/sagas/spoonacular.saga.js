import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


//get random recipe from Spoonacular API and send to reducer
function* getRandomRecipe() {
    try {
        const response = yield axios.get(`/api/spoonacular/random`);
        yield put({ type: 'SET_RANDOM_RECIPE', payload: response.data.recipes[0] });
        yield put({ type: 'SET_RANDOM_RECIPE_INGREDIENTS', payload: response.data.recipes[0].extendedIngredients });

    } catch (error) {
        console.log(error);
    }
}//end saga function*/

//get random recipe from Spoonacular API and send to reducer
function* getAPIRecipes() {
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

function* postMeals(action) {
    try {
        yield axios.post(`/api/meals`, action.payload);
        yield put({ type: 'GET_USER_MEALS' });

    } catch (error) {
        console.log(error);
    }
}//end saga function*/

function* getUserMeals() {
    try {
        const response = yield axios.get(`/api/meals`);
        for (let i = 0; i < response.data.length; i++) {
            let ingredientsArray = JSON.parse(response.data[i].ingredients);
            response.data[i].ingredients = ingredientsArray;
        }
        let totalIngredients = [];
        for (let i = 0; i < response.data.length; i++) {
            for (let j = 0; j < response.data[i].ingredients.length; j++) {
                totalIngredients.push(response.data[i].ingredients[j]);
            }

        }
        console.log('totalIngredients', totalIngredients);
        console.log('response', response.data);
        yield put({ type: 'SET_USER_MEALS', payload: response.data });
        yield put({ type: 'SET_TOTAL_INGREDIENTS', payload: totalIngredients })
    } catch (error) {
        console.log(error);
    }
}//end saga function*/

function* deleteUserMeal(action) {
    try {
        yield axios.delete(`/api/meals/${action.payload}`);
        yield put({ type: 'GET_USER_MEALS' });
    } catch (error) {
        console.log(error);
    }
}//end saga function*/

function* saveUserMeal(action) {
    try {
        yield axios.post(`/api/meals/save`, action.payload);
        // yield put({ type: 'GET_USER_MEALS' });

    } catch (error) {
        console.log(error);
    }
}//end saga function*/


function* spoonacularSaga() {
    // yield takeEvery('GET_RANDOM_RECIPE', getRandomRecipe);
    yield takeEvery('GET_API_RECIPES', getAPIRecipes)
    yield takeEvery('POST_MEALS', postMeals);
    yield takeEvery('GET_USER_MEALS', getUserMeals)
    yield takeEvery('DELETE_USER_MEAL', deleteUserMeal)
    yield takeEvery('SAVE_USER_MEAL', saveUserMeal)
}

export default spoonacularSaga;