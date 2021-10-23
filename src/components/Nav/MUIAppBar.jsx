import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MUILeftDrawer from './MUILeftDrawer';

export default function MUIAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar  position="static">
                <Toolbar>
                    <MUILeftDrawer />
                    <Typography variant="h6" component="div" >
                        QuickMeals
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}