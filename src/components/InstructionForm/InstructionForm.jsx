//MUI
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import AddBoxIcon from '@mui/icons-material/AddBox';
import RemoveIcon from '@mui/icons-material/Remove';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';


import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import './InstructionForm.css';


function Instruction() {

    const dispatch = useDispatch();

    const hold = useSelector((store) => store.holdInstructionReducer);
    // console.log(hold);

    const [step, setStep] = useState('');
    const [text, setText] = useState('');

    const handleAdd = (event) => {
        console.log('clicked add');
        event.preventDefault();
        //post update/insert into DB
        clearInputs();
        dispatch({
            type: 'HOLD_INSTRUCTION',
            payload: { step, text }
        })

    }

    const clearInputs = () => {
        setStep('');
        setText('');
    }



    return (
        <>

            <form onSubmit={handleAdd}>
                <Stack direction="row" spacing={3}>
                    <TextField
                        label="Step #"
                        id="standard-size-small1"
                        value={step}
                        onChange={(event) => setStep(event.target.value)}
                        size="small"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        label="Step"
                        id="standard-size-small2"
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

            <br></br>
            <div>
                {hold.map((item, i) => {
                    return (
                        <div key={i} className="item">

                            <p >{item.step} {item.text} </p>


                            {/* <IconButton
                                aria-label="delete"
                                color="error"
                                size="small"
                            >
                                <RemoveIcon />
                            </IconButton> */}
                        </div>
                    )
                })}
            </div>


        </>
    );
}

export default Instruction;