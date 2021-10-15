import useReduxStore from '../../hooks/useReduxStore';
import './RecipeGeneratorPage.css';

function FrontOfCard({ flipCard }) {

    const DOMPurify = require('dompurify')(window);
    const recipes = useReduxStore().recipes;
    console.log('reducer', recipes);
    return (
        <div className="recipeBox" onClick={flipCard}>
            <h1>Front of card.</h1>
            <h1>{recipes.randomRecipe.title}</h1>
            <img src={recipes.randomRecipe.image} alt={recipes.randomRecipe.title} />
            <h3>Description</h3>
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(recipes.randomRecipe.summary) }} />
        </div>
    )
}

export default FrontOfCard;