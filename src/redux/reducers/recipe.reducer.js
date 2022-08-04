
import { combineReducers } from 'redux';


const recipeReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_RECIPE':
            return action.payload;
        // case 'SET_USER_RECIPE':
        //     return action.payload;
        // case 'SET_RECIPE_DETAIL':
        //     return 
        default:
            return state;
    }
};

const detailReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_RECIPE_DETAIL':
            return action.payload;
        default:
            return state;
    }
};

const ingredientReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_INGREDIENT':
            return action.payload;
        default:
            return state;
    }
};

const instructionReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_INSTRUCTION':
            return action.payload;
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user

let recipes = combineReducers({
    recipeReducer,
    detailReducer,
    ingredientReducer,
    instructionReducer,
});


export default recipes;