import { Paper, Grid, Typography, Box } from "@mui/material";

function PopulatedMealsGrid({ recipes, handleAddMeal }) {
    return (
        <>
            <Grid item xs={12}>
                <Typography variant="h5">Pick what you like!</Typography>
            </Grid>

            <Grid item xs={3} onClick={() => handleAddMeal(0)}>
                <Paper>
                    <Box p={2}>
                        <Typography variant="h6" gutterBottom>{recipes[0].title}</Typography>
                        <img src={recipes[0].image} alt={recipes[0].title} />
                    </Box>
                </Paper>
            </Grid>
            <Grid item xs={3} onClick={() => handleAddMeal(1)}>
                <Paper>
                    <Box p={2}>
                    <Typography variant="h6" gutterBottom>{recipes[1].title}</Typography>
                    <img src={recipes[1].image} alt={recipes[1].title} />
                    </Box>
                </Paper>
            </Grid>
            <Grid item xs={3} onClick={() => handleAddMeal(2)}>
                <Paper>
                    <Box p={2}>
                    <Typography variant="h6" gutterBottom>{recipes[2].title}</Typography>
                    <img src={recipes[2].image} alt={recipes[2].title} />
                    </Box>
                </Paper>
            </Grid>
            <Grid item xs={3} onClick={() => handleAddMeal(3)}>
                <Paper>
                    <Box p={2}>
                    <Typography variant="h6" gutterBottom>{recipes[3].title}</Typography>
                    <img src={recipes[3].image} alt={recipes[3].title} />
                    </Box>
                </Paper>
            </Grid>
        </>
    )
}

export default PopulatedMealsGrid;