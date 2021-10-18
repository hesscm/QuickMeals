import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import { useHistory } from 'react-router-dom';
import SetSavedMeal from './SetSavedMeal';


function ViewMealPlanPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const recipes = useReduxStore().recipes;
    const [trackSavedMeals, setTrackSavedMeals] = useState({ 
        monday: recipes.mondayMeal.is_saved, 
        tuesday: recipes.tuesdayMeal.is_saved,
        wednesday: recipes.wednesdayMeal.is_saved,
        thursday: recipes.thursdayMeal.is_saved,
        friday: recipes.fridayMeal.is_saved,
        saturday: recipes.saturdayMeal.is_saved,
        sunday: recipes.sundayMeal.is_saved,})

    useEffect(() => {
        dispatch({ type: 'GET_USER_MEALS_SIMPLE' })
    }, []);

    const handleRemoveButton = (id) => {
        console.log(id);
        dispatch({ type: 'DELETE_USER_MEAL', payload: id });
        dispatch({ type: 'GET_USER_MEALS_SIMPLE' })
    }


    const generateShoppingList = () => {
        history.push('/shoppinglist');
    }

    const handleSaveButton = (id, day) => {
        switch (day) {
            case 'MondayTrue':
                recipes.mondayMeal.is_saved = true;
                setTrackSavedMeals({ ...trackSavedMeals, monday: true })
                dispatch({ type: 'SAVE_USER_MEAL', payload: { id: id, saved: true } })

                break;        
            case 'MondayFalse':
                // recipes.mondayMeal.is_saved = false;

                setTrackSavedMeals({ ...trackSavedMeals, monday: false })
                dispatch({ type: 'SAVE_USER_MEAL', payload: { id: id, saved: false } })

                break;
            default:
                break;
        }

    }

    // console.log(mondayMeal.is_saved);

    return (
        <>
            <h1>View Meal Plan</h1>
            {recipes.length != 0 ?
                < div className="chosenMeals" >
                    {/* section 1 */}
                    <div className="grid-containerA">
                        <div className="item1">
                            <h1>Monday</h1>
                            <h3>{recipes.mondayMeal.is_saved}</h3>

                            {recipes.mondayMeal.name == '' ?
                                <><br /><br /><p>Seem to be missing a meal. Go back and add one!</p></> :
                                <>
                                    <h3>{recipes.mondayMeal.name}</h3>

                                    <img src={recipes.mondayMeal.image_path} alt={recipes.mondayMeal.name} />
                                    <button onClick={() => handleRemoveButton(recipes.mondayMeal.id)}>Remove</button>
                                    {!trackSavedMeals.monday ? <button onClick={() => handleSaveButton(recipes.mondayMeal.id, 'MondayTrue')}>Favorite</button> :
                                        <button onClick={() => handleSaveButton(recipes.mondayMeal.id, 'MondayFalse')}>Unfavorite</button>}
                                </>
                            }
                        </div>
                        <div className="item2">
                            <h1>Tuesday</h1>
                            {recipes.tuesdayMeal.name == '' ?
                                <><br /><br /><p>Seem to be missing a meal. Go back and add one!</p></> :
                                <>
                                    <h3>{recipes.tuesdayMeal.name}</h3>
                                    <img src={recipes.tuesdayMeal.image_path} alt={recipes.tuesdayMeal.name} />
                                    <button onClick={() => handleRemoveButton(recipes.tuesdayMeal.id)}>Remove</button>
                                    {trackSavedMeals.tuesday ? <button onClick={() => { setTrackSavedMeals({...trackSavedMeals, tuesday: false }) }}>Favorite</button> :
                                        <button onClick={() => { setTrackSavedMeals({...trackSavedMeals, tuesday: true }) }}>Unfavorite</button>}
                                        </>
                            }
                        </div>
                        <div className="item3">
                            <h1>Wednesday</h1>
                            {recipes.wednesdayMeal.name == '' ?
                                <><br /><br /><p>Seem to be missing a meal. Go back and add one!</p></> :
                                <>
                                    <h3>{recipes.wednesdayMeal.name}</h3>
                                    <img src={recipes.wednesdayMeal.image_path} alt={recipes.wednesdayMeal.name} />
                                    <button onClick={() => handleRemoveButton(recipes.wednesdayMeal.id)}>Remove</button>
                                    {trackSavedMeals.wednesday ? <button onClick={() => { setTrackSavedMeals({ ...trackSavedMeals, wednesday: false }) }}>Favorite</button> :
                                        <button onClick={() => { setTrackSavedMeals({ ...trackSavedMeals, wednesday: true }) }}>Unfavorite</button>}
                                         </>
                            }
                        </div>
                        <div className="item4">
                            <h1>Thursday</h1>
                            {recipes.thursdayMeal.name == '' ?
                                <><br /><br /><p>Seem to be missing a meal. Go back and add one!</p></> :
                                <>
                                    <h3>{recipes.thursdayMeal.name}</h3>
                                    <img src={recipes.thursdayMeal.image_path} alt={recipes.thursdayMeal.name} />
                                    <button onClick={() => handleRemoveButton(recipes.thursdayMeal.id)}>Remove</button>
                                    {trackSavedMeals.thursday ? <button onClick={() => { setTrackSavedMeals({ ...trackSavedMeals, thursday: false }) }}>Favorite</button> :
                                        <button onClick={() => { setTrackSavedMeals({...trackSavedMeals, thursday: true }) }}>Unfavorite</button>}
                                         </>
                            }
                        </div>
                        <div className="item5">
                            <h1>Friday</h1>
                            {recipes.fridayMeal.name == '' ?
                                <><br /><br /><p>Seem to be missing a meal. Go back and add one!</p></> :
                                <>
                                    <h3>{recipes.fridayMeal.name}</h3>
                                    <img src={recipes.fridayMeal.image_path} alt={recipes.fridayMeal.name} />
                                    <button onClick={() => handleRemoveButton(recipes.fridayMeal.id)}>Remove</button>
                                    {trackSavedMeals.friday ? <button onClick={() => { setTrackSavedMeals({...trackSavedMeals, friday: false }) }}>Favorite</button> :
                                        <button onClick={() => { setTrackSavedMeals({...trackSavedMeals, friday: true }) }}>Unfavorite</button>}
                                        </>
                            }
                        </div>
                        <div className="item6">
                            <h1>Saturday</h1>
                            {recipes.saturdayMeal.name == '' ?
                                <><br /><br /><p>Seem to be missing a meal. Go back and add one!</p></> :
                                <>
                                    <h3>{recipes.saturdayMeal.name}</h3>
                                    <img src={recipes.saturdayMeal.image_path} alt={recipes.saturdayMeal.name} />
                                    <button onClick={() => handleRemoveButton(recipes.saturdayMeal.id)}>Remove</button>
                                    {trackSavedMeals.saturday ? <button onClick={() => { setTrackSavedMeals({...trackSavedMeals, saturday: false }) }}>Favorite</button> :
                                        <button onClick={() => { setTrackSavedMeals({...trackSavedMeals, saturday: true }) }}>Unfavorite</button>}
                                </>
                            }
                        </div>
                        <div className="item7">
                            <h1>Sunday</h1>
                            {recipes.sundayMeal.name == '' ?
                                <><br /><br /><p>Seem to be missing a meal. Go back and add one!</p></> :
                                <>
                                    <h3>{recipes.sundayMeal.name}</h3>
                                    <img src={recipes.sundayMeal.image_path} alt={recipes.sundayMeal.name} />
                                    <button onClick={() => handleRemoveButton(recipes.sundayMeal.id)}>Remove</button>
                                    {trackSavedMeals.sunday ? <button onClick={() => { setTrackSavedMeals({...trackSavedMeals, sunday: false }) }}>Favorite</button> :
                                        <button onClick={() => { setTrackSavedMeals({...trackSavedMeals, sunday: true }) }}>Unfavorite</button>}
                                        </>
                            }
                        </div>
                    </div>
                    <br /><br />
                    <button onClick={generateShoppingList} className='btn'>Generate Shopping List</button>
                </div >
                :
                <></>
            }
        </>
    )
}

export default ViewMealPlanPage;