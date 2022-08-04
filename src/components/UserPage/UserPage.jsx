import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import UserPageItem from '../UserPageItem/UserPageItem';

//MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'; 

function UserPage() {

  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const dispatch = useDispatch();

  const recipes = useSelector((store) => store.recipe.recipeReducer);

  useEffect(() => {
    dispatch({ type: 'FETCH_RECIPE' });
  }, []);

  return (

    <Box sx={{ flexGrow: 1 }}>

      <Grid container spacing={3}>
        {recipes.map((recipe) => {
          return (
            <UserPageItem key={recipe.id} recipe={recipe}/>
          )
        })}
      </Grid>
    </Box>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
