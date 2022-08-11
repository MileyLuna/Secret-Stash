import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AddBoxIcon from '@mui/icons-material/AddBox';


import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";




function MyStashInstructionForm({instructions}) {
    const dispatch = useDispatch();

    const [step, setStep] = useState('');
    const [text, setText] = useState('');

    const handleAdd = (event) => {
        console.log('clicked add');
        event.preventDefault();
        //post update/insert into DB
        clearInputs();
        // dispatch({ type: 'HOLD_INSTRUCTION', payload: { step, text } });


        console.log('instructions:', instructions);
        console.log("instructions.recipe_id:", instructions[0].recipe_id);


        dispatch({
            type: 'ADD_INSTRUCTION', 
            payload: {
                step_num: Number(step),
                text: text,
                recipe_id: instructions[0].recipe_id,
            }
        });
        // dispatch({ type: 'CLEAR_INSTRUCTION' });
    }

    const clearInputs = () => {
        setStep('');
        setText('');
    }

    return (
        <>

            <div>
                <form onSubmit={handleAdd}>
                    <Stack direction="row" spacing={3}>
                        <TextField
                            label="Step #"
                            id="step"
                            value={step}
                            onChange={(event) => setStep(event.target.value)}
                            size="small"
                            variant="standard"
                        />
                        <TextField
                            label="Step"
                            id="text"
                            value={text}
                            onChange={(event) => setText(event.target.value)}
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

export default MyStashInstructionForm