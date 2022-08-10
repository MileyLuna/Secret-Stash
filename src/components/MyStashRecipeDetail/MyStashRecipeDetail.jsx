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
    const names = useSelector((store) => store.recipe.detailReducer);

    const [name, setName] = useState(names[0].title);

    const handleSave = (event) => {
        event.preventDefault();
        console.log('this recipe id:', names[0].id)

        // dispatch({ type: 'CHANGE_RECIPE', 
        // payload: name
        // })

        dispatch({
            type: 'RECIPE_DETAIL',
            payload: {title: name,
            id: names[0].id} });
    }

    // const handleChange = (event) => {
    //     dispatch({ type: 'CHANGE_RECIPE', 
    //     payload: {property, 
    //         value: event.target.value }
    //     })
    // }

    


    return (
        <>

                <div>
                    <h1> old recipe name: {names[0]?.title} new recipe name is: {name} at this ID: {newName[0].id}</h1>
                    <form onSubmit={handleSave}>
                        <Stack direction="row" spacing={3}>

                            <TextField
                                label={names[0]?.title}
                                id="recipe-name"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                size="small"
                                variant="standard"
                            />

                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                onClick={handleSave}>
                                SAVE
                            </Button>
                        </Stack>
                    </form>

                    <br></br>
                    <img src={name[0]?.poster} />


                </div>

        </>
    )
}

export default MyStashRecipeDetail;