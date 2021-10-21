import moment from 'moment';
import { useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import MUIDialogBox from './MUIDialogBoxSavedPage'

function UserSavedMealsItem(props) {
    const dispatch = useDispatch();

    //take database timestamp and make it human-friendly
    const formatTime = (time) => {
        time = moment().format("MMM Do YY");
        return time;
    }

    //remove the meal from the database/table
    const handleRemoveButton = () => {
        dispatch({ type: 'DELETE_USER_SAVED_MEAL', payload: props.meal.id });
    }


    return(
        <tr>
            <td >
                {props.meal.name}
            </td>
            <td>
                {/* this is a button that display a pop-up when clicked. See MUIDialogBoxSavedPaged.jsx */}
                <MUIDialogBox 
                title={'Description'}
                details={props.meal.description}/>
            </td>
            <td>
                <MUIDialogBox
                    title={'Ingredients'}
                    details={props.meal.ingredients_string} />            
                    </td>
            <td>
                <MUIDialogBox
                    title={'Instructions'}

                    details={props.meal.instructions} />             
                    </td>
            <td>
                {/* format the returned database time to something nicer */}
                {formatTime(props.meal.date)}
            </td>
            <td>
                {/* delete the meal */}
                <IconButton aria-label="delete" size="large" color="warning" onClick={handleRemoveButton}>
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </td>
        </tr>
    )
}

export default UserSavedMealsItem;