import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './ShoppingListPage.css'
import { Typography, Divider } from '@mui/material';
import MUITableShoppingList from './MUITableShoppingList';

//under construction...I am probably turning this into just 1 table
function ShoppingListPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'GET_USER_MEALS' });
    }, []);

    return (
        <>
            <Typography variant="h2" gutterBottom>Your Shopping List</Typography>
            <Divider />
            <br />
            <div className="ShoppingListPage">
                <MUITableShoppingList />
            </div>
        </>
    )
}

export default ShoppingListPage;