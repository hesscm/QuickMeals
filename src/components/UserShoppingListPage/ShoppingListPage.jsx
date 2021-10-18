import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import DayOfWeekList from './DayOfWeekList';
import './ShoppingListPage.css'
import WeeklyShoppingList from './WeeklyShoppingList';

function ShoppingListPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'GET_USER_MEALS' });        
    }, []);

    return (
        <>
            <h1>Your Shopping List</h1>
            <DayOfWeekList />
            <WeeklyShoppingList />
    
        </>
    )
}

export default ShoppingListPage;