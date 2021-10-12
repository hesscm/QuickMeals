// import './SpoonacularTesting.css'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import BackOfCard from './BackOfCard';
import FrontOfCard from './FrontOfCard';
import './RecipeGeneratorPage.css';

function RecipeGeneratorPage() {
    const dispatch = useDispatch();
    const reduxStore = useReduxStore();
    // const [recipe, setRecipe] = useState({
    //     name: 'Name',
    //     picture: 'image',
    //     description: 'Lots of words.'
    // });
    const [sideOfCard, setSideOfCard] = useState(true);

    useEffect(() => {
        dispatch({ type: 'GET_RANDOM_RECIPE' })
    }, []);

    const handleButtonClick = () => {
        console.log('clicked');
    }

    const flipCard = () => {
        console.log('card state', sideOfCard);
        if (sideOfCard === true) {
            setSideOfCard(false);
        }
        else {
            setSideOfCard(true);
        }
    }

    return (
        <div>
            <section className='recipeSection'>
                {sideOfCard ?
                    <FrontOfCard flipCard={flipCard} /> :
                    <BackOfCard flipCard={flipCard} />
                }
                <button className="btn" onClick={handleButtonClick}>Get A Recipe</button>
            </section>
        </div>
    )
}

export default RecipeGeneratorPage;