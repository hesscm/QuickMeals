import './PickYourMealsPage.css'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';


function PickYourMealsPage() {
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch({ type: 'GET_API_RECIPE' })
    // }, []);

    const handleButtonClick = () => {
        console.log('clicked');
        dispatch({ type: 'GET_API_RECIPES' })
    }

    return (
        <>
        {/* section 1 */}
            <div className="chosenMeals">
                <p>chosenMeals.</p>
                <div className="grid-containerA">
                    <div className="item1">
                        Monday
                        <p>Add a recipe to today.</p>
                    </div>
                    <div className="item2">
                        Tuesday
                        <p>Add a recipe to today.</p>
                    </div>
                    <div className="item3">
                        Wednesday
                        <p>Add a recipe to today.</p>
                    </div>
                    <div className="item4">
                        Thursday
                        <p>Add a recipe to today.</p>
                    </div>
                    <div className="item5">
                        Friday
                        <p>Add a recipe to today.</p>
                    </div>
                    <div className="item6">
                        Saturday
                        <p>Add a recipe to today.</p>
                    </div>
                    <div className="item7">
                        Sunday
                        <p>Add a recipe to today.</p>
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
                    <div className="meal1">Meal 1
                    </div>
                    <div className="meal2">Meal 2</div>
                    <div className="meal3">Meal 3</div>
                    <div className="meal4">Meal 4</div>

                </div>
            </div>

        </>
    )
}

export default PickYourMealsPage;