import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import { useHistory } from 'react-router-dom';
import { Button, Grid, Paper, Typography } from '@mui/material';
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
            <h1>View Meal Plan</h1>
            {recipes.length != 0 ?
                < div className="chosenMeals" >
                    {/* section 1 */}
                    <Grid 
                    container 
                    spacing={2}
                    alignItems="baseline"
                    
                    >
                        <Grid item xs={3}>
                            <Paper>
                                <Typography variant="h4">Monday</Typography>
                                <h3>{recipes.mondayMeal.is_saved}</h3>

                                {recipes.mondayMeal.name == '' ?
                                    <><br /><br /><p>Seem to be missing a meal. Go back and add one!</p></> :
                                    <>
                                        <h3>{recipes.mondayMeal.name}</h3>

                                        <img src={recipes.mondayMeal.image_path} alt={recipes.mondayMeal.name} />
                                        <IconButton aria-label="delete" size="large" color="warning" onClick={() => handleRemoveButton(recipes.mondayMeal.id)}>
                                            <DeleteIcon fontSize="inherit" />
                                        </IconButton>

                                        {!recipes.mondayMeal.is_saved ?
                                            <Button size="small" color="primary" variant="contained" onClick={() => handleSaveButton(recipes.mondayMeal.id, 'true')}>Favorite</Button>
                                            :
                                            <Button size="small" color="primary" variant="contained" onClick={() => handleSaveButton(recipes.mondayMeal.id, 'false')}>Unfavorite</Button>
                                        }
            
                                    </>
                                }
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper>
                                <h1>Tuesday</h1>
                                {recipes.tuesdayMeal.name == '' ?
                                    <><br /><br /><p>Seem to be missing a meal. Go back and add one!</p></> :
                                    <>
                                        <h3>{recipes.tuesdayMeal.name}</h3>
                                        <img src={recipes.tuesdayMeal.image_path} alt={recipes.tuesdayMeal.name} />

                                        <IconButton aria-label="delete" size="large" color="warning" onClick={() => handleRemoveButton(recipes.tuesdayMeal.id)}>
                                            <DeleteIcon fontSize="inherit" />
                                        </IconButton>

                                        {!recipes.tuesdayMeal.is_saved ?
                                            <Button size="small" color="primary" variant="contained" onClick={() => handleSaveButton(recipes.tuesdayMeal.id, 'true')}>Favorite</Button>
                                            :
                                            <Button size="small" color="primary" variant="contained" onClick={() => handleSaveButton(recipes.tuesdayMeal.id, 'false')}>Unfavorite</Button>
                                        }
                                    </>
                                }
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper>
                                <h1>Wednesday</h1>
                                {recipes.wednesdayMeal.name == '' ?
                                    <><br /><br /><p>Seem to be missing a meal. Go back and add one!</p></> :
                                    <>
                                        <h3>{recipes.wednesdayMeal.name}</h3>
                                        <img src={recipes.wednesdayMeal.image_path} alt={recipes.wednesdayMeal.name} />

                                        <IconButton aria-label="delete" size="large" color="warning" onClick={() => handleRemoveButton(recipes.wednesdayMeal.id)}>
                                            <DeleteIcon fontSize="inherit" />
                                        </IconButton>

                                        {!recipes.wednesdayMeal.is_saved ?
                                            <Button size="small" color="primary" variant="contained" onClick={() => handleSaveButton(recipes.wednesdayMeal.id, 'true')}>Favorite</Button>
                                            :
                                            <Button size="small" color="primary" variant="contained" onClick={() => handleSaveButton(recipes.wednesdayMeal.id, 'false')}>Unfavorite</Button>
                                        }
                                    </>
                                }
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper>
                                <h1>Thursday</h1>
                                {recipes.thursdayMeal.name == '' ?
                                    <><br /><br /><p>Seem to be missing a meal. Go back and add one!</p></> :
                                    <>
                                        <h3>{recipes.thursdayMeal.name}</h3>
                                        <img src={recipes.thursdayMeal.image_path} alt={recipes.thursdayMeal.name} />

                                        <IconButton aria-label="delete" size="large" color="warning" onClick={() => handleRemoveButton(recipes.thursdayMeal.id)}>
                                            <DeleteIcon fontSize="inherit" />
                                        </IconButton>

                                        {!recipes.thursdayMeal.is_saved ?
                                            <Button size="small" color="primary" variant="contained" onClick={() => handleSaveButton(recipes.thursdayMeal.id, 'true')}>Favorite</Button>
                                            :
                                            <Button size="small" color="primary" variant="contained" onClick={() => handleSaveButton(recipes.thursdayMeal.id, 'false')}>Unfavorite</Button>
                                        }
                                    </>
                                }
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper>
                                <h1>Friday</h1>
                                {recipes.fridayMeal.name == '' ?
                                    <><br /><br /><p>Seem to be missing a meal. Go back and add one!</p></> :
                                    <>
                                        <h3>{recipes.fridayMeal.name}</h3>
                                        <img src={recipes.fridayMeal.image_path} alt={recipes.fridayMeal.name} />

                                        <IconButton aria-label="delete" size="large" color="warning" onClick={() => handleRemoveButton(recipes.fridayMeal.id)}>
                                            <DeleteIcon fontSize="inherit" />
                                        </IconButton>

                                        {!recipes.fridayMeal.is_saved ?
                                            <Button size="small" color="primary" variant="contained" onClick={() => handleSaveButton(recipes.fridayMeal.id, 'true')}>Favorite</Button>
                                            :
                                            <Button size="small" color="primary" variant="contained" onClick={() => handleSaveButton(recipes.fridayMeal.id, 'false')}>Unfavorite</Button>
                                        }
                                    </>
                                }
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper>
                                <h1>Saturday</h1>
                                {recipes.saturdayMeal.name == '' ?
                                    <><br /><br /><p>Seem to be missing a meal. Go back and add one!</p></> :
                                    <>
                                        <h3>{recipes.saturdayMeal.name}</h3>
                                        <img src={recipes.saturdayMeal.image_path} alt={recipes.saturdayMeal.name} />

                                        <IconButton aria-label="delete" size="large" color="warning" onClick={() => handleRemoveButton(recipes.saturdayMeal.id)}>
                                            <DeleteIcon fontSize="inherit" />
                                        </IconButton>

                                        {!recipes.saturdayMeal.is_saved ?
                                            <Button size="small" color="primary" variant="contained" onClick={() => handleSaveButton(recipes.saturdayMeal.id, 'true')}>Favorite</Button>
                                            :
                                            <Button size="small" color="primary" variant="contained" onClick={() => handleSaveButton(recipes.saturdayMeal.id, 'false')}>Unfavorite</Button>
                                        }
                                    </>
                                }
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper>
                                <h1>Sunday</h1>
                                {recipes.sundayMeal.name == '' ?
                                    <><br /><br /><p>Seem to be missing a meal. Go back and add one!</p></> :
                                    <>
                                        <h3>{recipes.sundayMeal.name}</h3>
                                        <img src={recipes.sundayMeal.image_path} alt={recipes.sundayMeal.name} />

                                        <IconButton aria-label="delete" size="large" color="warning" onClick={() => handleRemoveButton(recipes.sundayMeal.id)}>
                                            <DeleteIcon fontSize="inherit" />
                                        </IconButton>

                                        {!recipes.sundayMeal.is_saved ?
                                            <Button size="small" color="primary" variant="contained" onClick={() => handleSaveButton(recipes.sundayMeal.id, 'true')}>Favorite</Button>
                                            :
                                            <Button size="small" color="primary" variant="contained" onClick={() => handleSaveButton(recipes.sundayMeal.id, 'false')}>Unfavorite</Button>
                                        }
                                    </>
                                }
                            </Paper>
                        </Grid>
                    </Grid>
                    <br /><br />
                    <Button size="large" color="secondary" variant="contained" onClick={generateShoppingList} className='btn'>Generate Shopping List</Button>
                </div >
                :
                <></>
            }
        </>
    )
}

export default ViewMealPlanPage;