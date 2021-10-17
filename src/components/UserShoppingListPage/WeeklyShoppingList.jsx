import useReduxStore from '../../hooks/useReduxStore';


function WeeklyShoppingList() {
    const ingredients = useReduxStore().recipes.totalUserIngredients;

  const ingredientsToDispatch = () => {
      let apiIngredients = [];
      for (let i = 0; i < ingredients.length; i++) {
          apiIngredients.push(ingredients[i].fullString);  
      }
      console.log('apiIngredients',apiIngredients);
  }
  ingredientsToDispatch();


    return (
        <>
            <div className="WeeklySection">
                {ingredients.length == 0 ?
                    <h4>Give us a second. Combining your ingredients...</h4> :
                    <>
                        <div className='WeeklyTable'>
                            <h2>Shopping List For The Week</h2>
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