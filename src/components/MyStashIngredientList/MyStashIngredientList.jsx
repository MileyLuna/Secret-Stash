//MUI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


function MyStashIngredientList({ item, newItem }) {
    const dispatch = useDispatch();

    // const [amount, setAmount] = useState('');
    // const [unit, setUnit] = useState('');
    // const [ingredient, setIngredient] = useState('');

    const [update, setUpdate] = useState(false);

    // const edit = () => {
    //     setUpdate(!update);
    // }

    const handleSave = (event) => {
        event.preventDefault();

        console.log('this ingredient id:', newItem)

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
        {update ?
            <div 
            // key={item.id}
            >
                <form onSubmit={handleSave}>
                    <Stack direction="row" spacing={3}>
                        <TextField
                            label={item.amount}
                            id="amount"
                            value={newItem.amount}
                            onChange={(event) => handleChange(event,  'amount')}
                            size="small"
                            variant="standard"
                        />
                        <TextField
                            label={item.unit}
                            id="unit"
                            value={newItem.unit}
                            onChange={(event) => handleChange(event, 'unit')}
                            size="small"
                            variant="standard"
                        />
                        <TextField
                            label={item.ingredient}
                            id="ingredient"
                            value={newItem.ingredient}
                            onChange={(event) => handleChange(event, 'ingredient')}
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
                :
                <div>
                    <p>{item.amount} {item.unit} {item.ingredient}</p>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() => setUpdate(!update)}>
                        EDIT
                    </Button>
                </div>
}
        </>
    )
}

export default MyStashIngredientList;