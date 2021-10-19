import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import UserSavedMealsItem from './UserSavedMealsItem';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
const DOMPurify = require('dompurify')(window);

import './UserSavedMealsPage.css'

function SavedMealsPage() {
    const [details, setDetails] = useState({
        descriptionStatus: false, descData: '',
        ingredientsStatus: false, ingrData: '',
        instructionsStatus: false, instrData: ''
    });
    const dispatch = useDispatch();
    const meals = useReduxStore().recipes.userSavedMeals;

    useEffect(() => {
        dispatch({ type: 'GET_USER_SAVED_MEALS' });
    }, []);

    const handleDescriptionView = (description) => {
        if (details.descriptionStatus === false) {
            setDetails({ ...details, descriptionStatus: true, descData: description });
        } else {
            setDetails({ ...details, descriptionStatus: false });
        }
        console.log(details.descriptionStatus);
    }

    const handleIngredientsView = (ingredients) => {
        if (details.ingredientsStatus === false) {
            setDetails({ ...details, ingredientsStatus: true, ingrData: ingredients });
        } else {
            setDetails({ ...details, ingredientsStatus: false });
        }
        console.log(details.ingredientsStatus);
    }

    const handleInstructionsView = (instructions) => {
        if (details.instructionsStatus === false) {
            setDetails({ ...details, instructionsStatus: true, instrData: instructions });
        } else {
            setDetails({ ...details, instructionsStatus: false });
        }
        console.log(details.instructionsStatus);
    }




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

                                        {meals.map((meal, i) => {
                                            return <UserSavedMealsItem
                                                key={meal.id}
                                                meal={meal}
                                                handleDescriptionView={handleDescriptionView}
                                                handleIngredientsView={handleIngredientsView}
                                                handleInstructionsView={handleInstructionsView}
                                            />
                                        })}

                                    </tbody>
                                </table>
                                {details.descriptionStatus && <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(details.descData) }} />}
                                {details.ingredientsStatus && <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(details.ingrData) }} />}
                                {details.instructionsStatus && <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(details.instrData) }} />}




                            </div>
                        </>
                }
            </div >
        </>
    )
}

export default SavedMealsPage;