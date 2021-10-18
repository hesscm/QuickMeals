import useReduxStore from '../../hooks/useReduxStore';
import './RecipeGeneratorPage.css';


function BackOfCard({ flipCard }) {
    const DOMPurify = require('dompurify')(window);
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
            <h1>{recipes.randomRecipe.title}</h1>
            <h3>Ingredients</h3>
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(ingredientsString) }} />
            <h3>Cooking Instructions</h3>
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(recipes.randomRecipe.instructions) }} />
        </div>
    )
}

export default BackOfCard;