import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

export default function MUILeftDrawer() {
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();

    const history = useHistory();
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => () => {
        setState({ ...state, [anchor]: open });
    };

    const handleClick = (page) => {
        if (page != '/logout') {
        history.push(page);
        } else {
        dispatch({ type: 'LOGOUT' })
        }
    }

    const LoggedInList = (anchor) => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem button onClick={() => handleClick('/home')} key='Recipe Generator'>
                    <ListItemText primary='Recipe Generator' />
                </ListItem>
                <Divider />
                <ListItem button onClick={() => handleClick('/pickmeals')} key='Pick Your Meals'>
                    <ListItemText primary='Pick Your Meals' />
                </ListItem>
                <Divider />
                <ListItem button onClick={() => handleClick('/viewmeals')} key='View Your Meals'>
                    <ListItemText primary='View Your Meals' />
                </ListItem>
                <Divider />
                <ListItem button onClick={() => handleClick('/shoppinglist')} key='Shopping List'>
                    <ListItemText primary='Shopping List' />
                </ListItem>
                <Divider />
                <ListItem button onClick={() => handleClick('/savedmeals')} key='Saved Meals'>
                    <ListItemText primary='Saved Meals' />
                </ListItem>
                <Divider />
                <ListItem button onClick={() => handleClick('/about')} key='About'>
                    <ListItemText primary='About' />
                </ListItem>
                <Divider />
                <ListItem button onClick={() => handleClick('/logout')} key='Log Out'>
                    <ListItemText primary='Log Out' />
                </ListItem>
                <Divider />
            </List>
        </Box>
    );

    const LoggedOutList = (anchor) => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem button onClick={() => handleClick('/home')} key='Recipe Generator'>
                    <ListItemText primary='Recipe Generator' />
                </ListItem>
                <Divider />
                <ListItem button onClick={() => handleClick('/about')} key='About'>
                    <ListItemText primary='About' />
                </ListItem>
                <Divider />
                <ListItem button onClick={() => handleClick('/login')} key='Login'>
                    <ListItemText primary='Login' />
                </ListItem>
                <Divider />
                <ListItem button onClick={() => handleClick('/registration')} key='Register'>
                    <ListItemText primary='Register' />
                </ListItem>
                <Divider />
            </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={toggleDrawer("left", true)}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer
                    anchor="left"
                    open={state["left"]}
                    onClose={toggleDrawer("left", false)}
                >
                    {user.id && (LoggedInList("left"))}
                    {!user.id && (LoggedOutList("left"))}

                </Drawer>
            </React.Fragment>

        </div>
    );
}