import { combineReducers } from 'redux';

const recipeEdit = (state = [], action) => {
    switch (action.type) {
        case 'EDIT_RECIPE':
            return action.payload;
        default:
            return state;
    }
}

const ingredientEdit = (state = [], action) => {
    switch (action.type) {
        case 'INGREDIENT_RECIPE':
            return action.payload;
        default:
            return state;
    }
}

const instructionEdit = (state = [], action) => {
    switch (action.type) {
        case 'INSTRUCTION_RECIPE':
            return action.payload;
        default:
            return state;
    }
}


let edits = combineReducers({
    recipeEdit,
    ingredientEdit,
    instructionEdit,

});


export default edits;