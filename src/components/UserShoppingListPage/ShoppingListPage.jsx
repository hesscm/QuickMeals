import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './ShoppingListPage.css'
import { Typography } from '@mui/material';
import MUITableShoppingList from './MUITableShoppingList';

//under construction...I am probably turning this into just 1 table
function ShoppingListPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'GET_USER_MEALS' });        
    }, []);

    return (
        <div className="ShoppingListPage">
            <Typography variant="h2" gutterBottom>Your Shopping List</Typography>
            <MUITableShoppingList />
            {/* list for a specific day of the week */}
            {/* <DayOfWeekList /> */}
            {/* list for the whole week */}
            {/* <WeeklyShoppingList /> */}
    
        </div>
    )
}

export default ShoppingListPage;