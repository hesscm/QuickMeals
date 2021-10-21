import { Button, ButtonGroup, Paper, Grid, Card, Typography, Box, Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material';
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

    return(
        <>
            <Button size="small" variant="contained" onClick={handleClickOpen()}>Details</Button>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
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
                                    DOMPurify.sanitize('<h2>Ingredients</h2>' + props.ingredientsString + '<hr><h2>Instructions</h2>' + props.meal.instructions)
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