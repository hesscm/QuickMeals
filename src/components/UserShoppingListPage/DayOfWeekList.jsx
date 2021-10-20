import useReduxStore from '../../hooks/useReduxStore';
import { useState } from 'react';
import { Typography } from '@mui/material';



function DayOfWeekList() {
    const recipes = useReduxStore().recipes;
    const [dayOfWeek, setDayOfWeek] = useState(recipes.mondayMeal);

    const handleDayOfWeek = (day) => {
        console.log('hello', day);
        switch (day) {
            case 'Monday':
                setDayOfWeek(recipes.mondayMeal)
                break;
            case 'Tuesday':
                setDayOfWeek(recipes.tuesdayMeal)
                break;
            case 'Wednesday':
                setDayOfWeek(recipes.wednesdayMeal)
                break;
            case 'Thursday':
                setDayOfWeek(recipes.thursdayMeal)
                break;
            case 'Friday':
                setDayOfWeek(recipes.fridayMeal)
                break;
            case 'Saturday':
                setDayOfWeek(recipes.saturdayMeal)
                break;
            case 'Sunday':
                setDayOfWeek(recipes.sundayMeal)
                break;
            default:
                break;
        }
        if (dayOfWeek.id == -1) {
            console.log('oops');
        }
    }


    return (
        <>
            <div className="dayOfWeekSection">
                <Typography htmlFor="day" variant="body1" component="label">Choose A Day: </Typography>

                <select
                    name="day"
                    id="day"
                    onChange={(event) => handleDayOfWeek(event.target.value)}>
                    <Typography variant="body2" component="option">Choose A Day</Typography>
                    <Typography variant="body2" component="option">Monday</Typography>
                    <Typography variant="body2" component="option">Tuesday</Typography>
                    <Typography variant="body2" component="option">Wednesday</Typography>
                    <Typography variant="body2" component="option">Thursday</Typography>
                    <Typography variant="body2" component="option">Friday</Typography>
                    <Typography variant="body2" component="option">Saturday</Typography>
                    <Typography variant="body2" component="option">Sunday</Typography>
                </select>

                {dayOfWeek.id == -1 ?
                    <Typography variant="h6">No meal selected for this day!</Typography> :
                    <>
                        <div className='dayOfWeekTable'>
                            <Typography variant="h4" gutterBottom>{dayOfWeek.day}</Typography>
                            <Typography variant="h5" gutterBottom>{dayOfWeek.name}</Typography>
                            <Typography variant="body1" gutterBottom>Note: This list contains everything you need for the recipe.</Typography>
                            <table>

                                <tbody>
                                    <tr>
                                        <Typography variant="body1" component="th">Quantity</Typography>
                                        <th>Unit</th>
                                        <th>Ingredient</th>
                                    </tr>

                                    {dayOfWeek.ingredients.map((ingredient, i) => (
                                        <tr key={i}>
                                            <td >
                                                {ingredient.amount}
                                            </td>
                                            <td>
                                                {ingredient.unit}
                                            </td>
                                            <td>
                                                {ingredient.name}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default DayOfWeekList;