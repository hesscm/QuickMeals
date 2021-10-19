import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import { useHistory } from 'react-router-dom';
import { Button, Paper, Grid } from '@mui/material';

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
            case 'Monday':
                props.setMondayMeal({ title: '' })
                break;
            case 'Tuesday':
                props.setTuesdayMeal({ title: '' })
                break;
            case 'Wednesday':
                props.setWednesdayMeal({ title: '' })
                break;
            case 'Thursday':
                props.setThursdayMeal({ title: '' })
                break;
            case 'Friday':
                props.setFridayMeal({ title: '' })
                break;
            case 'Saturday':
                props.setSaturdayMeal({ title: '' })
                break;
            case 'Sunday':
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
                <h1>Monday</h1>
                {props.mondayMeal.title == '' ?
                    <><br /><br /><p>Click a recipe and choose a day!</p></> :
                    <>
                        <h3>{props.mondayMeal.title}</h3>
                        <img src={props.mondayMeal.image} alt={props.mondayMeal.title} />
                        <Button size="large" color="primary" variant="contained" onClick={() => handleRemoveButton('Monday')}>Remove</Button>
                    </>
                }
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>
                <h1>Tuesday</h1>
                {props.tuesdayMeal.title == '' ?
                    <><br /><br /><p>Click a recipe and choose a day!</p></> :
                    <>
                        <h3>{props.tuesdayMeal.title}</h3>
                        <img src={props.tuesdayMeal.image} alt={props.tuesdayMeal.title} />
                        <Button size="large" color="primary" variant="contained" onClick={() => handleRemoveButton('Tuesday')}>Remove</Button>
                    </>
                }
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>
                <h1>Wednesday</h1>
                {props.wednesdayMeal.title == '' ?
                    <><br /><br /><p>Click a recipe and choose a day!</p></> :
                    <>
                        <h3>{props.wednesdayMeal.title}</h3>
                        <img src={props.wednesdayMeal.image} alt={props.wednesdayMeal.title} />
                        <Button size="large" color="primary" variant="contained" onClick={() => handleRemoveButton('Wednesday')}>Remove</Button>
                    </>
                }
              </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>
                <h1>Thursday</h1>
                {props.thursdayMeal.title == '' ?
                    <><br /><br /><p>Click a recipe and choose a day!</p></> :
                    <>
                        <h3>{props.thursdayMeal.title}</h3>
                        <img src={props.thursdayMeal.image} alt={props.thursdayMeal.title} />
                        <Button size="large" color="primary" variant="contained" onClick={() => handleRemoveButton('Thursday')}>Remove</Button>

                    </>
                }
              </Paper>
            </Grid >
            <Grid item xs={4}>
                <Paper>
                <h1>Friday</h1>
                {props.fridayMeal.title == '' ?
                    <><br /><br /><p>Click a recipe and choose a day!</p></> :
                    <>
                        <h3>{props.fridayMeal.title}</h3>
                        <img src={props.fridayMeal.image} alt={props.fridayMeal.title} />
                        <Button size="large" color="primary" variant="contained" onClick={() => handleRemoveButton('Friday')}>Remove</Button>

                    </>
                }
        </Paper>
            </Grid >
            <Grid item xs={4}>
                <Paper>
                <h1>Saturday</h1>
                {props.saturdayMeal.title == '' ?
                    <><br /><br /><p>Click a recipe and choose a day!</p></> :
                    <>
                        <h3>{props.saturdayMeal.title}</h3>
                        <img src={props.saturdayMeal.image} alt={props.saturdayMeal.title} />
                        <Button size="large" color="primary" variant="contained" onClick={() => handleRemoveButton('Saturday')}>Remove</Button>

                    </>
                }
        </Paper>
            </Grid >
            <Grid item xs={4}>
                <Paper>
                <h1>Sunday</h1>
                {props.sundayMeal.title == '' ?
                    <><br /><br /><p>Click a recipe and choose a day!</p></> :
                    <>
                        <h3>{props.sundayMeal.title}</h3>
                        <img src={props.sundayMeal.image} alt={props.sundayMeal.title} />
                        <Button size="large" color="primary" variant="contained" onClick={() => handleRemoveButton('Sunday')}>Remove</Button>

                    </>
                }
        </Paper>
            </Grid >
            <Grid item xs={12}>
            <Button size="large" color="primary" variant="contained" onClick={handleButtonClick}>Let's Eat!</Button>
            </Grid>
        </>

    )
}

export default DaysOfWeekGrid;