//MUI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


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

        console.log("instruction.recipe_id:", instruction.recipe_id);
        console.log('instruction:', instruction);

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

    const handleDelete = () => {
        dispatch({type: 'DELETE_INSTRUCTION', payload: instruction.id})
        
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

                        <Button
                            variant="contained"
                            onClick={handleDelete}
                            color="error"
                            startIcon={<DeleteIcon />}>
                        </Button>

                </Stack>
            </form>
        </div>



        </>
    )
}


export default MyStashInstructionList;