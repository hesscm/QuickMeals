import { Button, ButtonGroup, Paper, Grid, Card, Typography, Box, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import { useState, useRef } from "react";
const DOMPurify = require('dompurify')(window);

function MUIDialogBox(props) {
    /* BEGIN MATERIAL-UI CODE FROM https://mui.com/components/dialogs/ */
    const [open, setOpen] = useState(false);

    const [scroll, setScroll] = useState('paper');

    const handleClickOpen = () => () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = useRef(null);

    return (
        <>
            <Button size="small" variant="contained" onClick={handleClickOpen()}>View</Button>
            {/* <Button size="small" color="primary" variant="contained" onClick={() => props.handleDescriptionView(props.meal.description)}>View</Button> */}

            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">{props.title}</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        <Typography
                            component="span"
                            variant="body1"
                            dangerouslySetInnerHTML={{
                                __html:
                                    DOMPurify.sanitize(props.details)
                            }} />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Ok</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default MUIDialogBox;