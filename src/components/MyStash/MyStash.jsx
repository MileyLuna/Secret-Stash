import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MyStashItem from '../MyStashItem/MyStashItem';

//MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useHistory } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';



function MyStash() {

    //MUI STYLING
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    // this component doesn't do much to start, just renders some user reducer info to the DOM
    const dispatch = useDispatch();
    const history = useHistory();

    const recipes = useSelector((store) => store.recipe.recipeReducer);

    useEffect(() => {
        dispatch({ type: 'FETCH_USER_RECIPE' })
    }, []);

    const addNewClick = () => {
        console.log('click add recipe');
        history.push('/new');
    }

    return (

        <Box sx={{ flexGrow: 1 }}>
            {/* action box to change view to add a new recipe */}
            <Grid container spacing={3}>
            
            <Grid item xs onClick={addNewClick}>
                <Item>
                    <p>ADD A RECIPE</p>
                </Item>
            </Grid>
<br></br>
            {/* show all recipe by user */}
                {recipes.map((recipe, i) => {
                    return (
                        <MyStashItem key={i} recipe={recipe}/>
                    )
                })}
            </Grid>
        </Box>
    );
}

// this allows us to use <App /> in index.js
export default MyStash;