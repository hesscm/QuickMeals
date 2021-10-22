import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, ButtonGroup, Paper, Grid, Card, Typography, Box } from '@mui/material';
import MUIDialogBox from './ViewDetailsDialog';
import useReduxStore from '../../hooks/useReduxStore';

function DaysOfWeekGrid(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const recipes = useReduxStore().recipes;


    //send the meals to the server
    const handleButtonClick = () => {
        //doesn't do anything yet. shh....
        confirm('Are you sure you want to submit this?');

        console.log('clicked');
        const action = [
            props.mondayMeal,
            props.tuesdayMeal,
            props.wednesdayMeal,
            props.thursdayMeal,
            props.fridayMeal,
            props.saturdayMeal,
            props.sundayMeal,
        ]
        dispatch({ type: 'POST_MEALS', payload: action })
        history.push('/viewmeals') //go to next page
    }

    //take an input of a day of the week and reset that local state
    const handleRemoveButton = (dayOfWeek) => {
        switch (dayOfWeek) {
            case 0:
                props.setMondayMeal({ title: '' })
                break;
            case 1:
                props.setTuesdayMeal({ title: '' })
                break;
            case 2:
                props.setWednesdayMeal({ title: '' })
                break;
            case 3:
                props.setThursdayMeal({ title: '' })
                break;
            case 4:
                props.setFridayMeal({ title: '' })
                break;
            case 5:
                props.setSaturdayMeal({ title: '' })
                break;
            case 6:
                props.setSundayMeal({ title: '' })
                break;
            default:
                break;
        }
    }

    const handleRemoveDBButton = (id) => {
        dispatch({ type: 'DELETE_USER_MEAL', payload: id });

    }

    return (
        <>
            {/* these are the individual cards for the day of the week */}
            <Grid item xs={3}>
                <Paper>
                    <Card>
                        <Box p={2}>
                            <Typography variant="h4" gutterBottom>Monday</Typography>
                            {recipes.mondayMeal.id != -1 ?
                                <>
                                    <Typography variant="h6">{recipes.mondayMeal.name}</Typography>
                                    <img src={recipes.mondayMeal.image_path} alt={recipes.mondayMeal.name} />
                                    <ButtonGroup>
                                        {/* below is our MUI dialog component to show a meals ingredients and instructions */}
                                        <MUIDialogBox
                                            meal={recipes.mondayMeal}
                                            ingredientsString={recipes.mondayMeal.ingredients_string}
                                        />
                                        <Button color="warning" variant="contained" onClick={() => handleRemoveDBButton(recipes.mondayMeal.id)}>Remove</Button>
                                    </ButtonGroup>
                                </> :
                                <>{props.mondayMeal.title == '' ?
                                    <><br /><Typography variant="body1" gutterBottom>Click a recipe and choose a day!</Typography></> :
                                    <>
                                        <h3>{props.mondayMeal.title}</h3>
                                        <img src={props.mondayMeal.image} alt={props.mondayMeal.title} />
                                        <ButtonGroup>
                                            <MUIDialogBox
                                                meal={props.mondayMeal}
                                                ingredientsString={props.mondayMeal.ingredientsString}
                                            />
                                            <Button color="warning" variant="contained" onClick={() => handleRemoveButton(0)}>Remove</Button>
                                        </ButtonGroup>
                                    </>
                                }</>
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
                            {recipes.tuesdayMeal.id != -1 ?
                                <>
                                    <Typography variant="h6">{recipes.tuesdayMeal.name}</Typography>
                                    <img src={recipes.tuesdayMeal.image_path} alt={recipes.tuesdayMeal.name} />
                                    <ButtonGroup>
                                        {/* below is our MUI dialog component to show a meals ingredients and instructions */}
                                        <MUIDialogBox
                                            meal={recipes.tuesdayMeal}
                                            ingredientsString={recipes.tuesdayMeal.ingredients_string}
                                        />
                                        <Button color="warning" variant="contained" onClick={() => handleRemoveDBButton(recipes.tuesdayMeal.id)}>Remove</Button>
                                    </ButtonGroup>
                                </> :
                                <>{props.tuesdayMeal.title == '' ?
                                <><br /><Typography variant="body1" gutterBottom>Click a recipe and choose a day!</Typography></> :
                                <>
                                    <h3>{props.tuesdayMeal.title}</h3>
                                    <img src={props.tuesdayMeal.image} alt={props.tuesdayMeal.title} />
                                    <ButtonGroup>
                                        <MUIDialogBox
                                            meal={props.tuesdayMeal}
                                            ingredientsString={props.tuesdayMeal.ingredientsString}
                                        />
                                        <Button color="warning" variant="contained" onClick={() => handleRemoveButton(1)}>Remove</Button>
                                        </ButtonGroup>
                                    </>
                                }</>
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
                            {recipes.wednesdayMeal.id != -1 ?
                                <>
                                    <Typography variant="h6">{recipes.wednesdayMeal.name}</Typography>
                                    <img src={recipes.wednesdayMeal.image_path} alt={recipes.wednesdayMeal.name} />
                                    <ButtonGroup>
                                        {/* below is our MUI dialog component to show a meals ingredients and instructions */}
                                        <MUIDialogBox
                                            meal={recipes.wednesdayMeal}
                                            ingredientsString={recipes.wednesdayMeal.ingredients_string}
                                        />
                                        <Button color="warning" variant="contained" onClick={() => handleRemoveDBButton(recipes.wednesdayMeal.id)}>Remove</Button>
                                    </ButtonGroup>
                                </> :
                                <>{props.wednesdayMeal.title == '' ?
                                <><br /><Typography variant="body1" gutterBottom>Click a recipe and choose a day!</Typography></> :
                                <>
                                    <h3>{props.wednesdayMeal.title}</h3>
                                    <img src={props.wednesdayMeal.image} alt={props.wednesdayMeal.title} />
                                    <ButtonGroup>
                                        <MUIDialogBox
                                            meal={props.wednesdayMeal}
                                            ingredientsString={props.wednesdayMeal.ingredientsString}
                                        />
                                        <Button color="warning" variant="contained" onClick={() => handleRemoveButton(2)}>Remove</Button>
                                          </ButtonGroup>
                                    </>
                                }</>
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
                            {recipes.thursdayMeal.id != -1 ?
                                <>
                                    <Typography variant="h6">{recipes.thursdayMeal.name}</Typography>
                                    <img src={recipes.thursdayMeal.image_path} alt={recipes.thursdayMeal.name} />
                                    <ButtonGroup>
                                        {/* below is our MUI dialog component to show a meals ingredients and instructions */}
                                        <MUIDialogBox
                                            meal={recipes.thursdayMeal}
                                            ingredientsString={recipes.thursdayMeal.ingredients_string}
                                        />
                                        <Button color="warning" variant="contained" onClick={() => handleRemoveDBButton(recipes.thursdayMeal.id)}>Remove</Button>
                                    </ButtonGroup>
                                </> :
                                <>{props.thursdayMeal.title == '' ?
                                <><br /><Typography variant="body1" gutterBottom>Click a recipe and choose a day!</Typography></> :
                                <>
                                    <h3>{props.thursdayMeal.title}</h3>
                                    <img src={props.thursdayMeal.image} alt={props.thursdayMeal.title} />
                                    <ButtonGroup>
                                        <MUIDialogBox
                                            meal={props.thursdayMeal}
                                            ingredientsString={props.thursdayMeal.ingredientsString}
                                        />
                                        <Button color="warning" variant="contained" onClick={() => handleRemoveButton(3)}>Remove</Button>
                                               </ButtonGroup>
                                    </>
                                }</>
                            }
                        </Box>
                    </Card>
                </Paper>
            </Grid >


            <Grid item xs={4}>
                <Paper>
                    <Card>
                        <Box p={2}>
                            <Typography variant="h4" gutterBottom>Friday</Typography>
                            {recipes.fridayMeal.id != -1 ?
                                <>
                                    <Typography variant="h6">{recipes.fridayMeal.name}</Typography>
                                    <img src={recipes.fridayMeal.image_path} alt={recipes.fridayMeal.name} />
                                    <ButtonGroup>
                                        {/* below is our MUI dialog component to show a meals ingredients and instructions */}
                                        <MUIDialogBox
                                            meal={recipes.fridayMeal}
                                            ingredientsString={recipes.fridayMeal.ingredients_string}
                                        />
                                        <Button color="warning" variant="contained" onClick={() => handleRemoveDBButton(recipes.fridayMeal.id)}>Remove</Button>
                                    </ButtonGroup>
                                </> :
                                <>{props.fridayMeal.title == '' ?
                                <><br /><Typography variant="body1" gutterBottom>Click a recipe and choose a day!</Typography></> :
                                <>
                                    <h3>{props.fridayMeal.title}</h3>
                                    <img src={props.fridayMeal.image} alt={props.fridayMeal.title} />
                                    <ButtonGroup>
                                        <MUIDialogBox
                                            meal={props.fridayMeal}
                                            ingredientsString={props.fridayMeal.ingredientsString}
                                        />
                                        <Button color="warning" variant="contained" onClick={() => handleRemoveButton(4)}>Remove</Button>
                                    </ButtonGroup>
                                </>
                            }</>
                            }
                    </Box>
                    </Card>
                </Paper>
            </Grid >


            <Grid item xs={4}>
                <Paper>
                    <Card>
                        <Box p={2}>
                            <Typography variant="h4" gutterBottom>Saturday</Typography>
                            {recipes.saturdayMeal.id != -1 ?
                                <>
                                    <Typography variant="h6">{recipes.saturdayMeal.name}</Typography>
                                    <img src={recipes.saturdayMeal.image_path} alt={recipes.saturdayMeal.name} />
                                    <ButtonGroup>
                                        {/* below is our MUI dialog component to show a meals ingredients and instructions */}
                                        <MUIDialogBox
                                            meal={recipes.saturdayMeal}
                                            ingredientsString={recipes.saturdayMeal.ingredients_string}
                                        />
                                        <Button color="warning" variant="contained" onClick={() => handleRemoveDBButton(recipes.saturdayMeal.id)}>Remove</Button>
                                    </ButtonGroup>
                                </> :
                                <>{props.saturdayMeal.title == '' ?
                                <><br /><Typography variant="body1" gutterBottom>Click a recipe and choose a day!</Typography></> :
                                <>
                                    <h3>{props.saturdayMeal.title}</h3>
                                    <img src={props.saturdayMeal.image} alt={props.saturdayMeal.title} />
                                    <ButtonGroup>
                                        <MUIDialogBox
                                            meal={props.saturdayMeal}
                                            ingredientsString={props.saturdayMeal.ingredientsString}
                                        />
                                        <Button color="warning" variant="contained" onClick={() => handleRemoveButton(5)}>Remove</Button>
                                    </ButtonGroup>
                                </>
                            }</>
                            }
                    </Box>
                    </Card>
                </Paper>
            </Grid >


            <Grid item xs={4}>
                <Paper>
                    <Card>
                        <Box p={2}>
                            <Typography variant="h4" gutterBottom>Sunday</Typography>
                            {recipes.sundayMeal.id != -1 ?
                                <>
                                    <Typography variant="h6">{recipes.sundayMeal.name}</Typography>
                                    <img src={recipes.sundayMeal.image_path} alt={recipes.sundayMeal.name} />
                                    <ButtonGroup>
                                        {/* below is our MUI dialog component to show a meals ingredients and instructions */}
                                        <MUIDialogBox
                                            meal={recipes.sundayMeal}
                                            ingredientsString={recipes.sundayMeal.ingredients_string}
                                        />
                                        <Button color="warning" variant="contained" onClick={() => handleRemoveDBButton(recipes.sundayMeal.id)}>Remove</Button>
                                    </ButtonGroup>
                                </> :
                                <>{props.sundayMeal.title == '' ?
                                <><br /><Typography variant="body1" gutterBottom>Click a recipe and choose a day!</Typography></> :
                                <>
                                    <h3>{props.sundayMeal.title}</h3>
                                    <img src={props.sundayMeal.image} alt={props.sundayMeal.title} />
                                    <ButtonGroup>
                                        <MUIDialogBox
                                            meal={props.sundayMeal}
                                            ingredientsString={props.sundayMeal.ingredientsString}
                                        />
                                        <Button color="warning" variant="contained" onClick={() => handleRemoveButton(6)}>Remove</Button>
                                    </ButtonGroup>
                                </>
                            }</>
                            }
                    </Box>
                    </Card>
                </Paper>
            </Grid >

            {/* button to send chosen meals to the server */}
            <Grid item xs={12}>
                <Button size="large" color="primary" variant="contained" onClick={handleButtonClick}>Let's Eat!</Button>
            </Grid>
        </>

    )
}

export default DaysOfWeekGrid;