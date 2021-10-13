import './PickYourMealsPage.css'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import recipesReducer from '../../redux/reducers/recipes.reducer';


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
    console.log(mondayMeal);


    // useEffect(() => {
    //     dispatch({ type: 'GET_API_RECIPE' })
    // }, []);

    const handleButtonClick = () => {
        console.log('clicked');
        dispatch({ type: 'GET_API_RECIPES' })
    }

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
            {/* section 1 */}
            <div className="chosenMeals">
                <p>chosenMeals.</p>
                <div className="grid-containerA">
                    <div className="item1">
                        <h1>Monday</h1>
                        {mondayMeal.title == '' ?
                            <><br /><br /><p>Click a recipe and choose a day!</p></> :
                            <>
                                <h3>{mondayMeal.title}</h3>
                                <img src={mondayMeal.image} alt={mondayMeal.title} />
                            </>
                        }
                    </div>
                    <div className="item2">
                        <h1>Tuesday</h1>
                        {tuesdayMeal.title == '' ?
                            <><br /><br /><p>Click a recipe and choose a day!</p></> :
                            <>
                                <h3>{tuesdayMeal.title}</h3>
                                <img src={tuesdayMeal.image} alt={tuesdayMeal.title} />
                            </>
                        }
                    </div>
                    <div className="item3">
                        <h1>Wednesday</h1>
                        {wednesdayMeal.title == '' ?
                            <><br /><br /><p>Click a recipe and choose a day!</p></> :
                            <>
                                <h3>{wednesdayMeal.title}</h3>
                                <img src={wednesdayMeal.image} alt={wednesdayMeal.title} />
                            </>
                        }
                    </div>
                    <div className="item4">
                        <h1>Thursday</h1>
                        {thursdayMeal.title == '' ?
                            <><br /><br /><p>Click a recipe and choose a day!</p></> :
                            <>
                                <h3>{thursdayMeal.title}</h3>
                                <img src={thursdayMeal.image} alt={thursdayMeal.title} />
                            </>
                        }
                    </div>
                    <div className="item5">
                        <h1>Friday</h1>
                        {fridayMeal.title == '' ?
                            <><br /><br /><p>Click a recipe and choose a day!</p></> :
                            <>
                                <h3>{fridayMeal.title}</h3>
                                <img src={fridayMeal.image} alt={fridayMeal.title} />
                            </>
                        }
                    </div>
                    <div className="item6">
                        <h1>Saturday</h1>
                        {saturdayMeal.title == '' ?
                            <><br /><br /><p>Click a recipe and choose a day!</p></> :
                            <>
                                <h3>{saturdayMeal.title}</h3>
                                <img src={saturdayMeal.image} alt={saturdayMeal.title} />
                            </>
                        }
                    </div>
                    <div className="item7">
                        <h1>Sunday</h1>
                        {sundayMeal.title == '' ?
                            <><br /><br /><p>Click a recipe and choose a day!</p></> :
                            <>
                                <h3>{sundayMeal.title}</h3>
                                <img src={sundayMeal.image} alt={sundayMeal.title} />
                            </>
                        }
                    </div>
                </div>
                <button onClick={handleButtonClick} className='btn'>Let's Eat!</button>
            </div>
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