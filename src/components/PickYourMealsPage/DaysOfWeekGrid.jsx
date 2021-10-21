import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, ButtonGroup, Paper, Grid, Card, Typography, Box } from '@mui/material';
import MUIDialogBox from './ViewDetailsDialog';

function DaysOfWeekGrid(props) {
    const history = useHistory();
    const dispatch = useDispatch();

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

    return (
        <>
        {/* these are the individual cards for the day of the week */}
            <Grid item xs={3}>
                <Paper>
                    <Card>
                        <Box p={2}> 
                            <Typography variant="h4" gutterBottom>Monday</Typography>
                            {/* conditional rendering to see if there is a monday meal */}
                            {props.mondayMeal.title == '' ?
                            // if not...
                                <><br /><Typography variant="body1" gutterBottom>Click a recipe and choose a day!</Typography></> :
                                <>
                                {/* if so... */}
                                    <Typography variant="h6">{props.mondayMeal.title}</Typography>
                                    <img src={props.mondayMeal.image} alt={props.mondayMeal.title} />
                                    <ButtonGroup>
                                        {/* below is our MUI dialog component to show a meals ingredients and instructions */}
                                    <MUIDialogBox
                                        meal={props.mondayMeal}
                                        ingredientsString={props.mondayMeal.ingredientsString}
                                    />
                                    <Button color="warning" variant="contained" onClick={() => handleRemoveButton(0)}>Remove</Button>
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
                            {props.tuesdayMeal.title == '' ?
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
                            {props.wednesdayMeal.title == '' ?
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
                            {props.thursdayMeal.title == '' ?
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
                            {props.fridayMeal.title == '' ?
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
                            {props.saturdayMeal.title == '' ?
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
                            {props.sundayMeal.title == '' ?
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