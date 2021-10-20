import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import DayOfWeekList from './DayOfWeekList';
import './ShoppingListPage.css'
import WeeklyShoppingList from './WeeklyShoppingList';
import { Typography } from '@mui/material';

function ShoppingListPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'GET_USER_MEALS' });        
    }, []);

    return (
        <>
            <Typography variant="h2" gutterBottom>Your Shopping List</Typography>
            <DayOfWeekList />
            <WeeklyShoppingList />
    
        </>
    )
}

export default ShoppingListPage;