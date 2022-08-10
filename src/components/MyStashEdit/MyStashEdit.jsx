
//COMPONENT
import MyStashRecipeDetail from '../MyStashRecipeDetail/MyStashRecipeDetail';
import MyStashIngredientList from '../MyStashIngredientList/MyStashIngredientList';
import MyStashInstructionList from '../MyStashIntructionList/MyStashInstructionList';

//MUI
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';


import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from 'react-router-dom';


function MyStashEdit() {

    const dispatch = useDispatch();
    const history = useHistory();
    // const {id} = useParams();

    //reducer that's storing old/current value
    const name = useSelector((store) => store.recipe.detailReducer);
    const items = useSelector((store) => store.recipe.ingredientReducer);
    const lists = useSelector((store) => store.recipe.instructionReducer);

    //reducer that's storing new onchange value
    const newName = useSelector((store) => store.edits.recipeEdit);
    const newItem = useSelector((store) => store.edits.ingredientEdit);
    const newList = useSelector((store) => store.edits.instructionEdit);


    const handleUpdate = (event) => {
        event.preventDefault();
        console.log('this id id:',);

        //go to edit saga with new information to update DB
        //payload is all information holding in reducer
        // dispatch({ type: 'RECIPE_DETAIL', payload: newName });
        // dispatch({ type: 'INGREDIENT_DETAIL', payload: newItem });
        // dispatch({ type: 'INSTRUCTION_DETAIL', payload: newList });
        //return to MyStashDetail
        history.push(`/stashdetail/${newName[0].id}`)
    }

    // useEffect(() => {
    //     dispatch({ type: 'FETCH_RECIPE_DETAIL', payload: id });
    //     dispatch({ type: 'FETCH_INGREDIENT', payload: id });
    //     dispatch({ type: 'FETCH_INSTRUCTION', payload: id });

    // }, [])

    return (

        <>
            <div>
            <MyStashRecipeDetail />

                {/* <form onSubmit={handleSave}>
                    <Stack direction="row" spacing={3}>

                        <TextField
                            label={name[0]?.title}
                            id="recipe-name"
                            value={name[0]?.title}
                            onChange={(event) => handleChange(event, 'title')}
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

                <br></br>
                <img src={name[0]?.poster} /> 
    */}
            


            </div>


            <div>
                <h3>INGREDIENT</h3>

                {items.map((item) => {
                    return (
                        <MyStashIngredientList key={item.id} item={item} newItem={newItem} />

                    )
                })}
            </div>

            <div>
                <h3>INSTRUCTION</h3>
                {lists.map((list) => {
                    return (
                        <MyStashInstructionList key={list.id} list={list} newList={newList} />

                    )
                })}
            </div>


<br></br>
            <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={handleUpdate}>
                UPDATE
            </Button>

        </>
    )
}

export default MyStashEdit;