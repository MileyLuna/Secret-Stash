//MUI 
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import AddBoxIcon from '@mui/icons-material/AddBox';
import RemoveIcon from '@mui/icons-material/Remove';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";


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
        payload: {amount, unit, ingredient} 
        })


    }

    const handleDelete = () => {

    }

    const handleEdit = () => {

    }


    const clearInputs = () => {
        setAmount('');
        setUnit('');
        setIngredient('');
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
                        label="Ingredient"
                        id="standard-size-small3"
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
            <br></br>

            {/* output text TextField */}
            <div className='text'>
                {holds.map((hold, i)=> {
                    return(
                        <div key={i}>
                        <p> {hold.amount} {hold.unit} {hold.ingredient} </p>

                        <IconButton
                        aria-label="edit"
                        color="error"
                        size="small"
                        onClick={handleEdit}>
                        <EditOutlinedIcon  />
                    </IconButton>
                    
                        <IconButton
                        aria-label="delete"
                        color="error"
                        size="small"
                        onClick={handleDelete}>
                        <RemoveIcon />
                    </IconButton>


                        </div>


                    )
                })}
            </div>


        </>
    );
}

export default Ingredient;