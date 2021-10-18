// import './SpoonacularTesting.css'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BackOfCard from './BackOfCard';
import FrontOfCard from './FrontOfCard';
import './RecipeGeneratorPage.css';

function RecipeGeneratorPage() {
    const dispatch = useDispatch();
    const [sideOfCard, setSideOfCard] = useState(true);

    useEffect(() => {
        dispatch({ type: 'GET_RANDOM_RECIPE' })
    }, []);

    const handleButtonClick = () => {
        console.log('clicked');
        dispatch({ type: 'GET_RANDOM_RECIPE' })
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
                <h1>The Recipe Generator</h1>
                {sideOfCard ?
                    <FrontOfCard flipCard={flipCard} /> :
                    <BackOfCard flipCard={flipCard} />
                }
                <br /><br />
                <button className="btn" onClick={handleButtonClick}>Get A Random Recipe</button>

            </section>
        </div>
    )
}

export default RecipeGeneratorPage;