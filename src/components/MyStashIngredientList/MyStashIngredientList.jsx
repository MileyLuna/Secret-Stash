//MUI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { useState } from "react";
import { useDispatch } from "react-redux";


function MyStashIngredientList({ ingredient }) {
    const dispatch = useDispatch();

    //initial values reference the table column NOT useState
    //to show old values that might get replace
    const [amount, setAmount] = useState(ingredient.amount);
    const [unit, setUnit] = useState(ingredient.unit);
    const [ingredients, setIngredients] = useState(ingredient.ingredient);


    const handleSave = (event) => {
        event.preventDefault();


        dispatch({ type: 'INGREDIENT_DETAIL', 
        payload: {
            id: ingredient.id,
            recipe_id: ingredient.recipe_id,
            amount: amount,
            unit: unit,
            ingredient: ingredients
        } 
    });
    // setUpdate(false);
    }


    return (
        <>

            <div>
                <form onSubmit={handleSave}>
                    <Stack direction="row" spacing={3}>
                        <TextField
                            label="amount"
                            id="amount"
                            value={amount}
                            onChange={(event) => setAmount(event.target.value)}
                            size="small"
                            variant="standard"
                        />
                        <TextField
                            label="unit"
                            id="unit"
                            value={unit}
                            onChange={(event) => setUnit(event.target.value)}
                            size="small"
                            variant="standard"
                        />
                        <TextField
                            label="ingredient"
                            id="ingredient"
                            value={ingredients}
                            onChange={(event) => setIngredients(event.target.value)}
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
            </div>

        </>
    )
}

export default MyStashIngredientList;