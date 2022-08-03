
function AddRecipe(){

    const handleBack = () => {
        console.log('clicked back');
    }

    const handleSave = () => {
        console.log('clicked save');
    }

    const ingreEdit = () => {
        console.log('ingredient edit clicked');
    }

    const instrucEdit = () => {
        console.log('instruction edit clicked');
    }

    return(
        <>
        <input type="text" name="" id="" placeholder="Recipe Name Here"/>

        <div>
            <p>Ingredients</p>
            <button onClick={ingreEdit}>EDIT</button>
        </div>

        <div>
            <p>Intruction</p>
            <button onClick={instrucEdit}>EDIT</button>
        </div>

        <button onClick={handleBack}>BACK</button>
        <button onClick={handleSave}>SAVE</button>
        </>
    )

}

export default AddRecipe;