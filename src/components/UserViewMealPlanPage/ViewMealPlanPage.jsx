import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import { useHistory } from 'react-router-dom';
import { Button, ButtonGroup, Grid, Paper, Typography, Card, Box } from '@mui/material';
import MUIDialogBox from '../PickYourMealsPage/ViewDetailsDialog';

function ViewMealPlanPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const recipes = useReduxStore().recipes;

    //just get the meals from the DB. no API involved here
    useEffect(() => {
        dispatch({ type: 'GET_USER_MEALS_SIMPLE' })
    }, []);

    //remove the meal and refresh the meals
    const handleRemoveButton = (id) => {
        console.log(id);
        dispatch({ type: 'DELETE_USER_MEAL', payload: id });
    }

    //go to the shopping list page
    const generateShoppingList = () => {
        history.push('/shoppinglist');
    }

    //update this meal as a saved meal or an UNSAVED meal
    const handleSaveButton = (id, updateIsSaved) => {
        switch (updateIsSaved) {
            case 'true':
                dispatch({ type: 'SAVE_USER_MEAL', payload: { id: id, saved: true } })
                break;
            case 'false':
                dispatch({ type: 'SAVE_USER_MEAL', payload: { id: id, saved: false } })
                break;
            default:
                break;
        }
    }

    return (
        <>
            <Typography variant="h2" gutterBottom>View Meal Plan</Typography>
            {/* some conditional rendering to help prevent exploding rendering syndrome */}
            {recipes.length != 0 ?
                    <Grid
                        container
                        spacing={2}
                        alignItems="baseline"
                        justifyContent="center"
                    >
                        {/* card for each day of the week */}
                        <Grid item xs={3}>
                            <Paper>
                                <Card>
                                    <Box p={2}> 
                                        <Typography variant="h4" gutterBottom>Monday</Typography>
                                        {recipes.mondayMeal.name == '' ? //if meal is empty, show that there is nothing there
                                            <><br /><Typography variant="body1" gutterBottom>Seem to be missing a meal. Go back and add one!</Typography></> :
                                            <>
                                                {/* else, display the meal */}
                                                <Typography variant="h6">{recipes.mondayMeal.name}</Typography>
                                                <img src={recipes.mondayMeal.image_path} alt={recipes.mondayMeal.name} />
                                                <br />
                                                <ButtonGroup size="small" variant="outlined" aria-label="outlined button group">
                                                    {/* button to display the details of this meal */}
                                                    <MUIDialogBox
                                                        meal={recipes.mondayMeal}
                                                        ingredientsString={recipes.mondayMeal.ingredients_string}
                                                    />
                                                    {/* is this meal saved? change buttons depending on the boolean */}
                                                    {!recipes.mondayMeal.is_saved ?
                                                        <Button size="small" color="secondary" variant="contained" onClick={() => handleSaveButton(recipes.mondayMeal.id, 'true')}>Favorite</Button>
                                                        :
                                                        <Button size="small" color="success" variant="contained" onClick={() => handleSaveButton(recipes.mondayMeal.id, 'false')}>Unfavorite</Button>
                                                    }
                                                    {/* remove the meal from the meal plan */}
                                                    <Button size="small" variant="contained"color="warning" onClick={() => handleRemoveButton(recipes.mondayMeal.id)}>Remove</Button>
                                                </ButtonGroup>
                                            </>
                                        }
                                    </Box>
                                </Card>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper>
                                <Card>
                                    <Box p={2}>
                                        <Typography variant="h4" gutterBottom>Tuesday</Typography>
                                        {recipes.tuesdayMeal.name == '' ?
                                            <><br /><Typography variant="body1" gutterBottom>Seem to be missing a meal. Go back and add one!</Typography></> :
                                            <>
                                                <Typography variant="h6">{recipes.tuesdayMeal.name}</Typography>
                                                <img src={recipes.tuesdayMeal.image_path} alt={recipes.tuesdayMeal.name} />
                                                <br />
                                                <ButtonGroup size="small" variant="outlined" aria-label="outlined button group">
                                                    <MUIDialogBox
                                                        meal={recipes.tuesdayMeal}
                                                        ingredientsString={recipes.tuesdayMeal.ingredients_string}
                                                    />
                                                    {!recipes.tuesdayMeal.is_saved ?
                                                        <Button size="small" color="secondary" variant="contained" onClick={() => handleSaveButton(recipes.tuesdayMeal.id, 'true')}>Favorite</Button>
                                                        :
                                                        <Button size="small" color="success" variant="contained" onClick={() => handleSaveButton(recipes.tuesdayMeal.id, 'false')}>Unfavorite</Button>
                                                    }
                                                    <Button size="small" variant="contained" color="warning" onClick={() => handleRemoveButton(recipes.tuesdayMeal.id)}>Remove</Button>
                                                </ButtonGroup>
                                            </>
                                        }
                                    </Box>
                                </Card>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper>
                                <Card>
                                    <Box p={2}>
                                        <Typography variant="h4" gutterBottom>Wednesday</Typography>
                                        {recipes.wednesdayMeal.name == '' ?
                                            <><br /><Typography variant="body1" gutterBottom>Seem to be missing a meal. Go back and add one!</Typography></> :
                                            <>
                                                <Typography variant="h6">{recipes.wednesdayMeal.name}</Typography>
                                                <img src={recipes.wednesdayMeal.image_path} alt={recipes.wednesdayMeal.name} />
                                                <br />
                                                <ButtonGroup size="small" variant="outlined" aria-label="outlined button group">
                                                    <MUIDialogBox
                                                        meal={recipes.wednesdayMeal}
                                                        ingredientsString={recipes.wednesdayMeal.ingredients_string}
                                                    />
                                                    {!recipes.wednesdayMeal.is_saved ?
                                                        <Button size="small" color="secondary" variant="contained" onClick={() => handleSaveButton(recipes.wednesdayMeal.id, 'true')}>Favorite</Button>
                                                        :
                                                        <Button size="small" color="success" variant="contained" onClick={() => handleSaveButton(recipes.wednesdayMeal.id, 'false')}>Unfavorite</Button>
                                                    }
                                                    <Button size="small" variant="contained" color="warning" onClick={() => handleRemoveButton(recipes.wednesdayMeal.id)}>Remove</Button>
                                                </ButtonGroup>
                                            </>
                                        }
                                    </Box>
                                </Card>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper>
                                <Card>
                                    <Box p={2}>
                                        <Typography variant="h4" gutterBottom>Thursday</Typography>
                                        {recipes.thursdayMeal.name == '' ?
                                            <><br /><Typography variant="body1" gutterBottom>Seem to be missing a meal. Go back and add one!</Typography></> :
                                            <>
                                                <Typography variant="h6">{recipes.thursdayMeal.name}</Typography>
                                                <img src={recipes.thursdayMeal.image_path} alt={recipes.thursdayMeal.name} />
                                                <br />
                                                <ButtonGroup size="small" variant="outlined" aria-label="outlined button group">
                                                    <MUIDialogBox
                                                        meal={recipes.thursdayMeal}
                                                        ingredientsString={recipes.thursdayMeal.ingredients_string}
                                                    />
                                                    {!recipes.thursdayMeal.is_saved ?
                                                        <Button size="small" color="secondary" variant="contained" onClick={() => handleSaveButton(recipes.thursdayMeal.id, 'true')}>Favorite</Button>
                                                        :
                                                        <Button size="small" color="success" variant="contained" onClick={() => handleSaveButton(recipes.thursdayMeal.id, 'false')}>Unfavorite</Button>
                                                    }
                                                    <Button size="small" variant="contained" color="warning" onClick={() => handleRemoveButton(recipes.thursdayMeal.id)}>Remove</Button>
                                                </ButtonGroup>
                                            </>
                                        }
                                    </Box>
                                </Card>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper>
                                <Card>
                                    <Box p={2}>
                                        <Typography variant="h4" gutterBottom>Friday</Typography>
                                        {recipes.fridayMeal.name == '' ?
                                            <><br /><Typography variant="body1" gutterBottom>Seem to be missing a meal. Go back and add one!</Typography></> :
                                            <>
                                                <Typography variant="h6">{recipes.fridayMeal.name}</Typography>
                                                <img src={recipes.fridayMeal.image_path} alt={recipes.fridayMeal.name} />
                                                <br />
                                                <ButtonGroup size="small" variant="outlined" aria-label="outlined button group">
                                                    <MUIDialogBox
                                                        meal={recipes.fridayMeal}
                                                        ingredientsString={recipes.fridayMeal.ingredients_string}
                                                    />
                                                    {!recipes.fridayMeal.is_saved ?
                                                        <Button size="small" color="secondary" variant="contained" onClick={() => handleSaveButton(recipes.fridayMeal.id, 'true')}>Favorite</Button>
                                                        :
                                                        <Button size="small" color="success" variant="contained" onClick={() => handleSaveButton(recipes.fridayMeal.id, 'false')}>Unfavorite</Button>
                                                    }
                                                    <Button size="small" variant="contained" color="warning" onClick={() => handleRemoveButton(recipes.fridayMeal.id)}>Remove</Button>
                                                </ButtonGroup>
                                            </>
                                        }
                                    </Box>
                                </Card>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper>
                                <Card>
                                    <Box p={2}>
                                        <Typography variant="h4" gutterBottom>Saturday</Typography>
                                        {recipes.saturdayMeal.name == '' ?
                                            <><br /><Typography variant="body1" gutterBottom>Seem to be missing a meal. Go back and add one!</Typography></> :
                                            <>
                                                <Typography variant="h6">{recipes.saturdayMeal.name}</Typography>
                                                <img src={recipes.saturdayMeal.image_path} alt={recipes.saturdayMeal.name} />
                                                <br />
                                                <ButtonGroup size="small" variant="outlined" aria-label="outlined button group">
                                                    <MUIDialogBox
                                                        meal={recipes.saturdayMeal}
                                                        ingredientsString={recipes.saturdayMeal.ingredients_string}
                                                    />
                                                    {!recipes.saturdayMeal.is_saved ?
                                                        <Button size="small" color="secondary" variant="contained" onClick={() => handleSaveButton(recipes.saturdayMeal.id, 'true')}>Favorite</Button>
                                                        :
                                                        <Button size="small" color="success" variant="contained" onClick={() => handleSaveButton(recipes.saturdayMeal.id, 'false')}>Unfavorite</Button>
                                                    }
                                                    <Button size="small" variant="contained" color="warning" onClick={() => handleRemoveButton(recipes.saturdayMeal.id)}>Remove</Button>
                                                </ButtonGroup>
                                            </>
                                        }
                                    </Box>
                                </Card>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper>
                                <Card>
                                    <Box p={2}>
                                        <Typography variant="h4" gutterBottom>Sunday</Typography>
                                        {recipes.sundayMeal.name == '' ?
                                            <><br /><Typography variant="body1" gutterBottom>Seem to be missing a meal. Go back and add one!</Typography></> :
                                            <>
                                                <Typography variant="h6">{recipes.sundayMeal.name}</Typography>
                                                <img src={recipes.sundayMeal.image_path} alt={recipes.sundayMeal.name} />
                                                <br />
                                                <ButtonGroup size="small" variant="outlined" aria-label="outlined button group">
                                                    <MUIDialogBox
                                                        meal={recipes.sundayMeal}
                                                        ingredientsString={recipes.sundayMeal.ingredients_string}
                                                    />
                                                    {!recipes.mondayMeal.is_saved ?
                                                        <Button size="small" color="secondary" variant="contained" onClick={() => handleSaveButton(recipes.sundayMeal.id, 'true')}>Favorite</Button>
                                                        :
                                                        <Button size="small" color="success" variant="contained" onClick={() => handleSaveButton(recipes.sundayMeal.id, 'false')}>Unfavorite</Button>
                                                    }
                                                    <Button size="small" variant="contained" color="warning" onClick={() => handleRemoveButton(recipes.sundayMeal.id)}>Remove</Button>
                                                </ButtonGroup>
                                            </>
                                        }
                                    </Box>
                                </Card>
                            </Paper>
                        </Grid>
                        <br /><br />
                        <Grid item xs={12}>
                            {/* send us to the shopping list page */}
                            <Button size="large" color="secondary" variant="contained" onClick={generateShoppingList} className='btn'>Generate Shopping List</Button>
                        </Grid>
                    </Grid>
                :
                <></>
            }
        </>
    )
}

export default ViewMealPlanPage;