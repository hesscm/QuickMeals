import useReduxStore from '../../hooks/useReduxStore';
import { useState } from 'react';



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
                <label htmlFor="day">Choose a day: </label>
                <select
                    name="day"
                    id="day"
                    onChange={(event) => handleDayOfWeek(event.target.value)}>
                    <option value="">Choose A Day</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                </select>

                {dayOfWeek.id == -1 ?
                    <h4>No meal selected for this day!</h4> :
                    <>
                        <div className='dayOfWeekTable'>
                            <h2>{dayOfWeek.day}</h2>
                            <h3>{dayOfWeek.name}</h3>
                            <h4>Note: This list contains everything you need for the recipe.</h4>
                            <table>

                                <tbody>
                                    <tr>
                                        <th>Quantity</th>
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