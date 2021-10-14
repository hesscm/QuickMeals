import './PickYourMealsPage.css'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import DaysOfWeekGrid from './DaysOfWeekGrid';
import PopulatedMealsGrid from './PopulatedMealsGrid';

function PickYourMealsPage() {
    const dispatch = useDispatch();
    const recipes = useReduxStore().recipes.searchRecipes;
    const [mondayMeal, setMondayMeal] = useState({ title: '', image: '' });
    const [tuesdayMeal, setTuesdayMeal] = useState({ title: '', image: '' });
    const [wednesdayMeal, setWednesdayMeal] = useState({ title: '', image: '' });
    const [thursdayMeal, setThursdayMeal] = useState({ title: '', image: '' });
    const [fridayMeal, setFridayMeal] = useState({ title: '', image: '' });
    const [saturdayMeal, setSaturdayMeal] = useState({ title: '', image: '' });
    const [sundayMeal, setSundayMeal] = useState({ title: '', image: '' });

    useEffect(() => {
        // dispatch({ type: 'GET_API_RECIPES' })
    }, []);



    const parseIngredients = () => {
        let ingredients = [];
        ingredients = recipes[0].extendedIngredients;
        let ingredientsString = '';

        if (ingredients.length !== 0) {
            for (let i = 0; i < ingredients.length; i++) {
                if (i !== ingredients.length - 1) {
                    ingredientsString += ingredients[i].original + '<br />';
                } else {
                    ingredientsString += ingredients[i].original;
                }
            }
        }
        return ingredientsString;
    }
    console.log(parseIngredients());

    const parseInstructions = () => {
        let instructions = [];
        instructions = recipes[0].analyzedInstructions[0].steps;
        let instructionsString = '';

        if (instructions.length !== 0) {
            for (let i = 0; i < instructions.length; i++) {
                if (i !== instructions.length - 1) {
                    instructionsString += (i + 1) + '. ' + instructions[i].step + '<br />';
                } else {
                    instructionsString += instructions[i].step;
                }
            }
        }
        return instructionsString;
    }
    console.log(parseInstructions());

    const handleAddMeal = (input) => {
        console.log('in handleAddMeal');
        let dayOfWeek = prompt('Please enter a day of the week:');
        console.log(dayOfWeek, input);
        switch (dayOfWeek) {
            case 'Monday':
            case 'monday':
                setMondayMeal({ 
                    title: recipes[input].title, 
                    image: recipes[input].image, 
                    description: recipes[input].summary,
                    instructions: recipes[input].analyzedInstructions[0].steps,
                    ingredients: recipes[input].extendedIngredients,
                    id: recipes[input].id,
                    day: 'Monday'
                 })
                break;
            case 'Tuesday':
            case 'tuesday':
                setTuesdayMeal({
                    title: recipes[input].title,
                    image: recipes[input].image,
                    description: recipes[input].summary,
                    instructions: recipes[input].analyzedInstructions[0].steps,
                    ingredients: recipes[input].extendedIngredients,
                    id: recipes[input].id,
                    day: 'Tuesday'
                })
                break;
            case 'Wednesday':
            case 'wednesday':
                setWednesdayMeal({
                    title: recipes[input].title,
                    image: recipes[input].image,
                    description: recipes[input].summary,
                    instructions: recipes[input].analyzedInstructions[0].steps,
                    ingredients: recipes[input].extendedIngredients,
                    id: recipes[input].id,
                    day: 'Wednesday'
                })
                break;
            case 'Thursday':
            case 'thursday':
                setThursdayMeal({
                    title: recipes[input].title,
                    image: recipes[input].image,
                    description: recipes[input].summary,
                    instructions: recipes[input].analyzedInstructions[0].steps,
                    ingredients: recipes[input].extendedIngredients,
                    id: recipes[input].id,
                    day: 'Thursday'
                })
                break;
            case 'Friday':
            case 'friday':
                setFridayMeal({
                    title: recipes[input].title,
                    image: recipes[input].image,
                    description: recipes[input].summary,
                    instructions: recipes[input].analyzedInstructions[0].steps,
                    ingredients: recipes[input].extendedIngredients,
                    id: recipes[input].id,
                    day: 'Friday'
                })
            case 'Saturday':
            case 'saturday':
                setSaturdayMeal({
                    title: recipes[input].title,
                    image: recipes[input].image,
                    description: recipes[input].summary,
                    instructions: recipes[input].analyzedInstructions[0].steps,
                    ingredients: recipes[input].extendedIngredients,
                    id: recipes[input].id,
                    day: 'Saturday'
                })
                break;
            case 'Sunday':
            case 'sunday':
                setSundayMeal({
                    title: recipes[input].title,
                    image: recipes[input].image,
                    description: recipes[input].summary,
                    instructions: recipes[input].analyzedInstructions[0].steps,
                    ingredients: recipes[input].extendedIngredients,
                    id: recipes[input].id,
                    day: 'Sunday'
                })
                break;
            default:
                break;
        }
    }

    return (
        <>
        <h1>Pick Your Meals</h1>
        {/* top section */}
            <DaysOfWeekGrid
                mondayMeal={mondayMeal}
                setMondayMeal={setMondayMeal}
                tuesdayMeal={tuesdayMeal}
                setTuesdayMeal={setTuesdayMeal}
                wednesdayMeal={wednesdayMeal}
                setWednesdayMeal={setWednesdayMeal}
                thursdayMeal={thursdayMeal}
                setThursdayMeal={setThursdayMeal}
                fridayMeal={fridayMeal}
                setFridayMeal={setFridayMeal}
                saturdayMeal={saturdayMeal}
                setSaturdayMeal={setSaturdayMeal}
                sundayMeal={sundayMeal}
                setSundayMeal={setSundayMeal}
            />
            {/* middle section */}
            <div className="filter-pagination">
                <p>filter-pagination</p>
            </div>
            {/* bottom section */}
            <PopulatedMealsGrid 
            recipes={recipes}
            handleAddMeal={handleAddMeal}
            />
        </>
    )
}

export default PickYourMealsPage;