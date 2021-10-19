// import './SpoonacularTesting.css'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BackOfCard from './BackOfCard';
import FrontOfCard from './FrontOfCard';
import './RecipeGeneratorPage.css';
import { Paper, Box, Button, Typography } from '@mui/material';

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
            
            <section>
                <Typography variant="h1">The Recipe Generator</Typography>
                <Box>
                    <Paper elevation={3}>
                {sideOfCard ?
                    <FrontOfCard flipCard={flipCard} /> :
                    <BackOfCard flipCard={flipCard} />
                }
                <br /><br />
                <Button size="large" color="primary" variant="contained" onClick={handleButtonClick}>Get A Random Recipe</Button>
                </Paper>
                </Box>
            </section>
        </div>
    )
}

export default RecipeGeneratorPage;