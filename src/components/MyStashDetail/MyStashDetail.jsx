import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";


//MUI
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


function MyStashDetail() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    console.log('this recipe_id is:', id);

    const recipes = useSelector((store) => store.recipe.recipeReducer);
    const ingredients = useSelector((store) => store.recipe.ingredientReducer);
    const instructions = useSelector((store) => store.recipe.instructionReducer);

    useEffect(() => {
        dispatch({ type: 'FETCH_RECIPE_DETAIL', payload: id});
        dispatch({ type: 'FETCH_INGREDIENT', payload: id});
        dispatch({ type: 'FETCH_INSTRUCTION', payload: id});
    },[])

    const handleBack =()=>{
        history.push('/stash');

    }

    const handleDelete =()=>{
        dispatch({ type: 'DELETE_RECIPE', payload: id})
        
    }


    return(
        <>
        <h1></h1>

        <Stack direction="row" spacing={3}>
                <Button
                    variant="outlined"
                    size="small"
                    onClick={handleBack}>
                    BACK
                </Button>

                <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={handleDelete}>
                    DELETE
                </Button>
            </Stack>


        </>
    )
}

export default MyStashDetail;