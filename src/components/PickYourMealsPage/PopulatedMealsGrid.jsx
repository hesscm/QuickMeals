function PopulatedMealsGrid({recipes, handleAddMeal}) {
    return(
        <>            <div className="populatedMeals">
            <h3>Pick what you like!</h3>
            <div className="grid-containerB">
                <div onClick={() => handleAddMeal(0)} className="meal1">
                    {recipes[0].title}
                    <img src={recipes[0].image} alt={recipes[0].title} />
                </div>
                <div onClick={() => handleAddMeal(1)} className="meal2">
                    {recipes[1].title}
                    <img src={recipes[1].image} alt={recipes[1].title} />
                </div>
                <div onClick={() => handleAddMeal(2)} className="meal3">
                    {recipes[2].title}
                    <img src={recipes[2].image} alt={recipes[2].title} />
                </div>
                <div onClick={() => handleAddMeal(3)} className="meal4">
                    {recipes[3].title}
                    <img src={recipes[3].image} alt={recipes[3].title} />
                </div>
            </div>
        </div></>
    )
}

export default PopulatedMealsGrid;