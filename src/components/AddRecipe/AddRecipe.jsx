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


//CSS
import './AddRecipe.css';

function AddRecipe() {

    const history = useHistory();
    const dispatch = useDispatch();

    //bring store to utilize user id
    const user = useSelector((store) => store.user);
    const user_id = user.id;

    //bring in store that's holding new input
    const ingredient = useSelector((store) => store.holdIngredientReducer);
    const instruction = useSelector((store) => store.holdInstructionReducer);


    const [name, setName] = useState('');


    const handleBack = () => {
        console.log('clicked back');
        history.push('/stash');

    }

    const handleSave = (event) => {
        console.log('new recipe:',);
        //post to update the DB
        event.preventDefault();

        dispatch({
            type: 'ADD_RECIPE',
            payload: {name, user_id}
        })

        dispatch({
            type: 'ADD_INGREDIENT',
            payload: {
                iAmount: ingredient.amount,
                iUnit: ingredient.unit,
                iIngredient: ingredient.ingredient
            }
        });

        dispatch({
            type: 'ADD_INSTRUCTION',
            payload: {
                iStep: instruction.step_num,
                iText: instruction.text
            }
        })


    }


    return (
        <>

            <TextField
                label="Recipe Name"
                id="recipe-name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                size="small"
                variant="standard"
            />


            <br></br>


            <div className="ingredient">
                <p>Ingredients</p>

                <IngredientForm />

            </div>
            <br></br>
            <div className="instruction">
                <p>Intructions</p>
                <InstructionForm />

            </div>


            <Stack direction="row" spacing={3}>
                <Button
                    variant="outlined"
                    size="small"
                    onClick={handleBack}>
                    BACK
                </Button>

                <Button
                    variant="contained"
                    color="success"
                    size="small"
                    onClick={handleSave}>
                    SAVE
                </Button>
            </Stack>


        </>



    )

}

export default AddRecipe;