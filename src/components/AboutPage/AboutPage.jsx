import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>Can’t decide what’s for dinner? QuickMeals is a random recipe picker/meal planner App with help from the spoonacular API. If you just want to quickly find a recipe without thinking, you can randomly search for recipes on the Recipe Generator page. If not, you can plan meals for one day or the entire week. You can then take that meal plan and generate a shopping list. If you find a recipe that you love, you can also save it to your favorites.</p>
      </div>
    </div>
  );
}

export default AboutPage;
