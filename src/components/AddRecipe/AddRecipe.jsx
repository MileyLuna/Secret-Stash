import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";

import IngredientForm from "../IngredientForm/IngredientForm";
import InstructionForm from "../InstructionForm/InstructionForm";

//MUI 
import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import Swal from 'sweetalert2';


//CSS
import './AddRecipe.css';

function AddRecipe() {

    const history = useHistory();
    const dispatch = useDispatch();

    //bring store to utilize user id
    // const user = useSelector((store) => store.user);
    // const user_id = user.id;

    //bring in store that's holding new input
    const ingredient = useSelector((store) => store.holdIngredientReducer);
    const instruction = useSelector((store) => store.holdInstructionReducer);


    const [name, setName] = useState('');


    const handleBack = () => {
        console.log('clicked back');
        //clear all in holder reducers
        dispatch({ type: 'CLEAR_NAME' });
        dispatch({ type: 'CLEAR_INGREDIENT' });
        dispatch({ type: 'CLEAR_INSTRUCTION' });

        //takes back to My Stash view
        history.push('/stash');

    }

    const handleSave = (event) => {
        //prevent refresh
        event.preventDefault();

        //Send new recipe name to be held in reducer until being recall
        dispatch({
            type: 'HOLD_NAME',
            payload: name
        });

        // console.log('this is recipe title:', name);

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Added to The Vault!',
            showConfirmButton: false,
            timer: 1500
        })
        //send and add new recipe to database
        dispatch({
            type: 'ADD_RECIPE',
            payload: {
                instruction: instruction,
                ingredient: ingredient,
                title: name
            }
        });

        dispatch({ type: 'CLEAR_NAME' });
        dispatch({ type: 'CLEAR_INGREDIENT' });
        dispatch({ type: 'CLEAR_INSTRUCTION' });

        history.push('/stash');
    }

    //clear reducer and DOM
    const handleClear = () => {
        dispatch({ type: 'CLEAR_NAME' });
        dispatch({ type: 'CLEAR_INGREDIENT' });
        dispatch({ type: 'CLEAR_INSTRUCTION' });
    }

    return (
        <div className="main">

            <TextField
                label="Recipe Name"
                id="recipe-name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                size="small"
                variant="standard"
            />
            <br></br>
            {/* <div className="container">
               <%= typeof msg != 'undefined' ? msg : '' %> 
                <form action="/upload" method="post" encType="multipart/form-data">
                    <div className="file-field input-field">
                        <div className="">
                            <input name="image" type="file"/>
                        <button type="submit" className="">SUBMIT</button>
                        </div>
                        {/* <div class="file-path-wrapper">
                            <input class="file-path validate" type="text"/>
                        </div> 
                    </div>
                </form>
                
                    <img
                        src="<%= typeof file != 'undefined' ? file : '' %>"
                        className="responsive-img"
                    />
            </div> 
            */}


            

<br></br>
            <div className="ingredient">
                <h2>Ingredients</h2>

                <IngredientForm />

            </div>
            <br></br>
            <div className="instruction">
                <h2>Intructions</h2>
                <InstructionForm />

            </div>
            <br></br>
            <div>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}>
                    <Button
                        variant="outlined"
                        size="medium"
                        onClick={handleBack}>
                        My Stash
                    </Button>
                    <Button
                        variant="contained"
                        color="warning"
                        size="medium"
                        onClick={handleClear}>
                        CLEAR
                    </Button>

                    <Button
                        variant="contained"
                        color="success"
                        size="medium"
                        onClick={handleSave}>
                        SAVE
                    </Button>
                </Stack>

            </div>


        </div>



    )

}

export default AddRecipe;