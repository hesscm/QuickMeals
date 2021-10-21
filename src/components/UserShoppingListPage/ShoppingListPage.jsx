import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DayOfWeekList from './DayOfWeekList';
import './ShoppingListPage.css'
import WeeklyShoppingList from './WeeklyShoppingList';
import { Typography } from '@mui/material';


//under construction...I am probably turning this into just 1 table
function ShoppingListPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'GET_USER_MEALS' });        
    }, []);

    return (
        <>
            <Typography variant="h2" gutterBottom>Your Shopping List</Typography>
            {/* list for a specific day of the week */}
            <DayOfWeekList />
            {/* list for the whole week */}
            <WeeklyShoppingList />
    
        </>
    )
}

export default ShoppingListPage;