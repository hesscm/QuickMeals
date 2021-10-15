import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';


function ViewMealPlanPage() {
    const dispatch = useDispatch();
    const recipes = useReduxStore().recipes;

    useEffect(() => {
        dispatch({ type: 'GET_USER_MEALS' })
    }, []);

    const handleRemoveButton = (id) => {
        console.log(id);
        dispatch({type: 'DELETE_USER_MEAL', payload: id})
    }

    const handleSaveButton = (id) => {
        console.log(id);
        dispatch({ type: 'SAVE_USER_MEAL', payload: id })
    }

    return (
        <>
            <p>View Meal Plan.</p>
            {recipes.length != 0 ?
                < div className="chosenMeals" >
                    {/* section 1 */}
                    <div className="grid-containerA">
                        <div className="item1">
                            <h1>Monday</h1>
                            {recipes.mondayMeal.name == '' ?
                                <><br /><br /><p>Seem to be missing a meal. Go back and add one!</p></> :
                                <>
                                    <h3>{recipes.mondayMeal.name}</h3>
                                    <img src={recipes.mondayMeal.image_path} alt={recipes.mondayMeal.name} />
                                    <button onClick={() => handleRemoveButton(recipes.mondayMeal.id)}>Remove</button>
                                    <button onClick={() => handleSaveButton(recipes.mondayMeal.id)}>Favorite</button>

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
                                    <button onClick={() => handleRemoveButton(recipes.tuesdayMeal.id)}>Favorite</button>

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
                                    <button onClick={() => handleRemoveButton(recipes.wednesdayMeal.id)}>Favorite</button>

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
                                    <button onClick={() => handleRemoveButton(recipes.thursdayMeal.id)}>Favorite</button>


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
                                    <button onClick={() => handleRemoveButton(recipes.fridayMeal.id)}>Favorite</button>


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
                                    <button onClick={() => handleRemoveButton(recipes.saturdayMeal.id)}>Favorite</button>


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
                                    <button onClick={() => handleRemoveButton(recipes.sundayMeal.id)}>Favorite</button>


                                </>
                            }
                        </div>
                    </div>
                    <br /><br />
                    <button  className='btn'>Generate Shopping List</button>
                </div >
                :
                <></>
            }
        </>
    )
}

export default ViewMealPlanPage;