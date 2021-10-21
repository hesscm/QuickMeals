import useReduxStore from '../../hooks/useReduxStore';
import './RecipeGeneratorPage.css';
import { Typography } from '@mui/material';

/*Regarding DOMPurify/dangerouslySetInnerHTML...
 API returns some HTML.
 We will display the HTML as intended but also use DOMPurify for some added security against XSS(cross site scripting)
*/

function BackOfCard({ flipCard }) {
    const DOMPurify = require('dompurify')(window);
    const recipes = useReduxStore().recipes;

    //take an array of ingredients and turn it into a string that is HTML friendly
    let ingredients = [];
    ingredients = recipes.randomRecipe.extendedIngredients;
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

    return (
        // display the ingredients and instructions
        <div onClick={flipCard}>
            <Typography variant="h4">{recipes.randomRecipe.title}</Typography>
            <br />
            <Typography variant="h5">Ingredients</Typography>
            <Typography component="span" variant="body2"><div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(ingredientsString) }} /></Typography>
            <br />
            <Typography variant="h5">Cooking Instructions</Typography>
            <Typography align="left" component="span" variant="body2"><div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(recipes.randomRecipe.instructions) }} /></Typography>
        </div>
    )
}

export default BackOfCard;