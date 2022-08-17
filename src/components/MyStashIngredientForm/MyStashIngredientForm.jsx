//MUI
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AddBoxIcon from '@mui/icons-material/AddBox';

import { useState } from 'react';
import { useDispatch } from "react-redux";


function MyStashIngredientForm({ ingredients }) {
    const dispatch = useDispatch();

    const [amount, setAmount] = useState('');
    const [unit, setUnit] = useState('');
    const [ingredient, setIngredient] = useState('');

    const handleAdd = (event) => {
        console.log('clicked add');
        event.preventDefault();

        clearInputs();

        dispatch({
            type: 'ADD_INGREDIENT',
            payload: {
                amount: amount,
                unit: unit,
                ingredient: ingredient,
                recipe_id: ingredients[0].recipe_id,
            }
        });
    }

    const clearInputs = () => {
        setAmount('');
        setUnit('');
        setIngredient('');
    }


    return (
        <>

            <div>
                <form onSubmit={handleAdd}>
                    <Stack direction="row" spacing={3}>
                        <TextField
                            label="Amount"
                            id="amount"
                            value={amount}
                            onChange={(event) => setAmount(event.target.value)}
                            size="small"
                            variant="standard"
                        />
                        <TextField
                            label="Unit"
                            id="unit"
                            value={unit}
                            onChange={(event) => setUnit(event.target.value)}
                            size="small"
                            variant="standard"
                        />

                        <TextField
                            fullWidth
                            label="Ingredient"
                            id="ingredient"
                            value={ingredient}
                            onChange={(event) => setIngredient(event.target.value)}
                            size="small"
                            variant="standard"
                        />

                        <IconButton
                            aria-label="add"
                            color="primary"
                            type='submit'
                            onClick={handleAdd}>
                            <AddBoxIcon />
                        </IconButton>

                    </Stack>
                </form>
            </div>
        </>
    )
}

export default MyStashIngredientForm;