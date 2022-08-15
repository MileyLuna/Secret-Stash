
//COMPONENT
import MyStashRecipeDetail from '../MyStashRecipeDetail/MyStashRecipeDetail';
import MyStashIngredientList from '../MyStashIngredientList/MyStashIngredientList';
import MyStashInstructionList from '../MyStashIntructionList/MyStashInstructionList';

import MyStashInstructionForm from '../MyStashInstructionForm/MyStashInstructionForm';
import MyStashIngredientForm from '../MyStashIngredientForm/MyStashIngredientForm';
//MUI
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import Swal from 'sweetalert2';


import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { HeightOutlined } from '@mui/icons-material';


function MyStashEdit() {

    const dispatch = useDispatch();
    const history = useHistory();

    //reducer that's storing old/current value
    const recipe = useSelector((store) => store.recipe.detailReducer);
    const ingredients = useSelector((store) => store.recipe.ingredientReducer);
    const instructions = useSelector((store) => store.recipe.instructionReducer);


    const handleUpdate = (event) => {
        event.preventDefault();
        console.log('this id id:',);


        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `${recipe[0].title} updated!`,
            showConfirmButton: false,
            timer: 1250
        });

        //return to MyStashDetail
        history.push(`/stashdetail/${recipe[0].id}`)
    }

    const handleBack = () => {
        history.push(`/stashdetail/${recipe[0].id}`)

    }



    return (

        <div className="main" >
            <div>
                <MyStashRecipeDetail recipe={recipe} />

            </div>

            <div className='ingredient'>
                <h2>Ingredients</h2>


                <MyStashIngredientForm ingredients={ingredients} />
                <br></br>
                <br></br>
                {ingredients.map((ingredient) => {
                    return (
                        <MyStashIngredientList key={ingredient.id} ingredient={ingredient} />

                    )
                })}
            </div>
            <br></br>
            <br></br>
            <div className='instruction'>
                <h2>Instructions</h2>
                <MyStashInstructionForm instructions={instructions} />

                <br></br>
                <br></br>
                {instructions.map((instruction) => {
                    return (
                        <MyStashInstructionList key={instruction.id} instruction={instruction} />

                    )
                })}
            </div>


            <br></br>
            {/* <Stack direction="row" spacing={3}> */}

                <Button
                    variant="outlined"
                    size="medium"
                    onClick={handleBack}
                >
                    My Stash
                </Button>

                {/* <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    onClick={handleUpdate}>
                    UPDATE
                </Button> */}

            {/* </Stack> */}

        </div>
    )
}

export default MyStashEdit;