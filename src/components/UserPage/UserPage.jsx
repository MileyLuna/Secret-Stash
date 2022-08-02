import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import UserPageList from '../UserPageList/UserPageList';

//MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function UserPage() {

  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const dispatch = useDispatch();

  const recipes = useSelector((store) => store.recipe);

  useEffect(() => {
    dispatch({ type: 'FETCH_RECIPE' });
  }, []);

  return (
    // <div className="container">
    //   {recipes.map((recipe) => {
    //     return(
    //       <div key={recipe.id}>
    //       <img src={recipe.poster}/>
    //       <p>{recipe.title}</p>
    //     </div>
    //     )
    //   })}

    // </div>

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        {recipes.map((recipe) => {
          return (
            <UserPageList key={recipe.id} recipe={recipe}/>
            // <Grid item xs key={recipe.id}>
            //   <Item>
            //   <p>{recipe.title}</p>
            //   <img src={recipe.poster} />
            //   </Item>

            // </Grid>
          )
        })}
      </Grid>
    </Box>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
