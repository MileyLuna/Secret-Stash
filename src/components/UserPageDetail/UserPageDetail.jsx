import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";


function UserPageDetail() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    console.log('this recipe_id is:', id);

    //Bring over stores to map out all of selected recipe information
    const ingredients = useSelector((store) => store.recipe.ingredientReducer);
    const instructions = useSelector((store) => store.recipe.instructionReducer);
    const details = useSelector((store) => store.recipe.detailReducer);
    
    useEffect(() => {
        dispatch({ type: 'FETCH_RECIPE_DETAIL', payload: id});
        dispatch({ type: 'FETCH_INGREDIENT', payload: id});
        dispatch({ type: 'FETCH_INSTRUCTION', payload: id});
    },[])

    //back button
    const handleBack = () => {
        console.log('GOING BACK');
        history.push('/user');
    }



    return (
        <div>
            <h1>{details[0]?.title}</h1>
            <img src={details[0]?.poster}/>

        {ingredients.map((ing) => {
            return(
                <div key={ing.id}>
                    <p>{ing.amount} {ing.unit} {ing.ingredient}</p>
                </div>
            )
        })}

        {instructions.map((ins)=> {
            return(
                <div key={ins.id}> 
                <p>{ins.step_num}. {ins.text}</p>
                </div>
            
            )
        })}

            <button onClick={handleBack}>BACK</button>
        </div>

    )
}

export default UserPageDetail;