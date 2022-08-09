//MUI
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";



function MyStashRecipeDetail() {

    const dispatch = useDispatch();

    const newName = useSelector((store)=> store.edits.recipeEdit);
    const name = useSelector((store) => store.recipe.ingredientReducer);

    const handleSave = (event) => {
        event.preventDefault();
        console.log('this id id:', name[0].id)

        dispatch({
            type: 'RECIPE_DETAIL',
            payload: newName});
    }

    const handleChange = (event, property) => {
        dispatch({ type: 'CHANGE_RECIPE', 
        payload: {property: property, 
            value: event.target.value }
        })
    }

    


    return (
        <>

                <div>
                    <form onSubmit={handleSave}>
                        <Stack direction="row" spacing={3}>

                            <TextField
                                label={name[0].title}
                                id="recipe-name"
                                value={newName[0].title}
                                onChange={(event) => handleChange(event, 'title')}
                                size="small"
                                variant="standard"
                            />

                            {/* <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                onClick={handleSave}>
                                SAVE
                            </Button> */}
                        </Stack>
                    </form>

                    <br></br>
                    <img src={name[0].poster} />


                </div>

        </>
    )
}

export default MyStashRecipeDetail;