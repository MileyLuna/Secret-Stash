//MUI
import TextField from '@mui/material/TextField';

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";



function MyStashRecipeDetail() {

    const dispatch = useDispatch();

    const details = useSelector((store) => store.recipe.detailReducer);

    const [update, setUpdate] = useState(false);
    const [name, setName] = useState('');



    const handleNameEdit = (event) => {
        event.preventDefault();
        console.log('this id id:', details[0].id)

        dispatch({
            type: 'RECIPE_DETAIL',
            payload: {
                id: details[0].id,
                title: name
            }
        });

        setUpdate(!update);

    }


    return (
        <>

            {update ?
                <div>
                    <form onSubmit={handleNameEdit}>
                        <Stack direction="row" spacing={3}>

                            <TextField
                                label={details[0]?.title}
                                id="recipe-name"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
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

                    <br></br>
                    <img src={details[0]?.poster} />


                </div>
                :
                <div>
                    <h1>{details[0]?.title}</h1>
                    <img src={details[0]?.poster} />
                </div>
            }
        </>
    )
}

export default MyStashRecipeDetail;