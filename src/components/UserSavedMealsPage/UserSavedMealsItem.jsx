import moment from 'moment';
import { useDispatch } from 'react-redux';



function UserSavedMealsItem(props) {
    const dispatch = useDispatch();


    const formatTime = (time) => {
        time = moment().format("MMM Do YY");
        return time;
    }

    let ingredients = [];
    ingredients = props.meal.ingredients;
    let ingredientsString = '';
    if (ingredients.length !== 0) {
        for (let i = 0; i < ingredients.length; i++) {
            if (i !== ingredients.length - 1) {
                ingredientsString += ingredients[i].fullString + '<br />';
            } else {
                ingredientsString += ingredients[i].fullString;
            }
        }
    }

    const handleRemoveButton = () => {
        dispatch({ type: 'DELETE_USER_SAVED_MEAL', payload: props.meal.id });
        // dispatch({ type: 'GET_USER_SAVED_MEALS' });
    }


    return(
        <tr>
            <td >
                {props.meal.name}
            </td>
            <td>
                <button onClick={() => props.handleDescriptionView(props.meal.description)}>View</button>
            </td>
            <td>
                <button onClick={() => props.handleIngredientsView(ingredientsString)}>View</button>
            </td>
            <td>
                <button onClick={() => props.handleInstructionsView(props.meal.instructions)}>View</button>
            </td>
            <td>
                {formatTime(props.meal.date)}
            </td>
            <td>
                <button onClick={handleRemoveButton}>Remove</button>
            </td>
        </tr>
    )
}

export default UserSavedMealsItem;