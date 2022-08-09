import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";


//MUI
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';


//COMPONENTS
import './MyStashDetail.css';

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
        dispatch({ type: 'FETCH_INGREDIENT', payload: id });
        dispatch({ type: 'FETCH_INSTRUCTION', payload: id });

    }, [])


    const handleBack = () => {
        //brings to edit of recipe view
        history.push('/stash');
    }

    const handleEdit = () => {
        dispatch({type: 'EDIT_RECIPE', payload: details})
        dispatch({type: 'EDIT_INGREDIENT', payload: ingredients})
        dispatch({type: 'EDIT_INSTRUCTION', payload: instructions})
        //brings to edit of recipe view
        history.push(`/stashedit`);
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
                    'Recipe removed from vault.',
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
        <div className="stashdetail">

                <div>
                    <h1>{details[0]?.title}</h1>
                    <img src={details[0]?.poster} />
                </div>


            <br></br>

            <div className="item">
                <h3>INGREDIENT</h3>

                    <div>
                        {ingredients.map((item) => {
                            return (
                                <p key={item.id}> {item.amount} {item.unit} {item.ingredient}</p>
                            )
                        })}
                    </div>


            </div>
            <br></br>


            <div className="list">
                <h3>INSTRUCTION</h3>

                    <div>
                        {instructions.map((list) => {
                            return (
                                <p key={list.id}>{list.step_num}. {list.text} </p>
                            )
                        })}
                    </div>

            </div>

            <br></br>

            <Stack direction="row" cols={3} spacing={3}>
                <Button
                    variant="outlined"
                    size="small"
                    onClick={handleBack}>
                    BACK
                </Button>


                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={handleEdit}>
                        EDIT
                    </Button>


                <Button
                    variant="contained"
                    onClick={handleDelete}
                    color="error"
                    startIcon={<DeleteIcon />}>
                    Delete
                </Button>
            </Stack>
        </div>
    )
}

export default MyStashDetail;