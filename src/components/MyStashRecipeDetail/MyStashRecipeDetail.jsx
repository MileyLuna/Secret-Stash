//MUI
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";



function MyStashRecipeDetail({recipe}) {

    const dispatch = useDispatch();

    const [name, setName] = useState(recipe.title);

    const handleSave = (event) => {
        event.preventDefault();
        console.log('this recipe id:', recipe[0].id)

        dispatch({
            type: 'RECIPE_DETAIL',
            payload: {title: name,
            id: recipe[0].id} });
    }


    return (
        <>

                <div>

                    <form onSubmit={handleSave}>
                        <Stack direction="row" spacing={3}>

                            <TextField
                                label="title"
                                id="recipe-name"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                size="small"
                                variant="standard"
                            />

                            <Button
                                variant="contained"
                                color="primary"
                                size="medium"
                                onClick={handleSave}>
                                SAVE
                            </Button>
                        </Stack>
                    </form>

                    <br></br>
                    <img className='recipeDetail'src={recipe[0]?.poster} />


                </div>

        </>
    )
}

export default MyStashRecipeDetail;