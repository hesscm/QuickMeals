import useReduxStore from '../../hooks/useReduxStore';
import './RecipeGeneratorPage.css';


function BackOfCard({ flipCard }) {
    const recipes = useReduxStore().recipes;

    let ingredients = [];
    ingredients = recipes.randomRecipeIngredients;
    let ingredientsString = '';

    if (ingredients.length !== 0) {
        for (let i = 0; i < ingredients.length; i++) {
            if (i !== ingredients.length - 1) {
                ingredientsString += ingredients[i].original + '<br />';
            } else {
                ingredientsString += ingredients[i].original;
            }
        }
    }
    console.log(ingredientsString);

    return (
        <div className="recipeBox" onClick={flipCard}>
            <h1>Back of card.</h1>
            <h3>{recipes.randomRecipe.title}</h3>
            <h6>Ingredients</h6>
            <div dangerouslySetInnerHTML={{ __html: ingredientsString }} />
            <h6>Cooking Instructions</h6>
            <div dangerouslySetInnerHTML={{ __html: recipes.randomRecipe.instructions }} />
        </div>
    )
}

export default BackOfCard;