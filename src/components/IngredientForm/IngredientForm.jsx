//MUI 
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import AddBoxIcon from '@mui/icons-material/AddBox';

import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import './IngredientForm.css';



function Ingredient() {

    const dispatch = useDispatch();

    //bring in holder stores
    const holds = useSelector((store) => store.holdIngredientReducer);
    // console.log(hold);

    const [amount, setAmount] = useState('');
    const [unit, setUnit] = useState('');
    const [ingredient, setIngredient] = useState('');

    const handleAdd = (event) => {
        console.log('clicked add');
        event.preventDefault();
        //post update/insert into DB
        clearInputs();
        dispatch({
            type: 'HOLD_INGREDIENT',
            payload: { amount, unit, ingredient }
        })


    }

    // const handleDelete = () => {
    //     dispatch({ type: 'CLEAR_INGREDIENT' });
    // }



    const clearInputs = () => {
        setAmount('');
        setUnit('');
        setIngredient('');
    }

    const fieldValues = () => {
        setAmount(1);
        setUnit('cup');
        setIngredient('water');


    }


    return (
        <>
            <form onSubmit={handleAdd}>
                <Stack direction="row" spacing={3}>
                    <TextField
                        label="Amount"
                        id="standard-size-small"
                        value={amount}
                        onChange={(event) => setAmount(event.target.value)}
                        // auto-fill for testing
                        onClick={fieldValues}
                        size="small"
                        variant="standard"
                    />
                    <TextField
                        label="Units"
                        id="standard-size-small2"
                        value={unit}
                        onChange={(event) => setUnit(event.target.value)}
                        size="small"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        label="Ingredient"
                        id="standard-size-small3"
                        value={ingredient}
                        onChange={(event) => setIngredient(event.target.value)}
                        size="small"
                        variant="standard"
                    />

                    <IconButton
                        aria-label="add"
                        type='submit'
                        onClick={handleAdd}>
                        <AddBoxIcon />
                    </IconButton>

                </Stack>

            </form>
            <br></br>

            {/* output text TextField */}
            <div className='text'>
                {holds.map((hold, i) => {
                    return (
                        <div key={i} className="hold">
                            <div>
                                <p> {hold.amount} {hold.unit} {hold.ingredient} </p>
                            </div>

                            <div>
                                {/* <IconButton
                                    aria-label="delete"
                                    color="error"
                                    size="small"
                                    onClick={handleDelete}>
                                    <RemoveIcon />
                                </IconButton> */}
                            </div>
                        </div>


                    )
                })}
            </div>


        </>
    );
}

export default Ingredient;