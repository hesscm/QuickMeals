import useReduxStore from '../../hooks/useReduxStore';
import { Typography } from '@mui/material';

function WeeklyShoppingList() {
    const ingredients = useReduxStore().recipes.totalUserIngredients;

    return (
        <>
            <div className="WeeklySection">
                {ingredients.length == 0 ?
                    <Typography variant="h6">Give us a second. Combining your ingredients...</Typography> :
                    <>
                        <div className='WeeklyTable'>
                            <Typography variant="h4" gutterBottom>Shopping List For The Week</Typography>
                            <Typography variant="body1" gutterBottom>Note: This list IGNORES pantry items such as water, salt, pepper, flour, etc.</Typography>

                            <table>
                                <tbody>
                                    <tr>
                                        <th>Quantity</th>
                                        <th>Unit</th>
                                        <th>Ingredient</th>
                                    </tr>

                                    {ingredients.map((ingredient, i) => (
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
export default WeeklyShoppingList;