//MUI
import TextField from '@mui/material/TextField';

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";



function MyStashIngredientList({ item }) {

    const [update, setUpdate] = useState(false);

    const [amount, setAmount] = useState('');
    const [unit, setUnit] = useState('');
    const [ingredient, setIngredient] = useState('');

    const handleNameEdit = (event) => {
        event.preventDefault();
        console.log('this id id:', details[0].id)

        dispatch({
            type: 'RECIPE_DETAIL',
            payload: {amount, unit, ingredient}
        });

        setUpdate(!update);

    }


    return (
        <>
            {update ?
                <form onSubmit={handleAdd}>
                    <Stack direction="row" spacing={3}>
                        <TextField
                            label={item.amount}
                            id="standard-size-small"
                            value={amount}
                            onChange={(event) => setAmount(event.target.value)}
                            size="small"
                            variant="standard"
                        />
                        <TextField
                            label={item.unit}
                            id="standard-size-small2"
                            value={unit}
                            onChange={(event) => setUnit(event.target.value)}
                            size="small"
                            variant="standard"
                        />
                        <TextField
                            label={item.ingredient}
                            id="standard-size-small3"
                            value={ingredient}
                            onChange={(event) => setIngredient(event.target.value)}
                            size="small"
                            variant="standard"
                        />

                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={handleNameEdit}>
                            SAVE
                        </Button>

                    </Stack>

                </form>
                :
                <p>{item.amount} {item.unit} {item.ingredient}</p>
            }
        </>
    )
}

export default MyStashIngredientList;