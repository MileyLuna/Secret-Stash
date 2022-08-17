import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//component
import UserPageItem from '../UserPageItem/UserPageItem';

//MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function UserPage() {

  const dispatch = useDispatch();

  const recipes = useSelector((store) => store.recipe.recipeReducer);

  //on page load fetch all from recipe table in database
  useEffect(() => {
    dispatch({ type: 'FETCH_RECIPE' });
  }, []);

  return (
    <div className='main'>
      <Box >

        <Grid  container spacing={10}>
          {recipes.map((recipe) => {
            return (
                <UserPageItem key={recipe.id} recipe={recipe} />
            )
          })}
        </Grid>
      </Box>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
