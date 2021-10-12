import useReduxStore from '../../hooks/useReduxStore';
import './RecipeGeneratorPage.css';


function FrontOfCard({ flipCard }) {
    const recipes = useReduxStore().recipes;
    console.log('reducer', recipes);
    return (
        <div className="recipeBox" onClick={flipCard}>
            <h1>Front of card.</h1>
            <h5>{recipes.randomRecipe.title}</h5>
            <img src={recipes.randomRecipe.image} alt={recipes.randomRecipe.title} />
            <h6>Description:</h6>
            <div dangerouslySetInnerHTML={{ __html: recipes.randomRecipe.summary }} />
        </div>
    )
}

export default FrontOfCard;