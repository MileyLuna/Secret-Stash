//MUI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";



function MyStashInstructionList({ instruction }) {

    const dispatch = useDispatch();

    const [step, setStep] = useState(instruction.step_num);
    const [text, setText] = useState(instruction.text);



    const handleSave = (event) => {
        event.preventDefault();
        console.log('this id id:',);

        dispatch({
            type: 'INSTRUCTION_DETAIL',
            payload: {
                id: instruction.id,
                recipe_id: instruction.recipe_id,
                step: step,
                text: text,
            } 
        });
    }


    return (
        <>

            <div key={instruction.id}>
                <form onSubmit={handleSave}>
                    <Stack direction="row" spacing={3}>

                        <TextField
                            label="step"
                            id="list-text"
                            value={step}
                            onChange={(event) => setStep(event.target.value)}
                            size="small"
                            variant="standard"
                        />

                        <TextField
                            label="text"
                            id="list-text"
                            value={text}
                            onChange={(event) => setText(event.target.value)}
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


export default MyStashInstructionList;