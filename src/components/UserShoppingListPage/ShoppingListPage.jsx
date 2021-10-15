import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';

function ShoppingListPage() {
    const DOMPurify = require('dompurify')(window);
    const dispatch = useDispatch();
    const recipes = useReduxStore().recipes;
    const [dayOfWeek, setDayOfWeek] = useState(recipes.mondayMeal);

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

    const handleDayOfWeek = (day) => {
        console.log('hello', day);
        switch (day) {
            case 'Monday':
                setDayOfWeek(recipes.mondayMeal)
                break;
            case 'Tuesday':
                setDayOfWeek(recipes.tuesdayMeal)
                break;
            case 'Wednesday':
                setDayOfWeek(recipes.wednesdayMeal)
                break;
            case 'Thursday':
                setDayOfWeek(recipes.thursdayMeal)
                break;
            case 'Friday':
                setDayOfWeek(recipes.fridayMeal)
                break;
            case 'Saturday':
                setDayOfWeek(recipes.saturdayMeal)
                break;
            case 'Sunday':
                setDayOfWeek(recipes.sundayMeal)
                break;
            default:
                break;
        }
        if (dayOfWeek.id == -1) {
            console.log('oops');
        }
    }


    return (
        <>
        <p>ShoppingList.</p>
            <label htmlFor="day">Choose a day:</label>
            <select 
            name="day" 
            id="day"
            onChange={(event) => handleDayOfWeek(event.target.value)}>
                <option value="">Choose A Day</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
            </select>

            {dayOfWeek.id == -1 ?
            <h4>No shopping for this day!</h4> :
            <>
            <h2>{dayOfWeek.day}</h2>
        <h3>{dayOfWeek.name}</h3>
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(ingredientsToString(dayOfWeek.ingredients)) }} /></>}
        </>
    )
}

export default ShoppingListPage;