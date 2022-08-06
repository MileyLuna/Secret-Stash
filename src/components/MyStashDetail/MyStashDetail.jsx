import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";


//MUI
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';



function MyStashDetail() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    console.log('this recipe_id is:', id);

    // const recipes = useSelector((store) => store.recipe.recipeReducer);
    const ingredients = useSelector((store) => store.recipe.ingredientReducer);
    const instructions = useSelector((store) => store.recipe.instructionReducer);
    const details = useSelector((store) => store.recipe.detailReducer);

    useEffect(() => {
        dispatch({ type: 'FETCH_RECIPE_DETAIL', payload: id });

    }, [])

    const handleBack = () => {
        history.push('/stash');

    }

    const handleDelete = () => {
        dispatch({ type: 'DELETE_RECIPE', payload: id })
        dispatch({ type: 'DELETE_INSTRUCTION', payload: id })
        dispatch({ type: 'DELETE_INGREDIENT', payload: id })
        history.push('/stash');

    }


    return (
        <>
            <h1>{details[0]?.title}</h1>
            <img src={details[0]?.poster} />
            <br></br>
            <h3>INGREDIENT</h3>
            {ingredients.map((ing) => {
                return (
                    <div key={ing.id}>
                        <p>{ing.amount} {ing.unit} {ing.ingredient}</p>
                    </div>
                )
            })}
            <br></br>
            <h3>INSTRUCTION</h3>
            {instructions.map((ins) => {
                return (
                    <div key={ins.id}>
                        <p>{ins.step_num}. {ins.text}</p>
                    </div>

                )
            })}

            <Stack direction="row" spacing={3}>
                <Button
                    variant="outlined"
                    size="small"
                    onClick={handleBack}>
                    BACK
                </Button>

                {/* <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={handleDelete}>
                    DELETE
                </Button> */}

                <Button 
                variant="contained" 
                onClick={handleDelete} 
                color="error"
                startIcon={<DeleteIcon />}>
                    Delete
                </Button>



            </Stack>


        </>
    )
}

export default MyStashDetail;