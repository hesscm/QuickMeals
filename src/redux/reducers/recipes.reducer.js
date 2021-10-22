import { combineReducers } from 'redux';
//below are some default/test variables
import { recipe, searchRecipesVar, bugCheckSearch, defaultUserMeal } from '../../DefaultVariables';

//set the random recipe in its own reducer
const randomRecipe = (state = recipe, action) => {
    switch (action.type) {
        case 'SET_RANDOM_RECIPE':
            return action.payload;
        default:
            return state;
    }
};//end randomRecipe reducer

//set array of 4 recipes in its own reducer
const searchRecipes = (state = bugCheckSearch, action) => {
    switch (action.type) {
        case 'SET_API_RECIPES':
            return action.payload;
        default:
            return state;
    }
};//end searchRecipes reducer

//set parsed/combined user ingredients in a reducer for the Shopping List page
const totalUserIngredients = (state = [], action) => {
    switch (action.type) {
        case 'SET_TOTAL_INGREDIENTS':
            return action.payload;
        default:
            return state;
    }
};//end totalUserIngredients reducer

//set a user's saved meals to its own reducer
const userSavedMeals = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_SAVED_MEALS':
            return action.payload;
        default:
            return state;
    }
};//end userSavedMeals reducer

/*----------------------------DAYS OF THE WEEK REDUCERS--------------------------------*/
//take the GetUserMeals saga 'put' blast and figure out what day of the week each meal is in
//hold them in their own reducer

const mondayMeal = (state = defaultUserMeal, action) => {
    switch (action.type) {
        case 'SET_USER_MEALS':
            //loop through the meals sent from saga
            for (let i = 0; i < action.payload.length; i++) {
                //if this is a Monday meal, set this as the state
                if (action.payload[i].day == 'Monday') {
                    return action.payload[i];

                    //if this the last element...
                } else if (i === action.payload.length - 1) {
                    //if this is a Monday meal, set it
                    if (action.payload[i].day == 'Monday') {
                        return action.payload[i];
                    }
                    else { //else, return the default state    
                        return defaultUserMeal;
                    }
                }
            }
        default:
            return state;
    }
};//end mondayMeal reducer function*/

const tuesdayMeal = (state = defaultUserMeal, action) => {
    switch (action.type) {
        case 'SET_USER_MEALS':
            for (let i = 0; i < action.payload.length; i++) {
                if (action.payload[i].day == 'Tuesday') {
                    return action.payload[i];
                } else if (i === action.payload.length - 1) {
                    if (action.payload[i].day == 'Tuesday') {
                        return action.payload[i];
                    }
                    else {    
                        return defaultUserMeal;
                    }
                }
            }
        default:
            return state;
    }
};//end tuesdayMeal reducer function*/

const wednesdayMeal = (state = defaultUserMeal, action) => {
    switch (action.type) {
        case 'SET_USER_MEALS':
            for (let i = 0; i < action.payload.length; i++) {
                if (action.payload[i].day == 'Wednesday') {
                    return action.payload[i];
                } else if (i === action.payload.length - 1) {
                    if (action.payload[i].day == 'Wednesday') {
                        return action.payload[i];
                    }
                    else {
                        return defaultUserMeal;
                    }
                }
            }
        default:
            return state;
    }
};//end wednesdayMeal reducer function*/

const thursdayMeal = (state = defaultUserMeal, action) => {
    switch (action.type) {
        case 'SET_USER_MEALS':
            for (let i = 0; i < action.payload.length; i++) {
                if (action.payload[i].day == 'Thursday') {
                    return action.payload[i];
                } else if (i === action.payload.length - 1) {
                    if (action.payload[i].day == 'Thursday') {
                        return action.payload[i];
                    }
                    else {
                        return defaultUserMeal;
                    }
                }
            }
        default:
            return state;
    }
};//end thursdayMeal reducer function*/

const fridayMeal = (state = defaultUserMeal, action) => {
    switch (action.type) {
        case 'SET_USER_MEALS':
            for (let i = 0; i < action.payload.length; i++) {
                if (action.payload[i].day == 'Friday') {
                    return action.payload[i];
                } else if (i === action.payload.length - 1) {
                    if (action.payload[i].day == 'Friday') {
                        return action.payload[i];
                    }
                    else {
                        return defaultUserMeal;
                    }
                }
            }
        default:
            return state;
    }
};//end fridayMeal reducer function*/

const saturdayMeal = (state = defaultUserMeal, action) => {
    switch (action.type) {
        case 'SET_USER_MEALS':
            for (let i = 0; i < action.payload.length; i++) {
                if (action.payload[i].day == 'Saturday') {
                    return action.payload[i];
                } else if (i === action.payload.length - 1) {
                    if (action.payload[i].day == 'Saturday') {
                        return action.payload[i];
                    }
                    else {
                        return defaultUserMeal;
                    }
                }
            }
        default:
            return state;
    }
};//end saturdayMeal reducer function*/

const sundayMeal = (state = defaultUserMeal, action) => {
    switch (action.type) {
        case 'SET_USER_MEALS':
            for (let i = 0; i < action.payload.length; i++) {
                if (action.payload[i].day == 'Sunday') {
                    return action.payload[i];
                } else if (i === action.payload.length - 1) {
                    if (action.payload[i].day == 'Sunday') {
                        return action.payload[i];
                    }
                    else {
                        return defaultUserMeal;
                    }
                }
            }
        default:
            return state;
    }
};//end sundayMeal reducer function*/

export default combineReducers({
    randomRecipe,
    searchRecipes,
    totalUserIngredients,
    userSavedMeals,
    mondayMeal,
    tuesdayMeal,
    wednesdayMeal,
    thursdayMeal,
    fridayMeal,
    saturdayMeal,
    sundayMeal,
});