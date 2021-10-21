import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import UserSavedMealsItem from './UserSavedMealsItem';
import { Typography } from '@mui/material';
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
                        <Typography variant="h4">No meal selected for this day!</Typography> :
                        <>
                            <div className='savedMealsTable'>
                                <Typography variant="h2">Your Saved Meals</Typography>
                                <Typography variant="h6">Click the buttons to check the details.</Typography>
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

                                        {meals.map((meal, i) => {
                                            return <UserSavedMealsItem
                                                key={meal.id}
                                                meal={meal}
                                            />
                                        })}

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