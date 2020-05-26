import React from 'react';
import RecipeCard from './Card';


function CardContent(props) {

  return (
    <div>
      {props.recipes.map((recipe) => (
      <RecipeCard
       key={recipe.recipe_id}
       recipeData={recipe}
       />
      ))}
    </div>
  )
}

export default CardContent;