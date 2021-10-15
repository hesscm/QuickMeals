import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';

function ShoppingListPage() {
    const DOMPurify = require('dompurify')(window);
    const dispatch = useDispatch();
    const recipes = useReduxStore().recipes;

    useEffect(() => {
        dispatch({ type: 'GET_USER_MEALS' })
    }, []);

    const ingredientsToString = (meal) => {
        let ingredientsString = '';
        let ingredients = meal;

        if (ingredients.length !== 0) {
            for (let i = 0; i < ingredients.length; i++) {
                if (i !== ingredients.length - 1) {
                    ingredientsString += ingredients[i].fullString + '<br />';
                } else {
                    ingredientsString += ingredients[i].fullString;
                }
            }
        }
        console.log(ingredientsString);
        return ingredientsString;
    }
    // ingredientsToString();










    return (
        <>
        <p>ShoppingList.</p>
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(ingredientsToString(recipes.mondayMeal.ingredients)) }} />
        </>
    )
}

export default ShoppingListPage;