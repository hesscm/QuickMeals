import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BackOfCard from './BackOfCard';
import FrontOfCard from './FrontOfCard';
import './RecipeGeneratorPage.css';
import { Paper, Button, Typography, Card, Grid, Box } from '@mui/material';

function RecipeGeneratorPage() {
    const dispatch = useDispatch();
    //boolean to check if we are looking at the front or back of the recipe card
    const [sideOfCard, setSideOfCard] = useState(true);

    useEffect(() => {
        dispatch({ type: 'GET_RANDOM_RECIPE' })
    }, []);

    const handleButtonClick = () => {
        dispatch({ type: 'GET_RANDOM_RECIPE' })
    }

    //set card state from true to false or vice versa
    const flipCard = () => {
        if (sideOfCard === true) {
            setSideOfCard(false);
        }
        else {
            setSideOfCard(true);
        }
    }

    return (
        <div>
            {/* MUI grid */}
            <Grid container justifyContent="center">
                <Grid item xs={12} >
                    <Typography variant="h2" component="h2" gutterBottom>The Recipe Generator</Typography>
                </Grid>
                <Paper elevation={12}>
                    <Card>
                        <Box p={4}>
                            <Grid item >
                                {/* conditional rendering. front or back of the card */}
                                {sideOfCard ?
                                    <FrontOfCard flipCard={flipCard} /> :
                                    <BackOfCard flipCard={flipCard} />
                                }
                            </Grid>
                            <br /><br />
                            <Grid item xs={12}>
                                <Button size="large" color="primary" variant="contained" onClick={handleButtonClick}>Get A Random Recipe</Button>
                            </Grid>
                        </Box>
                    </Card>
                </Paper>
            </Grid>
        </div>
    )
}

export default RecipeGeneratorPage;