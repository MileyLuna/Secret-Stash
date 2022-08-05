
import { combineReducers } from 'redux';


const recipeReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_RECIPE':
            return action.payload;
        case 'CLEAR_ALL':
            return [];
        // case 'HOLD_RECIPE':
        //     return {...state,
        //     //then change this one in particular 
        //     [action.payload.property]: action.payload.value}
        // case 'EDIT_RECIPE':
        //     return {...state,[action.payload.property]: action.payload.value}

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
        case 'CLEAR_ALL':
            return [];
        default:
            return state;
    }
};

const instructionReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_INSTRUCTION':
            return action.payload;
        case 'CLEAR_ALL':
            return [];
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