//MUI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


function MyStashIngredientList({ item, newItem }) {
    const dispatch = useDispatch();

    const handleSave = (event) => {
        event.preventDefault();
        dispatch({ type: 'INGREDIENT_DETAIL', payload: newItem })
    }

    const handleChange = (event, property) => {
        dispatch({ type: 'CHANGE_INGREDIENT', 
        payload: {property: property, 
            value: event.target.value }
        })
    }




    return (
        <>
            <div>
                <form onSubmit={handleSave}>
                    <Stack direction="row" spacing={3}>
                        <TextField
                            label={item.amount}
                            id="item-amount"
                            value={newItem.amount}
                            onChange={(event) => handleChange(event,  'amount')}
                            size="small"
                            variant="standard"
                        />
                        <TextField
                            label={item.unit}
                            id="item-unit"
                            value={newItem.unit}
                            onChange={(event) => handleChange(event, 'unit')}
                            size="small"
                            variant="standard"
                        />
                        <TextField
                            label={item.ingredient}
                            id="item-ingredient"
                            value={newItem.ingredient}
                            onChange={(event) => handleChange(event, 'ingredient')}
                            size="small"
                            variant="standard"
                        />

                        {/* <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={handleSave}>
                            SAVE
                        </Button> */}

                    </Stack>

                </form>
            </div>
        </>
    )
}

export default MyStashIngredientList;