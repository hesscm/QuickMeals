import moment from 'moment';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';



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
                <Button size="small" color="primary" variant="contained" onClick={() => props.handleDescriptionView(props.meal.description)}>View</Button>
            </td>
            <td>
                <Button size="small" color="primary" variant="contained" onClick={() => props.handleIngredientsView(ingredientsString)}>View</Button>
            </td>
            <td>
                <Button size="small" color="primary" variant="contained" onClick={() => props.handleInstructionsView(props.meal.instructions)}>View</Button>
            </td>
            <td>
                {formatTime(props.meal.date)}
            </td>
            <td>
                <IconButton aria-label="delete" size="large" color="warning" onClick={handleRemoveButton}>
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </td>
        </tr>
    )
}

export default UserSavedMealsItem;