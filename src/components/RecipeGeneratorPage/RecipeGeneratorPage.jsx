// import './SpoonacularTesting.css'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BackOfCard from './BackOfCard';
import FrontOfCard from './FrontOfCard';
import './RecipeGeneratorPage.css';
import { Paper, Button, Typography, Card, Grid } from '@mui/material';

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
            
            <Grid container justifyContent="center">
                <Grid item xs={12} >
                <Typography variant="h2" component="h2" gutterBottom>The Recipe Generator</Typography>
                </Grid>
                
                    <Paper elevation={3}>
                        <Card>
                        <Grid item >
                {sideOfCard ?
                    <FrontOfCard flipCard={flipCard} /> :
                    <BackOfCard flipCard={flipCard} />
                }
                        </Grid>
                <br /><br />
                <Grid item xs={12}>
                <Button size="large" color="primary" variant="contained" onClick={handleButtonClick}>Get A Random Recipe</Button>
                </Grid>
                </Card>
                </Paper>
            </Grid>
        </div>
    )
}

export default RecipeGeneratorPage;