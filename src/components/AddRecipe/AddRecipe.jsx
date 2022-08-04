import { useHistory } from "react-router-dom";

function AddRecipe(){

    const history = useHistory();

    const handleBack = () => {
        console.log('clicked back');
        history.push('/stash');

    }

    const handleSave = () => {
        console.log('clicked save');
        //post to update the DB
    }

    const ingredientEdit = () => {
        console.log('ingredient edit clicked');
        history.push('/ingredient');
    }

    const instructionEdit = () => {
        console.log('instruction edit clicked');
        history.push('/instruction');
    }

    return(
        <>
        <input type="text" name="" id="" placeholder="Recipe Name Here"/>

        <div>
            <p>Ingredients</p>
            <button onClick={ingredientEdit}>EDIT</button>
        </div>

        <div>
            <p>Intruction</p>
            <button onClick={instructionEdit}>EDIT</button>
        </div>

        <button onClick={handleBack}>BACK</button>
        <button onClick={handleSave}>SAVE</button>
        </>
    )

}

export default AddRecipe;