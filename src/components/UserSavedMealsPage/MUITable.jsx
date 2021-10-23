import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography }from '@mui/material/';
import useReduxStore from '../../hooks/useReduxStore';
import MUIDialogBox from './MUIDialogBoxSavedPage'
import moment from 'moment';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';

export default function MUITable() {
    const dispatch = useDispatch();
    const recipes = useReduxStore().recipes.userSavedMeals;

    //take database timestamp and make it human-friendly
    const formatTime = (time) => {
        time = moment().format("MMM Do YY");
        return time;
    }

    //remove the meal from the database/table
    const handleRemoveButton = (id) => {
        dispatch({ type: 'DELETE_USER_SAVED_MEAL', payload: id });
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell><Typography variant="h6">Name</Typography></TableCell>
                        <TableCell align="center"><Typography variant="h6">Description</Typography></TableCell>
                        <TableCell align="center"><Typography variant="h6">Ingredients</Typography></TableCell>
                        <TableCell align="center"><Typography variant="h6">Instructions</Typography></TableCell>
                        <TableCell align="center"><Typography variant="h6">Date Saved</Typography></TableCell>
                        <TableCell align="center"><Typography variant="h6">Action</Typography></TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {recipes.map((recipe) => (

                        <TableRow
                            key={recipe.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <Typography variant="body1">
                                {recipe.name}
                                </Typography>
                            </TableCell>
                            <TableCell align="center">
                                <MUIDialogBox
                                    title={'Description'}
                                    details={recipe.description} />
                            </TableCell>
                            <TableCell align="center">
                                <MUIDialogBox
                                    title={'Ingredients'}
                                    details={recipe.ingredients_string} />
                            </TableCell>
                            <TableCell align="center">
                                <MUIDialogBox
                                    title={'Instructions'}
                                    details={recipe.instructions} />
                            </TableCell>
                            <TableCell align="center">
                                {/* format the returned database time to something nicer */}
                                {formatTime(recipe.date)}
                            </TableCell>
                            <TableCell align="center">
                                {/* delete the meal */}
                                <IconButton aria-label="delete" size="large" color="warning" onClick={() => handleRemoveButton(recipe.id)}>
                                    <DeleteIcon fontSize="inherit" />
                                </IconButton>
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}