//MUI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";



function MyStashInstructionList({ list, newList }) {

    const dispatch = useDispatch();

    const handleSave = (event) => {
        event.preventDefault();
        console.log('this id id:',);

        dispatch({
            type: 'INSTRUCTION_DETAIL',
            payload: newList
        });
    }

    const handleChange = (event, property) => {
        dispatch({ type: 'CHANGE_INSTRUCTION', 
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
                            label={list.step_num}
                            id="list-step_num"
                            value={newList.step_num}
                            onChange={(event) => handleChange(event, 'step')}
                            size="small"
                            variant="standard"
                        />

                        <TextField
                            label={list.text}
                            id="list-text"
                            value={newList.text}
                            onChange={(event) => handleChange(event, 'text')}
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


export default MyStashInstructionList;