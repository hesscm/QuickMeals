import './PickYourMealsPage.css'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import DaysOfWeekGrid from './DaysOfWeekGrid';
import PopulatedMealsGrid from './PopulatedMealsGrid';
import Button from '@mui/material/Button';


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


    const parseIngredients = (element) => {
        let ingredients = [];
        ingredients = recipes[element].extendedIngredients;
        let ingredientsString = '';
        let ingredientsArray = [];

        if (ingredients.length !== 0) {
            for (let i = 0; i < ingredients.length; i++) {
                if (i !== ingredients.length - 1) {
                    ingredientsString += ingredients[i].original + '<br />';
                    ingredientsArray.push({ name: ingredients[i].name, amount: ingredients[i].amount, unit: ingredients[i].unit, fullString: ingredients[i].original});
                } else {
                    ingredientsString += ingredients[i].original;
                }
            }
        }
        return [ingredientsString, ingredientsArray];
    }

    //take the input from the API and convert the recipe instructions into a HTML ready listed string
    const parseInstructions = (element) => {
        let instructions = [];
        instructions = recipes[element].analyzedInstructions[0].steps;
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

    const handleAddMeal = (input) => {
        console.log('in handleAddMeal');
        console.log('Monday', mondayMeal);
        console.log('Wed', wednesdayMeal);
        console.log('Thurs', thursdayMeal);
        let dayOfWeek = prompt('Please enter a day of the week:');
        console.log(dayOfWeek, input);
        switch (dayOfWeek) {
            case 'Monday':
            case 'monday':
                setMondayMeal({ 
                    title: recipes[input].title, 
                    image: recipes[input].image, 
                    description: recipes[input].summary,
                    instructions: parseInstructions(input),
                    ingredients: parseIngredients(input)[1],
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
                    instructions: parseInstructions(input),
                    ingredients: parseIngredients(input)[1],
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
                    instructions: parseInstructions(input),
                    ingredients: parseIngredients(input)[1],
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
                    instructions: parseInstructions(input),
                    ingredients: parseIngredients(input)[1],
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
                    instructions: parseInstructions(input),
                    ingredients: parseIngredients(input)[1],
                    id: recipes[input].id,
                    day: 'Friday'
                })
                break;
            case 'Saturday':
            case 'saturday':
                setSaturdayMeal({
                    title: recipes[input].title,
                    image: recipes[input].image,
                    description: recipes[input].summary,
                    instructions: parseInstructions(input),
                    ingredients: parseIngredients(input)[1],
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
                    instructions: parseInstructions(input),
                    ingredients: parseIngredients(input)[1],
                    id: recipes[input].id,
                    day: 'Sunday'
                })
                break;
            default:
                break;
        }


    }

    const handleRefreshMeals = () => {
        dispatch({ type: 'GET_API_RECIPES' })
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
                <Button size="large" color="primary" variant="contained" onClick={handleRefreshMeals}>Refresh Meals</Button>
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