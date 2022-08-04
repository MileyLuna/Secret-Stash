import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

function Instruction() {

    const handleAdd = () => {
        console.log('clicked add');
        //post update/insert into DB
    }

    return(
        <>

        <form onSubmit={handleAdd}>
            <Stack direction="row" spacing={3}>
                <TextField
                    label="Step #"
                    id="standard-size-small"
                    // defaultValue="Small"
                    size="small"
                    variant="standard"
                />
                <TextField
                    label="Steps"
                    id="standard-size-small"
                    // defaultValue="Small"
                    size="small"
                    variant="standard"
                />

                <Button 
                variant="contained" 
                size="small"
                type='submit'
                onClick={handleAdd}
                >
                    ADD
                </Button>

            </Stack>
        </form>
        </>
    );
}

export default Instruction;