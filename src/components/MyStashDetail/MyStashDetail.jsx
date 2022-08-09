import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";


//MUI
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2';

//COMPONENTS
import MyStashRecipeDetail from "../MyStashRecipeDetail/MyStashRecipeDetail";
import MyStashIngredientList from "../MyStashIngredientList/MyStashIngredientList";
import MyStashInstructionList from "../MyStashIntructionList/MyStashInstructionList";

function MyStashDetail() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    console.log('this recipe_id is:', id);

    // const recipes = useSelector((store) => store.recipe.recipeReducer);
    const ingredients = useSelector((store) => store.recipe.ingredientReducer);
    const instructions = useSelector((store) => store.recipe.instructionReducer);

    const [update, setUpdate] = useState(false);


    useEffect(() => {
        dispatch({ type: 'FETCH_RECIPE_DETAIL', payload: id });

    }, [])

    const handleBack = () => {
        //brings to edit of recipe view
        history.push('/stash');

    }


    const handleDelete = () => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                );
                dispatch({ type: 'DELETE_RECIPE', payload: id })
                dispatch({ type: 'DELETE_INSTRUCTION', payload: id })
                dispatch({ type: 'DELETE_INGREDIENT', payload: id })
                //go to My Stash after deletion
                history.push('/stash');
            }
        });


    }


    return (
        <>

            <MyStashRecipeDetail />



            <br></br>
            <h3>INGREDIENT</h3>
            {ingredients.map((item) => {
                return (

                    <MyStashIngredientList key={item.id} item={item} />

                )
            })}
            <br></br>
            <h3>INSTRUCTION</h3>
            {instructions.map((list) => {
                return (
                    <MyStashInstructionList key={list.id} list={list}/>


                )
            })}
            <Stack direction="row" spacing={3}>
                <Button
                    variant="outlined"
                    size="small"
                    onClick={handleBack}>
                    BACK
                </Button>

                {update ?
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() => setUpdate(!update)}>
                        UPDATE
                    </Button>
                    :
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() => setUpdate(!update)}>
                        Edit
                    </Button>
                }

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