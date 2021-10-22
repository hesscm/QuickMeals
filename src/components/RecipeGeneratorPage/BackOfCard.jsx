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

    //take the input from the API and convert the recipe instructions into a HTML ready listed string
        let instructions = [];
        let instructionsString = '';
        if (recipes.randomRecipe.analyzedInstructions.length === 0) {
            instructionsString = 'No instructions provided.'
        } else {
            instructions = recipes.randomRecipe.analyzedInstructions[0].steps;
            if (instructions.length !== 0) {
                for (let i = 0; i < instructions.length; i++) {
                    if (i !== instructions.length - 1) {
                        instructionsString += (i + 1) + '. ' + instructions[i].step + '<br />';
                    } else {
                        instructionsString += instructions[i].step;
                    }
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
            <Typography align="left" component="span" variant="body2"><div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(instructionsString) }} /></Typography>
        </div>
    )
}

export default BackOfCard;