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

//lots happening here. Get the user meals from the DB, get them into reducers, then send the ingredients to the API to combine duplicates
function* getUserMeals() {
    try {
        //user meals from the db
        const response = yield axios.get(`/api/meals`);

        //ingredients are currently a string, but we need them in JSON format
        for (let i = 0; i < response.data.length; i++) {
            let ingredientsArray = JSON.parse(response.data[i].ingredients);
            response.data[i].ingredients = ingredientsArray;
        }

        //combine all the ingredients from each meal into 1 array
        let totalIngredients = [];
        for (let i = 0; i < response.data.length; i++) { //DB response array
            for (let j = 0; j < response.data[i].ingredients.length; j++) { //day of the week ingredients list array
                totalIngredients.push(response.data[i].ingredients[j]);
            }
        }

        //post this list to the server so the API can combine our ingredient duplicates
        const postResponse = yield axios.post(`/api/spoonacular/totalingredients`, totalIngredients)
        const apiIngredients = postResponse.data.aisles;
        console.log('apiIngredients', apiIngredients);

        //parse through the API return to something more manageable for the DOM
        let combinedIngredients = [];
        for (let i = 0; i < apiIngredients.length; i++) {
            if (apiIngredients[i].aisle === 'Pantry Items') {
                console.log('found it');
            //element 1 is pantry items such as water, salt, pepper, flour, etc.
            //We don't need these in the shopping list.
                continue;
            }
            //convert the API response to a DOM friendly format
            for (let j = 0; j < apiIngredients[i].items.length; j++) {
                combinedIngredients.push({
                    //i=aisle, j=ingredient in that aisle
                    name: apiIngredients[i].items[j].name,
                    amount: apiIngredients[i].items[j].measures.original.amount,
                    unit: apiIngredients[i].items[j].measures.original.unit
                })
            }
        }
        //set user meals to a reducer for each day of the week
        yield put({ type: 'SET_USER_MEALS', payload: response.data });
        //send the API filtered/adjusted total ingredients to a reducer
        yield put({ type: 'SET_TOTAL_INGREDIENTS', payload: combinedIngredients })
    } catch (error) {
        console.log(error);
    }
}//end getUserMeals

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

function* getUserSavedMeals() {
    try {
        const response = yield axios.get(`/api/meals/savedmeals`);
        yield put({ type: 'SET_USER_SAVED_MEALS', payload: response.data });

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
    yield takeEvery('GET_USER_SAVED_MEALS', getUserSavedMeals)
}

export default spoonacularSaga;