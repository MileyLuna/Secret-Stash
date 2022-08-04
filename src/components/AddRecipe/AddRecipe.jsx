import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";

import IngredientForm from "../IngredientForm/IngredientForm";
import InstructionForm from "../InstructionForm/InstructionForm";

//MUI 
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

//CSS
import './AddRecipe.css';

function AddRecipe() {

    const history = useHistory();
    const dispatch = useDispatch();

    const hold = useSelector((store) => store.hold);

    // useEffect (() => {
    //     dispatch({type: 'HOLD_INGREDIENT'})
    // })

    // const [name, setName] = React.useState('');
    // const recipes = useSelector((store) => store.recipe.recipeReducer);


    const handleBack = () => {
        console.log('clicked back');
        history.push('/stash');

    }

    const handleSave = (event) => {
        console.log('clicked save');
        //post to update the DB
        event.preventDefault();

        dispatch({
            type: 'HOLD_INGREDIENT',
            payload: { amount, unit, ingredient }
        })


    }

    // const ingredientEdit = () => {
    //     console.log('ingredient edit clicked');
    //     history.push('/ingredient');
    // }

    // const instructionEdit = () => {
    //     console.log('instruction edit clicked');
    //     history.push('/instruction');
    // }

    // function handleChange(event) {
    //     dispatch({
    //         type: 'HOLD_RECIPE',
    //         payload: {
    //             property: 'name',
    //             value: event.target.value
    //         }
    //     });

    // }

    return (
        <>
            <input
                type="text"
                placeholder="Recipe Name Here"
            // onChange={(event) => handleChange(event)}
            // value={recipes.name}
            />

            <div className="ingredient">
                <p>Ingredients</p>
                {/*<Button
                    variant="outlined"
                    size="small"
                    onClick={ingredientEdit}>
                    EDIT
                </Button>

                <p>{hold.amount} {hold.unit} {hold.ingredient} </p> */}

                <IngredientForm />

            </div>
            <br></br>
            <div className="instruction">
                <p>Intruction</p>
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