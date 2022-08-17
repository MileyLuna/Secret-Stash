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
    const recipe = useSelector((store) => store.recipe.detailReducer);

    //onload automatically summon all information regarding this ID
    useEffect(() => {
        dispatch({ type: 'FETCH_RECIPE_DETAIL', payload: id });
        dispatch({ type: 'FETCH_INGREDIENT', payload: id });
        dispatch({ type: 'FETCH_INSTRUCTION', payload: id });

    }, [])


    const handleBack = () => {
        //brings to edit of recipe view
        history.push('/stash');
    }

    //takes to MyStashEdit for updates option
    const handleEdit = () => {
        //brings to edit of recipe view
        history.push(`/stashedit`);
    }


    //delete selected recipe from database
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
        <div className="main">
            {/* show recipe name and pic */}
            <div >
                <h1>{recipe[0]?.title}</h1>
                <img className='recipe' src={recipe[0]?.poster} />
            </div>


            <br></br>
            {/* maps out ingredients for selected recipe */}
            <div className="ingredient">
                <h2>Ingredients</h2>
            <div className="item">

                    {ingredients.map((item) => {
                        return (
                            <p key={item.id}> {item.amount} {item.unit} {item.ingredient}</p>
                        )
                    })}
            </div>
            </div>


            <br></br>

            {/* maps out instruction for selected recipe */ }
            <div className="instruction">
                <div>
                <h2>Instructions</h2>
                    {instructions.map((list) => {
                        return (
                            <p key={list.id}>{list.step_num}. {list.text} </p>
                        )
                    })}
                    </div>
            </div>

            <br></br>
            <div>
                <Stack
                justifyContent="center"
                    direction="row"
                    spacing={3}>
                    <Button
                        variant="outlined"
                        size="medium"
                        onClick={handleBack}>
                        BACK
                    </Button>


                    <Button
                        variant="contained"
                        color="primary"
                        size="medium"
                        onClick={handleEdit}>
                        EDIT
                    </Button>
                </Stack>

                <br></br>
                <Button
                    variant="contained"
                    onClick={handleDelete}
                    color="error"
                    size="medium"
                    startIcon={<DeleteIcon />}>
                    Delete
                </Button>
            </div>
        </div >
    )
}

export default MyStashDetail;