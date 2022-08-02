import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const dispatch = useDispatch();
  
  const recipes = useSelector((store) => store.recipe);

  useEffect(() => {
    dispatch({ type: 'FETCH_RECIPE' });
  },[]);

  return (
    <div className="container">
      {recipes.map((recipe) => {
        return(
          <div key={recipe.id}>
          <img src={recipe.poster}/>
          <p>{recipe.title}</p>
        </div>
        )
      })}

    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
