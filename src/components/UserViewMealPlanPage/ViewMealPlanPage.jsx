import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import { useHistory } from 'react-router-dom';
import { Button, ButtonGroup, Grid, Paper, Typography, Card, Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


function ViewMealPlanPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const recipes = useReduxStore().recipes;

    useEffect(() => {
        dispatch({ type: 'GET_USER_MEALS_SIMPLE' })
    }, []);

    const handleRemoveButton = (id) => {
        console.log(id);
        dispatch({ type: 'DELETE_USER_MEAL', payload: id });
        dispatch({ type: 'GET_USER_MEALS_SIMPLE' })
    }

    const generateShoppingList = () => {
        history.push('/shoppinglist');
    }

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
            {recipes.length != 0 ?
                < div className="chosenMeals" >
                    {/* section 1 */}
                    <Grid
                        container
                        spacing={2}
                        alignItems="baseline"
                        justifyContent="center"
                    >
                        <Grid item xs={3}>
                            <Paper>
                                <Card>
                                    <Box p={2}>
                                        <Typography variant="h4" gutterBottom>Monday</Typography>
                                        {recipes.mondayMeal.name == '' ?
                                            <><br /><Typography variant="body1" gutterBottom>Seem to be missing a meal. Go back and add one!</Typography></> :
                                            <>
                                                <Typography variant="h6">{recipes.mondayMeal.name}</Typography>

                                                <img src={recipes.mondayMeal.image_path} alt={recipes.mondayMeal.name} />
                                                <br />
                                                <ButtonGroup variant="outlined" aria-label="outlined button group">
                                                    {!recipes.mondayMeal.is_saved ?
                                                        <Button size="small" color="primary" variant="contained" onClick={() => handleSaveButton(recipes.mondayMeal.id, 'true')}>Favorite</Button>
                                                        :
                                                        <Button size="small" color="primary" variant="contained" onClick={() => handleSaveButton(recipes.mondayMeal.id, 'false')}>Unfavorite</Button>
                                                    }
                                                    <IconButton aria-label="delete" size="large" color="warning" onClick={() => handleRemoveButton(recipes.mondayMeal.id)}>
                                                        <DeleteIcon fontSize="inherit" />
                                                    </IconButton>
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
                                                <ButtonGroup>
                                                    {!recipes.tuesdayMeal.is_saved ?
                                                        <Button size="small" color="primary" variant="contained" onClick={() => handleSaveButton(recipes.tuesdayMeal.id, 'true')}>Favorite</Button>
                                                        :
                                                        <Button size="small" color="primary" variant="contained" onClick={() => handleSaveButton(recipes.tuesdayMeal.id, 'false')}>Unfavorite</Button>
                                                    }
                                                    <IconButton aria-label="delete" size="large" color="warning" onClick={() => handleRemoveButton(recipes.tuesdayMeal.id)}>
                                                        <DeleteIcon fontSize="inherit" />
                                                    </IconButton>
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
                                                <ButtonGroup>
                                                    {!recipes.wednesdayMeal.is_saved ?
                                                        <Button size="small" color="primary" variant="contained" onClick={() => handleSaveButton(recipes.wednesdayMeal.id, 'true')}>Favorite</Button>
                                                        :
                                                        <Button size="small" color="primary" variant="contained" onClick={() => handleSaveButton(recipes.wednesdayMeal.id, 'false')}>Unfavorite</Button>
                                                    }
                                                    <IconButton aria-label="delete" size="large" color="warning" onClick={() => handleRemoveButton(recipes.wednesdayMeal.id)}>
                                                        <DeleteIcon fontSize="inherit" />
                                                    </IconButton>
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
                                                <ButtonGroup>
                                                    {!recipes.thursdayMeal.is_saved ?
                                                        <Button size="small" color="primary" variant="contained" onClick={() => handleSaveButton(recipes.thursdayMeal.id, 'true')}>Favorite</Button>
                                                        :
                                                        <Button size="small" color="primary" variant="contained" onClick={() => handleSaveButton(recipes.thursdayMeal.id, 'false')}>Unfavorite</Button>
                                                    }
                                                    <IconButton aria-label="delete" size="large" color="warning" onClick={() => handleRemoveButton(recipes.thursdayMeal.id)}>
                                                        <DeleteIcon fontSize="inherit" />
                                                    </IconButton>
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
                                                <ButtonGroup>
                                                    {!recipes.fridayMeal.is_saved ?
                                                        <Button size="small" color="primary" variant="contained" onClick={() => handleSaveButton(recipes.fridayMeal.id, 'true')}>Favorite</Button>
                                                        :
                                                        <Button size="small" color="primary" variant="contained" onClick={() => handleSaveButton(recipes.fridayMeal.id, 'false')}>Unfavorite</Button>
                                                    }
                                                    <IconButton aria-label="delete" size="large" color="warning" onClick={() => handleRemoveButton(recipes.fridayMeal.id)}>
                                                        <DeleteIcon fontSize="inherit" />
                                                    </IconButton>
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
                                                <ButtonGroup>
                                                    {!recipes.saturdayMeal.is_saved ?
                                                        <Button size="small" color="primary" variant="contained" onClick={() => handleSaveButton(recipes.saturdayMeal.id, 'true')}>Favorite</Button>
                                                        :
                                                        <Button size="small" color="primary" variant="contained" onClick={() => handleSaveButton(recipes.saturdayMeal.id, 'false')}>Unfavorite</Button>
                                                    }
                                                    <IconButton aria-label="delete" size="large" color="warning" onClick={() => handleRemoveButton(recipes.saturdayMeal.id)}>
                                                        <DeleteIcon fontSize="inherit" />
                                                    </IconButton>
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
                                                <ButtonGroup>
                                                    {!recipes.sundayMeal.is_saved ?
                                                        <Button size="small" color="primary" variant="contained" onClick={() => handleSaveButton(recipes.sundayMeal.id, 'true')}>Favorite</Button>
                                                        :
                                                        <Button size="small" color="primary" variant="contained" onClick={() => handleSaveButton(recipes.sundayMeal.id, 'false')}>Unfavorite</Button>
                                                    }
                                                    <IconButton aria-label="delete" size="large" color="warning" onClick={() => handleRemoveButton(recipes.sundayMeal.id)}>
                                                        <DeleteIcon fontSize="inherit" />
                                                    </IconButton>
                                                </ButtonGroup>
                                            </>
                                        }
                                    </Box>
                                </Card>
                            </Paper>
                        </Grid>
                        <br /><br />
                        <Grid item sx={12}>
                            <Button size="large" color="secondary" variant="contained" onClick={generateShoppingList} className='btn'>Generate Shopping List</Button>
                        </Grid>
                    </Grid>
                </div >
                :
                <></>
            }
        </>
    )
}

export default ViewMealPlanPage;