import { Paper, Grid } from "@mui/material";

function PopulatedMealsGrid({ recipes, handleAddMeal }) {
    return (
        <>
            <Grid item xs={12}>
                <h3>Pick what you like!</h3>
            </Grid>

            <Grid item xs={3} onClick={() => handleAddMeal(0)} className="meal1">
                <Paper>
                    {recipes[0].title}
                    <img src={recipes[0].image} alt={recipes[0].title} />
                </Paper>
            </Grid>
            <Grid item xs={3} onClick={() => handleAddMeal(1)} className="meal2">
                <Paper>
                    {recipes[1].title}
                    <img src={recipes[1].image} alt={recipes[1].title} />
                </Paper>
            </Grid>
            <Grid item xs={3} onClick={() => handleAddMeal(2)} className="meal3">
                <Paper>
                    {recipes[2].title}
                    <img src={recipes[2].image} alt={recipes[2].title} />
                </Paper>
            </Grid>
            <Grid item xs={3} onClick={() => handleAddMeal(3)} className="meal4">
                <Paper>
                    {recipes[3].title}
                    <img src={recipes[3].image} alt={recipes[3].title} />
                </Paper>
            </Grid>
        </>
    )
}

export default PopulatedMealsGrid;