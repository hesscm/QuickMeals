import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import { useHistory } from 'react-router-dom';
import { Button, ButtonGroup, Paper, Grid, Card, Typography, Box, Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import { useState, useRef } from "react";
const DOMPurify = require('dompurify')(window);
import MUIDialogBox from './MUIDialogBox';

function DaysOfWeekGrid(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useReduxStore().user;

    const handleButtonClick = () => {
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
        history.push('/viewmeals')
    }

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
            {/* section 1 */}

            <Grid item xs={3}>
                <Paper>
                    <Card>
                        <Box p={2}>
                            <Typography variant="h4" gutterBottom>Monday</Typography>
                            {props.mondayMeal.title == '' ?
                                <><br /><Typography variant="body1" gutterBottom>Click a recipe and choose a day!</Typography></> :
                                <>
                                    <Typography variant="h6">{props.mondayMeal.title}</Typography>
                                    <img src={props.mondayMeal.image} alt={props.mondayMeal.title} />
                                    <MUIDialogBox
                                        dayID={0}
                                        meal={props.mondayMeal}
                                        parseIngredients={props.parseIngredients}
                                        parseInstructions={props.parseInstructions}
                                        handleRemoveButton={handleRemoveButton}
                                    />
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
                                    <MUIDialogBox
                                        dayID={1}
                                        meal={props.tuesdayMeal}
                                        parseIngredients={props.parseIngredients}
                                        parseInstructions={props.parseInstructions}
                                        handleRemoveButton={handleRemoveButton}
                                    />
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
                                    <MUIDialogBox
                                        dayID={2}
                                        meal={props.wednesdayMeal}
                                        parseIngredients={props.parseIngredients}
                                        parseInstructions={props.parseInstructions}
                                        handleRemoveButton={handleRemoveButton}
                                    />
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
                                    <MUIDialogBox
                                        dayID={3}
                                        meal={props.thursdayMeal}
                                        parseIngredients={props.parseIngredients}
                                        parseInstructions={props.parseInstructions}
                                        handleRemoveButton={handleRemoveButton}
                                    />
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
                                    <MUIDialogBox
                                        dayID={4}
                                        meal={props.fridayMeal}
                                        parseIngredients={props.parseIngredients}
                                        parseInstructions={props.parseInstructions}
                                        handleRemoveButton={handleRemoveButton}
                                    />
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
                                    <MUIDialogBox
                                        dayID={5}
                                        meal={props.saturdayMeal}
                                        parseIngredients={props.parseIngredients}
                                        parseInstructions={props.parseInstructions}
                                        handleRemoveButton={handleRemoveButton}
                                    />
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
                                    <MUIDialogBox
                                        dayID={6}
                                        meal={props.sundayMeal}
                                        parseIngredients={props.parseIngredients}
                                        parseInstructions={props.parseInstructions}
                                        handleRemoveButton={handleRemoveButton}
                                    />
                                </>
                            }
                        </Box>
                    </Card>
                </Paper>
            </Grid >
            <Grid item xs={12}>
                <Button size="large" color="primary" variant="contained" onClick={handleButtonClick}>Let's Eat!</Button>
            </Grid>
        </>

    )
}

export default DaysOfWeekGrid;