import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useReduxStore from '../../hooks/useReduxStore';

function AddMealDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [day, setDay] = React.useState('');
    const recipes = useReduxStore().recipes;

    //local states for holding each individual recipe
    const handleChange = (event) => {
        setDay(event.target.value || '');
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
    };
    const handleSubmit = (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
        console.log('in handleSubmit');
        console.log(props.thisMeal, day);
        switch (day) {
            case 'Monday':
                if (recipes.mondayMeal.day === 'Monday') {
                    alert('Please remove the current recipe first.');
                } else {
                    props.handleAddMeal(props.thisMeal, day)
                }
                break;
            case 'Tuesday':
                if (recipes.tuesdayMeal.day === 'Tuesday') {
                    alert('Please remove the current recipe first.');
                } else {
                    props.handleAddMeal(props.thisMeal, day)
                }
                break;
            case 'Wednesday':
                if (recipes.wednesdayMeal.day === 'Wednesday') {
                    alert('Please remove the current recipe first.');
                } else {
                    props.handleAddMeal(props.thisMeal, day)
                }
                break;
            case 'Thursday':
                if (recipes.thursdayMeal.day === 'Thursday') {
                    alert('Please remove the current recipe first.');
                } else {
                    props.handleAddMeal(props.thisMeal, day)
                }
                break;
            case 'Friday':
                if (recipes.fridayMeal.day === 'Friday') {
                    alert('Please remove the current recipe first.');
                } else {
                    props.handleAddMeal(props.thisMeal, day)
                }
                break;
            case 'Saturday':
                if (recipes.saturdayMeal.day === 'Saturday') {
                    alert('Please remove the current recipe first.');
                } else {
                    props.handleAddMeal(props.thisMeal, day)
                }
                break;
            case 'Sunday':
                if (recipes.sundayMeal.day === 'Sunday') {
                    alert('Please remove the current recipe first.');
                } else {
                    props.handleAddMeal(props.thisMeal, day)
                }
                break;
            default:
                break;
        }


        
    };

    return (
        <div>
            <Button variant="contained" color="success" onClick={handleClickOpen}>Add</Button>

            <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>Choose a Day</DialogTitle>
                <DialogContent>
                    <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-dialog-select-label">Day</InputLabel>
                            <Select
                                labelId="demo-dialog-select-label"
                                id="demo-dialog-select"
                                value={day}
                                onChange={handleChange}
                                input={<OutlinedInput label="Day" />}
                            >
                                <MenuItem value={'Monday'}>Monday</MenuItem>
                                <MenuItem value={'Tuesday'}>Tuesday</MenuItem>
                                <MenuItem value={'Wednesday'}>Wednesday</MenuItem>
                                <MenuItem value={'Thursday'}>Thursday</MenuItem>
                                <MenuItem value={'Friday'}>Friday</MenuItem>
                                <MenuItem value={'Saturday'}>Saturday</MenuItem>
                                <MenuItem value={'Sunday'}>Sunday</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Ok</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AddMealDialog;