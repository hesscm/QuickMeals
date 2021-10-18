import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import { useHistory } from 'react-router-dom';


function ViewMealPlanPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const recipes = useReduxStore().recipes;

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

    const handleSaveButton = (id, updateIsSaved) => {
        switch (updateIsSaved) {
            case 'true':
                dispatch({ type: 'SAVE_USER_MEAL', payload: { id: id, saved: true } })
                break;
            case 'false':
                dispatch({ type: 'SAVE_USER_MEAL', payload: { id: id, saved: false } })
                break;
            default:
                break;
        }
    }

    return (
        <>
            <h1>View Meal Plan</h1>
            {recipes.length != 0 ?
                < div className="chosenMeals" >
                    {/* section 1 */}
                    <div className="grid-containerA">

                        <div className="Monday">
                            <h1>Monday</h1>
                            <h3>{recipes.mondayMeal.is_saved}</h3>

                            {recipes.mondayMeal.name == '' ?
                                <><br /><br /><p>Seem to be missing a meal. Go back and add one!</p></> :
                                <>
                                    <h3>{recipes.mondayMeal.name}</h3>

                                    <img src={recipes.mondayMeal.image_path} alt={recipes.mondayMeal.name} />

                                    <button onClick={() => handleRemoveButton(recipes.mondayMeal.id)}>Remove</button>

                                    {!recipes.mondayMeal.is_saved ? <button onClick={() => handleSaveButton(recipes.mondayMeal.id, 'true')}>Favorite</button> :
                                        <button onClick={() => handleSaveButton(recipes.mondayMeal.id, 'false')}>Unfavorite</button>}
                                </>
                            }
                        </div>
                        <div className="Tuesday">
                            <h1>Tuesday</h1>
                            {recipes.tuesdayMeal.name == '' ?
                                <><br /><br /><p>Seem to be missing a meal. Go back and add one!</p></> :
                                <>
                                    <h3>{recipes.tuesdayMeal.name}</h3>
                                    <img src={recipes.tuesdayMeal.image_path} alt={recipes.tuesdayMeal.name} />

                                    <button onClick={() => handleRemoveButton(recipes.tuesdayMeal.id)}>Remove</button>

                                    {!recipes.tuesdayMeal.is_saved ? <button onClick={() => handleSaveButton(recipes.tuesdayMeal.id, 'true')}>Favorite</button> :
                                        <button onClick={() => handleSaveButton(recipes.tuesdayMeal.id, 'false')}>Unfavorite</button>}
                                </>
                            }
                        </div>
                        <div className="Wednesday">
                            <h1>Wednesday</h1>
                            {recipes.wednesdayMeal.name == '' ?
                                <><br /><br /><p>Seem to be missing a meal. Go back and add one!</p></> :
                                <>
                                    <h3>{recipes.wednesdayMeal.name}</h3>
                                    <img src={recipes.wednesdayMeal.image_path} alt={recipes.wednesdayMeal.name} />

                                    <button onClick={() => handleRemoveButton(recipes.wednesdayMeal.id)}>Remove</button>

                                    {!recipes.wednesdayMeal.is_saved ? <button onClick={() => handleSaveButton(recipes.wednesdayMeal.id, 'true')}>Favorite</button> :
                                        <button onClick={() => handleSaveButton(recipes.wednesdayMeal.id, 'false')}>Unfavorite</button>}
                                </>
                            }
                        </div>
                        <div className="Thursday">
                            <h1>Thursday</h1>
                            {recipes.thursdayMeal.name == '' ?
                                <><br /><br /><p>Seem to be missing a meal. Go back and add one!</p></> :
                                <>
                                    <h3>{recipes.thursdayMeal.name}</h3>
                                    <img src={recipes.thursdayMeal.image_path} alt={recipes.thursdayMeal.name} />

                                    <button onClick={() => handleRemoveButton(recipes.thursdayMeal.id)}>Remove</button>

                                    {!recipes.thursdayMeal.is_saved ? <button onClick={() => handleSaveButton(recipes.thursdayMeal.id, 'true')}>Favorite</button> :
                                        <button onClick={() => handleSaveButton(recipes.thursdayMeal.id, 'false')}>Unfavorite</button>}
                                </>
                            }
                        </div>
                        <div className="Friday">
                            <h1>Friday</h1>
                            {recipes.fridayMeal.name == '' ?
                                <><br /><br /><p>Seem to be missing a meal. Go back and add one!</p></> :
                                <>
                                    <h3>{recipes.fridayMeal.name}</h3>
                                    <img src={recipes.fridayMeal.image_path} alt={recipes.fridayMeal.name} />

                                    <button onClick={() => handleRemoveButton(recipes.fridayMeal.id)}>Remove</button>

                                    {!recipes.fridayMeal.is_saved ? <button onClick={() => handleSaveButton(recipes.fridayMeal.id, 'true')}>Favorite</button> :
                                        <button onClick={() => handleSaveButton(recipes.fridayMeal.id, 'false')}>Unfavorite</button>}
                                </>
                            }
                        </div>
                        <div className="Saturday">
                            <h1>Saturday</h1>
                            {recipes.saturdayMeal.name == '' ?
                                <><br /><br /><p>Seem to be missing a meal. Go back and add one!</p></> :
                                <>
                                    <h3>{recipes.saturdayMeal.name}</h3>
                                    <img src={recipes.saturdayMeal.image_path} alt={recipes.saturdayMeal.name} />

                                    <button onClick={() => handleRemoveButton(recipes.saturdayMeal.id)}>Remove</button>

                                    {!recipes.saturdayMeal.is_saved ? <button onClick={() => handleSaveButton(recipes.saturdayMeal.id, 'true')}>Favorite</button> :
                                        <button onClick={() => handleSaveButton(recipes.saturdayMeal.id, 'false')}>Unfavorite</button>}
                                </>
                            }
                        </div>
                        <div className="Sunday">
                            <h1>Sunday</h1>
                            {recipes.sundayMeal.name == '' ?
                                <><br /><br /><p>Seem to be missing a meal. Go back and add one!</p></> :
                                <>
                                    <h3>{recipes.sundayMeal.name}</h3>
                                    <img src={recipes.sundayMeal.image_path} alt={recipes.sundayMeal.name} />

                                    <button onClick={() => handleRemoveButton(recipes.sundayMeal.id)}>Remove</button>

                                    {!recipes.sundayMeal.is_saved ? <button onClick={() => handleSaveButton(recipes.sundayMeal.id, 'true')}>Favorite</button> :
                                        <button onClick={() => handleSaveButton(recipes.sundayMeal.id, 'false')}>Unfavorite</button>}
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