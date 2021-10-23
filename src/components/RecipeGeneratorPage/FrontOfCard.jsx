import useReduxStore from '../../hooks/useReduxStore';
import './RecipeGeneratorPage.css';
import { Typography, CardMedia, CardContent, Accordion, AccordionSummary, AccordionDetails, Divider } from '@mui/material';

/*Regarding DOMPurify/dangerouslySetInnerHTML...
 API returns some HTML.
 We will display the HTML as intended but also use DOMPurify for some added security against XSS(cross site scripting) 
*/

function FrontOfCard() {
    const DOMPurify = require('dompurify')(window); //see line 16
    const recipes = useReduxStore().recipes;

    //front shows the title, image, and description
    return (
        <div >
            {/* <CardMedia
                component="img"
                height="100"
                width="100%"

                image={recipes.randomRecipe.image}
                alt={recipes.randomRecipe.title}
            /> */}
            <CardMedia>
            <img src={recipes.randomRecipe.image} alt={recipes.randomRecipe.title} />
                <Divider variant="middle" />
            </CardMedia>
            <CardContent>
                {/* <Accordion>
                    <AccordionSummary>
                        <AccordionDetails> */}
            <Typography variant="h5" component="h4" gutterBottom>Description</Typography>
            {/* API returns HTML here. 
               Display the HTML as intended but also use DOMPurify for some added security against XSS(cross site scripting) */}
            <Typography component="span" variant="body2"><div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(recipes.randomRecipe.summary) }} /></Typography>
                            {/* </AccordionDetails>
                    </AccordionSummary>
                    </Accordion> */}
             </CardContent>
            <Divider variant="middle" />
        </div>
    )
}

export default FrontOfCard;