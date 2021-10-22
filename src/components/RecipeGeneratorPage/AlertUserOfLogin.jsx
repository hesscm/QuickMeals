import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useHistory } from 'react-router-dom';

export default function AlertUserOfLogin(props) {
    const [open, setOpen] = React.useState(true);
    const history = useHistory();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleCloseRegister = () => {
        setOpen(false);
        props.setShowLogin(false);
        history.push('/registration')
    };
    const handleClose = () => {
        setOpen(false);
        props.setShowLogin(false);
    };

    const handleCloseLogin = () => {
        setOpen(false);
        props.setShowLogin(false);
        history.push('/login')

    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Must Log In To Continue"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        You can definitely check out some recipes without logging in,
                        but if you want to save this recipe you will need to log in to your account.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseLogin}>Login</Button>
                    <Button onClick={handleCloseRegister} autoFocus>
                        Register
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}