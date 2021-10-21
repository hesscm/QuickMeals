import { Paper, Grid, Typography, Box, Button, ButtonGroup, Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material";
import { useState, useRef } from "react";
const DOMPurify = require('dompurify')(window);
import AddMealDialog from "./AddMealDialog";

// added MUI, so this is under construction. It works, but I need to refactor this so I am using the MUIDialogBox component
function PopulatedMealsGrid({ recipes, handleAddMeal, parseIngredients, parseInstructions }) {

    /* BEGIN MATERIAL-UI CODE FROM https://mui.com/components/dialogs/ */
    const [open0, setOpen0] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    const [scroll, setScroll] = useState('paper');

    const handleClickOpen = (item) => () => {
        switch (item) {
            case 0:
                setOpen0(true);
                break;
            case 1:
                setOpen1(true);
                break;
            case 2:
                setOpen2(true);
                break;
            case 3:
                setOpen3(true);
                break;
            default:
                break;
        };
    }

        const handleClose = () => {
            setOpen0(false);
            setOpen1(false);
            setOpen2(false);
            setOpen3(false);
        };

        const descriptionElementRef = useRef(null);
        /* END MATERIAL-UI CODE FROM https://mui.com/components/dialogs/ */
        return (
            <>
            {/* 4 meals are populated from the API. We use MUI organize them. More comments to come */}
                <Grid item xs={12}>
                    <Typography variant="h5">Pick what you like!</Typography>
                </Grid>

                <Grid item xs={3} >
                    <Paper>
                        <Box p={2}>
                            <Typography variant="h6" gutterBottom>{recipes[0].title}</Typography>
                            <img src={recipes[0].image} alt={recipes[0].title} />
                            <ButtonGroup>
                            <AddMealDialog thisMeal={0} handleAddMeal={handleAddMeal}/>
                            <Button variant="contained" onClick={handleClickOpen(0)}>Details</Button>
                            </ButtonGroup>
                            <Dialog
                                open={open0}
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
                                                    DOMPurify.sanitize('<h2>Ingredients</h2>' + parseIngredients(0)[0] + '<hr><h2>Instructions</h2>' + parseInstructions(0))
                                            }} />
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Ok</Button>
                                </DialogActions>
                            </Dialog>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={3} >
                    <Paper>
                        <Box p={2}>
                            <Typography variant="h6" gutterBottom>{recipes[1].title}</Typography>
                            <img onClick={() => handleAddMeal(1)} src={recipes[1].image} alt={recipes[1].title} />
                            <ButtonGroup>
                                <AddMealDialog thisMeal={1} handleAddMeal={handleAddMeal} />
                                <Button variant="contained" onClick={handleClickOpen(1)}>Details</Button>
                            </ButtonGroup>                            <Dialog
                                open={open1}
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
                                                    DOMPurify.sanitize('<h2>Ingredients</h2>' + parseIngredients(1)[0] + '<hr><h2>Instructions</h2>' + parseInstructions(1))
                                            }} />
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Ok</Button>
                                </DialogActions>
                            </Dialog>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={3} >
                    <Paper>
                        <Box p={2}>
                            <Typography variant="h6" gutterBottom>{recipes[2].title}</Typography>
                            <img onClick={() => handleAddMeal(2)} src={recipes[2].image} alt={recipes[2].title} />
                            <ButtonGroup>
                                <AddMealDialog thisMeal={2} handleAddMeal={handleAddMeal} />
                                <Button variant="contained" onClick={handleClickOpen(2)}>Details</Button>
                            </ButtonGroup>                            <Dialog
                                open={open2}
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
                                                    DOMPurify.sanitize('<h2>Ingredients</h2>' + parseIngredients(2)[0] + '<hr><h2>Instructions</h2>' + parseInstructions(2))
                                            }} />
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Ok</Button>
                                </DialogActions>
                            </Dialog>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={3} >
                    <Paper>
                        <Box p={2}>
                            <Typography variant="h6" gutterBottom>{recipes[3].title}</Typography>
                            <img onClick={() => handleAddMeal(3)} src={recipes[3].image} alt={recipes[3].title} />
                            <ButtonGroup>
                                <AddMealDialog thisMeal={3} handleAddMeal={handleAddMeal} />
                                <Button variant="contained" onClick={handleClickOpen(3)}>Details</Button>
                            </ButtonGroup>                            <Dialog
                                open={open3}
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
                                                    DOMPurify.sanitize('<h2>Ingredients</h2>' + parseIngredients(3)[0] + '<hr><h2>Instructions</h2>' + parseInstructions(3))
                                            }} />
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Ok</Button>
                                </DialogActions>
                            </Dialog>
                        </Box>
                    </Paper>
                </Grid>

            </>
        )
    }
    

    export default PopulatedMealsGrid;