import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import moment from 'moment';

import './UserSavedMealsPage.css'

function SavedMealsPage() {
    const dispatch = useDispatch();
    const meals = useReduxStore().recipes.userSavedMeals;

    useEffect(() => {
        dispatch({ type: 'GET_USER_SAVED_MEALS' });
    }, []);



    return (
        <>
            <div className="savedMealsPage">
                {
                    meals.length == 0 ?
                        <h4>No meal selected for this day!</h4> :
                        <>
                            <div className='savedMealsTable'>
                                <h1>Your Saved Meals</h1>
                                <h4>Click the buttons to check the details.</h4>
                                <table>

                                    <tbody>
                                        <tr>
                                            <th>Name</th>
                                            <th>Description</th>
                                            <th>Ingredients</th>
                                            <th>Instructions</th>
                                            <th>Date Saved</th>
                                            <th>Action</th>



                                        </tr>

                                        {meals.map((meal, i) => (
                                            <tr key={i}>
                                                <td >
                                                    {meal.name}
                                                </td>
                                                <td>
                                                    <button>View</button>
                                                    {/* {meal.description} */}
                                                </td>
                                                <td>
                                                    <button>View</button>
                                                    {/* {meal.ingredients} */}
                                                </td>
                                                <td>
                                                    <button>View</button>
                                                    {/* {meal.instructions} */}
                                                </td>
                                                <td>
                                                    {meal.date}
                                                </td>
                                                <td>
                                                    <button>Remove</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </>
                }
            </div >
        </>
    )
}

export default SavedMealsPage;