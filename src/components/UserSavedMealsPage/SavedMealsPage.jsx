import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import { Typography } from '@mui/material';
import MUITable from './MUITable'
import './UserSavedMealsPage.css'

function SavedMealsPage() {
    const dispatch = useDispatch();
    const meals = useReduxStore().recipes.userSavedMeals;

    useEffect(() => {
        dispatch({ type: 'GET_USER_SAVED_MEALS' });
    }, []);

    //table needs to be changed to MUI. Under construction...
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
                                <MUITable />
                            </div>
                        </>
                }
            </div >
        </>
    )
}

export default SavedMealsPage;