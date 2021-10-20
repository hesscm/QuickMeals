import useReduxStore from '../../hooks/useReduxStore';
import './RecipeGeneratorPage.css';
import { Typography } from '@mui/material';

function FrontOfCard({ flipCard }) {

    const DOMPurify = require('dompurify')(window);
    const recipes = useReduxStore().recipes;
    console.log('reducer', recipes);
    return (
        <div onClick={flipCard}>
            <Typography variant="h4" gutterBottom>{recipes.randomRecipe.title}</Typography>
            <img src={recipes.randomRecipe.image} alt={recipes.randomRecipe.title} />
            <br />
            <Typography variant="h4" component="h4" gutterBottom>Description</Typography>
            <Typography component="span" variant="body1"><div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(recipes.randomRecipe.summary) }} /></Typography>
        </div>
    )
}

export default FrontOfCard;