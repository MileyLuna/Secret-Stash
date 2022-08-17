import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

//MUI
import Button from '@mui/material/Button';

function UserPageDetail() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    console.log('this recipe_id is:', id);

    //Bring over stores to map out all of selected recipe information
    const ingredients = useSelector((store) => store.recipe.ingredientReducer);
    const instructions = useSelector((store) => store.recipe.instructionReducer);
    const details = useSelector((store) => store.recipe.detailReducer);
    
    //on page load fetch selected all information related to selected recipe ID
    useEffect(() => {
        dispatch({ type: 'FETCH_RECIPE_DETAIL', payload: id });
        dispatch({ type: 'FETCH_INGREDIENT', payload: id });
        dispatch({ type: 'FETCH_INSTRUCTION', payload: id });
    }, [])

    //back button to go back to home page
    const handleBack = () => {
        console.log('GOING BACK');
        history.push('/user');
    }



    return (
        <div className="main">

            <div >
                <h1>{details[0]?.title}</h1>
                <img className='recipeDetail' src={details[0]?.poster} />
            </div>

            <br></br>

            <div className="ingredient">
                <h2>Ingredients</h2>
                <div className="item">
                    {ingredients.map((ing) => {
                        return (
                            <div key={ing.id}>
                                <p>{ing.amount} {ing.unit} {ing.ingredient}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <br></br>


            <div className="instruction">
                <h2>Instructions</h2>
                {instructions.map((ins) => {
                    return (
                        <div key={ins.id}>
                            <p>{ins.step_num}. {ins.text}</p>
                        </div>

                    )
                })}
            </div>
            <br></br>
            <Button
                variant="outlined"
                size="medium"
                onClick={handleBack}>
                BACK
            </Button>
        </div >

    )
}

export default UserPageDetail;