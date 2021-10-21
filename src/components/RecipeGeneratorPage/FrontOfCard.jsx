import useReduxStore from '../../hooks/useReduxStore';
import './RecipeGeneratorPage.css';
import { Typography } from '@mui/material';

/*Regarding DOMPurify/dangerouslySetInnerHTML...
 API returns some HTML.
 We will display the HTML as intended but also use DOMPurify for some added security against XSS(cross site scripting) 
*/

function FrontOfCard({ flipCard }) {
    const DOMPurify = require('dompurify')(window); //see line 16
    const recipes = useReduxStore().recipes;

    //front shows the title, image, and description
    return (
        <div onClick={flipCard}>
            <Typography variant="h4" gutterBottom>{recipes.randomRecipe.title}</Typography>
            <img src={recipes.randomRecipe.image} alt={recipes.randomRecipe.title} />
            <br />
            <Typography variant="h4" component="h4" gutterBottom>Description</Typography>
            {/* API returns HTML here. 
               Display the HTML as intended but also use DOMPurify for some added security against XSS(cross site scripting) */}
            <Typography component="span" variant="body1"><div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(recipes.randomRecipe.summary) }} /></Typography>
        </div>
    )
}

export default FrontOfCard;