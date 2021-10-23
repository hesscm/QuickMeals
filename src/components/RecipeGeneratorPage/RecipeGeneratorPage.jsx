import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BackOfCard from './BackOfCard';
import FrontOfCard from './FrontOfCard';
import './RecipeGeneratorPage.css';
import { Button, ButtonGroup, Typography, Card, CardHeader, CardActionArea, Grid, Box, Divider } from '@mui/material';
import useReduxStore from '../../hooks/useReduxStore';
import AlertUserOfLogin from './AlertUserOfLogin';



function RecipeGeneratorPage() {
    const dispatch = useDispatch();
    const recipes = useReduxStore().recipes.randomRecipe;
    const user = useReduxStore().user;
    const [saved, setSaved] = useState(false);
    const [mondayMeal, setMondayMeal] = useState('');
    const [showLogin, setShowLogin] = useState(false);

    //boolean to check if we are looking at the front or back of the recipe card
    const [sideOfCard, setSideOfCard] = useState(true);

    useEffect(() => {
        // dispatch({ type: 'GET_RANDOM_RECIPE' })
    }, []);

    const handleButtonClick = () => {
        dispatch({ type: 'GET_RANDOM_RECIPE' })
        setSaved(false);
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

    //function to take in a recipe's ingredients and change it to HTML friendly format
    const parseIngredients = () => {
        let ingredients = [];
        ingredients = recipes.extendedIngredients; //recipe provided
        //we're going to output both an array and a string
        let ingredientsString = '';
        let ingredientsArray = [];

        //if we even have ingredients...
        if (ingredients.length !== 0) {
            for (let i = 0; i < ingredients.length; i++) {
                if (i !== ingredients.length - 1) {
                    ingredientsString += ingredients[i].original + '<br />';
                    ingredientsArray.push({ name: ingredients[i].name, amount: ingredients[i].amount, unit: ingredients[i].unit, fullString: ingredients[i].original });
                } else {
                    ingredientsString += ingredients[i].original;
                }
            }
        }
        return [ingredientsString, ingredientsArray];
    }

    //take the input from the API and convert the recipe instructions into a HTML ready listed string
    const parseInstructions = () => {
        let instructions = [];
        let instructionsString = '';
        if (recipes.analyzedInstructions.length === 0) {
            instructionsString = 'No instructions provided.'
        } else {
            instructions = recipes.analyzedInstructions[0].steps;
            if (instructions.length !== 0) {
                for (let i = 0; i < instructions.length; i++) {
                    if (i !== instructions.length - 1) {
                        instructionsString += (i + 1) + '. ' + instructions[i].step + '<br />';
                    } else {
                        instructionsString += instructions[i].step;
                    }
                }
            }
            return instructionsString;
        }
    }

    //update this meal as a saved meal or an UNSAVED meal
    const handleSaveButton = () => {
        if (!user.id) {
            setShowLogin(true);
        } else {
            setSaved(true);
            const action = {
                title: recipes.title,
                image: recipes.image,
                description: recipes.summary,
                instructions: parseInstructions(),
                ingredients: parseIngredients()[1],
                ingredientsString: parseIngredients()[0],
                number_servings: recipes.servings,
                id: recipes.id,
                day: 'RecipeGenerator'
            };
            console.log(recipes.title);
            console.log(mondayMeal);
            dispatch({ type: 'SAVE_RECIPE_GENERATOR_MEAL', payload: action })
        }
    }

    return (
        <div>
            {/* MUI grid */}
            {showLogin && <AlertUserOfLogin setShowLogin={setShowLogin} />}

            <Grid container justifyContent="center">
                <Grid item xs={12} >
                    <Typography variant="h2" component="h2" gutterBottom>The Recipe Generator</Typography>
                    <Typography variant="h5" component="h2" gutterBottom>Click the card to see more details.</Typography>
                </Grid>
                <Grid item xs={5}>
                    <Card elevation={12}>
                        <CardActionArea onClick={flipCard}>
                            <Box p={4} >
                                {!recipes.title ? <>
                                    <Typography variant="h4" gutterBottom>Let's Grab a Recipe</Typography>
                                </> : <>
                                    <CardHeader
                                        title={recipes.title}
                                        titleTypographyProps={{ variant: 'h4' }}
                                    />
                                        <Divider variant="middle" />

                                    {/* conditional rendering. front or back of the card */}
                                    {sideOfCard ?
                                        <FrontOfCard /> :
                                        <BackOfCard />
                                    }
                                    <br /><br />


                                </>}
                            </Box>
                        </CardActionArea>
                    </Card>
                    <br />
                    {!recipes.title ?
                        <Button size="large" color="primary" variant="contained" onClick={handleButtonClick}>Get A Random Recipe</Button>
                        :
                    <ButtonGroup>
                            <Button size="large" color="primary" variant="contained" onClick={handleButtonClick}>Get A Random Recipe</Button>
                        {!saved ?
                            <Button size="large" color="secondary" variant="contained" onClick={() => handleSaveButton()}>Save</Button>
                            :
                            <Button size="large" disabled color="secondary" variant="contained">Saved!</Button>
                        }
                    </ButtonGroup>}

                </Grid>
            </Grid>

        </div>
    )
}

export default RecipeGeneratorPage;