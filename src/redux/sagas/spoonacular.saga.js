import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


//get random recipe from Spoonacular API and send to the randomRecipe reducer
function* getRandomRecipe() {
    try {
        const response = yield axios.get(`/api/spoonacular/random`);
        yield put({ type: 'SET_RANDOM_RECIPE', payload: response.data.recipes[0] });
    } catch (error) {
        console.log(error);
    }
}//end getRandomRecipe

//search recipes from Spoonacular API and send to the searchRecipes reducers
function* getAPIRecipes() {
    try {
        const response = yield axios.get(`/api/spoonacular/search`);
        console.log('search response', response.data.results)
        yield put({ type: 'SET_API_RECIPES', payload: response.data.results });
    } catch (error) {
        console.log(error);
    }
}//end getAPIRecipes

//send user's meal plan to the server/database
function* postMeals(action) {
    try {
        yield axios.post(`/api/meals`, action.payload);
        yield put({ type: 'GET_USER_MEALS' });

    } catch (error) {
        console.log(error);
    }
}//end postMeals

//lots happening here. Get the user meals from the DB, get them into reducers...
//then combine the duplicate ingredients with another API request
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
        for (let i = 0; i < response.data.length; i++) { //Array of meals
            for (let j = 0; j < response.data[i].ingredients.length; j++) { //Array of ingredients per meal
                //add each ingredient to a new array
                totalIngredients.push(response.data[i].ingredients[j]);
            }
        }

        //post this list to the server so the API can combine our ingredient duplicates
        const postResponse = yield axios.post(`/api/spoonacular/totalingredients`, totalIngredients)
        const apiIngredients = postResponse.data.aisles;
        console.log('apiIngredients', apiIngredients);

        //parse through the API return and turn it into something more manageable for the DOM
        let combinedIngredients = [];
        for (let i = 0; i < apiIngredients.length; i++) { //array of ingredients
            if (apiIngredients[i].aisle === 'Pantry Items') {
                //pantry items are things such as water, salt, pepper, flour, etc.
                //We don't need these in the shopping list.
                continue;
            }
            //convert the API response to a DOM friendly format
            for (let j = 0; j < apiIngredients[i].items.length; j++) { //returned ingredients with a ton of properties
                //we don't need everything. let's just add what we need
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

//delete a user's meal from their current meal plan
function* deleteUserMeal(action) {
    try {
        yield axios.delete(`/api/meals/${action.payload}`);
        yield put({ type: 'GET_USER_MEALS' }); //refresh
    } catch (error) {
        console.log(error);
    }
}//end deleteUserMeal

//delete a user's saved meal from their current favorite's list
function* deleteUserSavedMeal(action) {
    try {
        yield axios.delete(`/api/meals/savedmeals/${action.payload}`);
        yield put({ type: 'GET_USER_SAVED_MEALS' });
    } catch (error) {
        console.log(error);
    }
}//end deleteUserSavedMeal

//save OR unsave a particular meal to the database
function* saveUserMeal(action) {
    try {
        //if we need to save it, we are sending true as the payload
        if (action.payload.saved == true) { 
            yield axios.post(`/api/meals/save`, action.payload);
            //if we want to unsave it, we send false
        } else if (action.payload.saved == false) {
            //get rid of it!
            yield axios.delete(`/api/meals/savedmeals/${action.payload.id}`);
        }
        //update the user_meals table to reflect if a meal is saved or not
        yield axios.put(`api/meals/${action.payload.id}/${action.payload.saved}`)
        yield put({ type: 'GET_USER_MEALS_SIMPLE' }); //refresh
        
    } catch (error) {
        console.log(error);
    }
}//end saveUserMeal

//get the saved user meals from the DB
function* getUserSavedMeals() {
    try {
        const response = yield axios.get(`/api/meals/savedmeals`);

        //ingredients are currently a string, but we need them in JSON format
        for (let i = 0; i < response.data.length; i++) {
            let ingredientsArray = JSON.parse(response.data[i].ingredients);
            response.data[i].ingredients = ingredientsArray;
        }

        yield put({ type: 'SET_USER_SAVED_MEALS', payload: response.data });

    } catch (error) {
        console.log(error);
    }
}//end getUserSavedMeals

//get function without the API call and combined ingredients parsing
//specifically for View Meal Page for faster loading
function* getUserMealsSimple() {
    try {
        //user meals from the db
        const response = yield axios.get(`/api/meals`);

        //ingredients are currently a string, but we need them in JSON format
        for (let i = 0; i < response.data.length; i++) {
            let ingredientsArray = JSON.parse(response.data[i].ingredients);
            response.data[i].ingredients = ingredientsArray;
        }
        //set user meals to a reducer for each day of the week
        yield put({ type: 'SET_USER_MEALS', payload: response.data });
    } catch (error) {
        console.log(error);
    }
}//end getUserMealsSimple

//save OR unsave a particular meal to the database
function* saveRecipeGeneratorMeal(action) {
    try {
        yield axios.post(`/api/meals/recipegenerator`, action.payload);
        //update the user_meals table to reflect if a meal is saved or not
        yield put({ type: 'GET_USER_SAVED_MEALS' }); //refresh
    } catch (error) {
        console.log(error);
    }
}//end saveRecipeGeneratorMeal

function* spoonacularSaga() {
    // yield takeEvery('GET_RANDOM_RECIPE', getRandomRecipe);
    yield takeEvery('GET_API_RECIPES', getAPIRecipes)
    yield takeEvery('POST_MEALS', postMeals);
    yield takeEvery('GET_USER_MEALS', getUserMeals)
    yield takeEvery('DELETE_USER_MEAL', deleteUserMeal)
    yield takeEvery('SAVE_USER_MEAL', saveUserMeal)
    yield takeEvery('GET_USER_SAVED_MEALS', getUserSavedMeals)
    yield takeEvery('DELETE_USER_SAVED_MEAL', deleteUserSavedMeal)
    yield takeEvery('GET_USER_MEALS_SIMPLE', getUserMealsSimple)
    yield takeEvery('SAVE_RECIPE_GENERATOR_MEAL', saveRecipeGeneratorMeal)

}

export default spoonacularSaga;