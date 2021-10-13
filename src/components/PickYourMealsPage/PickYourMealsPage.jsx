import './PickYourMealsPage.css'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import DaysOfWeekGrid from './DaysOfWeekGrid';

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


    console.log(recipes);
    // console.log(mondayMeal);


    // useEffect(() => {
    //     dispatch({ type: 'GET_API_RECIPE' })
    // }, []);



    const handleAddMeal = (input) => {
        console.log('in handleAddMeal');
        let dayOfWeek = prompt('Please enter a day of the week:');
        console.log(dayOfWeek, input);
        switch (dayOfWeek) {
            case 'Monday':
            case 'monday':
                setMondayMeal({ title: recipes[input].title, image: recipes[input].image })
                break;
            case 'Tuesday':
            case 'tuesday':
                setTuesdayMeal({ title: recipes[input].title, image: recipes[input].image })
                break;
            case 'Wednesday':
            case 'wednesday':
                setWednesdayMeal({ title: recipes[input].title, image: recipes[input].image })
                break;
            case 'Thursday':
            case 'thursday':
                setThursdayMeal({ title: recipes[input].title, image: recipes[input].image })
                break;
            case 'Friday':
            case 'friday':
                setFridayMeal({ title: recipes[input].title, image: recipes[input].image })
                break;
            case 'Saturday':
            case 'saturday':
                setSaturdayMeal({ title: recipes[input].title, image: recipes[input].image })
                break;
            case 'Sunday':
            case 'sunday':
                setSundayMeal({ title: recipes[input].title, image: recipes[input].image })
                break;
            default:
                break;
        }

    }

    return (
        <>
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
            {/* section 2 */}
            <div className="filter-pagination">
                <p>filter-pagination</p>
            </div>
            {/* section 3 */}
            <div className="populatedMeals">
                <p>populatedMeals</p>

                <div className="grid-containerB">
                    <div onClick={() => handleAddMeal(0)} className="meal1">
                        {recipes[0].title}
                        <img src={recipes[0].image} alt={recipes[0].title} />
                    </div>
                    <div onClick={() => handleAddMeal(1)} className="meal2">
                        {recipes[1].title}
                        <img src={recipes[1].image} alt={recipes[1].title} />
                    </div>
                    <div onClick={() => handleAddMeal(2)} className="meal3">
                        {recipes[2].title}
                        <img src={recipes[2].image} alt={recipes[2].title} />
                    </div>
                    <div onClick={() => handleAddMeal(3)} className="meal4">
                        {recipes[3].title}
                        <img src={recipes[3].image} alt={recipes[3].title} />
                    </div>

                </div>
            </div>

        </>
    )
}

export default PickYourMealsPage;