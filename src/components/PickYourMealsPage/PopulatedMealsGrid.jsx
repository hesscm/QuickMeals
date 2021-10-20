import { Paper, Grid, Typography } from "@mui/material";

function PopulatedMealsGrid({ recipes, handleAddMeal }) {
    return (
        <>
            <Grid item xs={12}>
                <Typography variant="h5">Pick what you like!</Typography>
            </Grid>

            <Grid item xs={3} onClick={() => handleAddMeal(0)}>
                <Paper>
                    <Typography variant="h6">{recipes[0].title}</Typography>
                    <img src={recipes[0].image} alt={recipes[0].title} />
                </Paper>
            </Grid>
            <Grid item xs={3} onClick={() => handleAddMeal(1)}>
                <Paper>
                    <Typography variant="h6">{recipes[1].title}</Typography>
                    <img src={recipes[1].image} alt={recipes[1].title} />
                </Paper>
            </Grid>
            <Grid item xs={3} onClick={() => handleAddMeal(2)}>
                <Paper>
                    <Typography variant="h6">{recipes[2].title}</Typography>
                    <img src={recipes[2].image} alt={recipes[2].title} />
                </Paper>
            </Grid>
            <Grid item xs={3} onClick={() => handleAddMeal(3)}>
                <Paper>
                    <Typography variant="h6">{recipes[3].title}</Typography>
                    <img src={recipes[3].image} alt={recipes[3].title} />
                </Paper>
            </Grid>
        </>
    )
}

export default PopulatedMealsGrid;