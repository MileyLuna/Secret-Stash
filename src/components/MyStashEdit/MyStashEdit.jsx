//COMPONENTS
import { useSelector } from "react-redux";
import MyStashIngredientList from "../MyStashIngredientList/MyStashIngredientList";
import MyStashInstructionList from "../MyStashIntructionList/MyStashInstructionList";

function MyStashEdit () {

    //bring in reducer that temporary holds the information
    const recipe = useSelector((store) => store.edits.recipeEdit);
    const ingredient = useSelector((store) => store.edits.ingredientEdit);
    const instruction = useSelector((store) => store.edits.instructionEdit);

    return(

        <>
        
        <div>
            <h1>{recipe[0]?.title}</h1>
            <img src={recipe[0]?.poster} />
        </div>

        <div>
            {ingredient.map((item) => {
                return(
                    <MyStashIngredientList key={item.id} list={item}/>
                )
            })}
        </div>

        <div>
            {instruction.map((list) => {
                return(
                    <MyStashInstructionList key={list.id} list={list} />
                )
            })}
        </div>
        
        
        </>
    )
}

export default MyStashEdit;