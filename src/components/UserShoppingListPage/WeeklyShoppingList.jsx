import useReduxStore from '../../hooks/useReduxStore';


function WeeklyShoppingList() {
    const ingredients = useReduxStore().recipes.totalUserIngredients;

    return (
        <>
            <div className="WeeklySection">
                {ingredients.length == 0 ?
                    <h4>Give us a second. Combining your ingredients...</h4> :
                    <>
                        <div className='WeeklyTable'>
                            <h2>Shopping List For The Week</h2>
                            <h4>Note: This list IGNORES pantry items such as water, salt, pepper, flour, etc.</h4>

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