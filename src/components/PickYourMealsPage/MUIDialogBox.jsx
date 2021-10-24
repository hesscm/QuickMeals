import { Button, Typography, Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import { useState, useRef } from "react";
const DOMPurify = require('dompurify')(window);

/*Regarding DOMPurify/dangerouslySetInnerHTML...
 API returns some HTML.
 We will display the HTML as intended but also use DOMPurify for some added security against XSS(cross site scripting)
*/

/* BEGIN MATERIAL-UI CODE FROM https://mui.com/components/dialogs/ */
//Note: adjusted slightly

function MUIDialogBox(props) {
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
            {/* pop-up code from MUI */}
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
                            // here is what we are displaying
                            dangerouslySetInnerHTML={{
                                __html:
                                    DOMPurify.sanitize('<h2>Ingredients</h2>' + props.ingredientsString + '<hr><h2>Instructions</h2>' + props.meal.instructions)
                            }} />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="warning" variant="outlined" onClick={handleClose}>Ok</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default MUIDialogBox;