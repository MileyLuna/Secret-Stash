import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";


function RecipeView() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    console.log('this recipe_id is:', id);

    //Bring over stores to map out all of selected recipe information
    const recipe = useSelector((store) => store.recipe);
    const ingredients = useSelector((store) => store.ingredient);
    const instructions = useSelector((store) => store.instruction);

    //back button
    const handleBack = () => {
        console.log('GOING BACK');
        history.push('/user');
    }



    return (
        <>
        </>
    )
}

export default RecipeView;