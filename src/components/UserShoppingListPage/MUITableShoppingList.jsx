import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography } from '@mui/material/';
import useReduxStore from '../../hooks/useReduxStore';
import { useDispatch } from 'react-redux';
import MUISelect from './MUISelect';

export default function MUITableShoppingList() {
    const dispatch = useDispatch();
    const recipes = useReduxStore().recipes;

    const [list, setList] = React.useState(recipes.mondayMeal);

    // what day of the week is it? taken from a select form.
    const handleDayOfWeek = (day) => {
        switch (day) {
            case 'Monday':
                setList(recipes.mondayMeal)
                break;
            case 'Tuesday':
                setList(recipes.tuesdayMeal)
                break;
            case 'Wednesday':
                setList(recipes.wednesdayMeal)
                break;
            case 'Thursday':
                setList(recipes.thursdayMeal)
                break;
            case 'Friday':
                setList(recipes.fridayMeal)
                break;
            case 'Saturday':
                setList(recipes.saturdayMeal)
                break;
            case 'Sunday':
                setList(recipes.sundayMeal)
                break;
            case 'Total':
                setList(recipes.totalUserIngredients)
                break;
            default:
                break;
        }
        // something went very, very wrong...
        if (list.id == -1) {
            console.log('oh no...what happened in the shopping list select?');
        }
        console.log(list);
    }

    return (
        <>
            <TableContainer component={Paper}>
                <MUISelect handleDayOfWeek={handleDayOfWeek}/>
                <hr />
                {list.id ?
                    <>
                        <Typography variant="h5" gutterBottom>{list.day}</Typography>
                        <Typography sx={{padding: '10px'}} variant="h6" gutterBottom>{list.name}</Typography>
                    </>
                    : 
                    <>
                        <Typography variant="h5" gutterBottom>Week</Typography>
                        <Typography variant="h6" gutterBottom>Total Shopping List</Typography>
                    </>
                }
            <hr />

            <Table sx={{ minWidth: 300 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center"><Typography variant="h6">Ingredient</Typography></TableCell>
                        <TableCell align="center"><Typography variant="h6">Quantity</Typography></TableCell>
                        <TableCell align="center"><Typography variant="h6">Unit</Typography></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list.ingredients.map((ingredient, i) => (

                        <TableRow
                            key={i}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center" >
                                <Typography variant="body1">
                                    {ingredient.name}
                                </Typography>
                            </TableCell>
                            <TableCell align="center">
                                {ingredient.amount}
                            </TableCell>
                            <TableCell align="center">
                                {ingredient.unit}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    );
}