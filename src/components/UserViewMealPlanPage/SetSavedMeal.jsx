import useReduxStore from '../../hooks/useReduxStore';


function SetSavedMeal({trackSavedMeals}) {
    const recipes = useReduxStore().recipes;





    return(
        <button onClick={() => handleSaveButton(recipes.mondayMeal.id, trackSavedMeals.monday)}>Favorite</button>
    )
}

export default SetSavedMeal;