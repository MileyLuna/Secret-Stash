import { combineReducers } from 'redux';

const recipeEdit = (state = [], action) => {
    switch (action.type) {
        case 'EDIT_RECIPE':
            return action.payload;
        case 'CHANGE_RECIPE':
            return { ...state, [action.payload.property]: action.payload.value }
        case 'EDIT_CLEAR':
            return []
        default:
            return state;
    }
}

const ingredientEdit = (state = [], action) => {
    switch (action.type) {
        case 'INGREDIENT_EDIT':
            return action.payload;
        case 'CHANGE_INGREDIENT':
            return { ...state, [action.payload.property]: action.payload.value }
        case 'EDIT_CLEAR':
            return []
        default:
            return state;
    }
}

const instructionEdit = (state = [], action) => {
    switch (action.type) {
        case 'INSTRUCTION_EDIT':
            return action.payload;
        case 'CHANGE_INSTRUCTION':
            return { ...state, [action.payload.property]: action.payload.value }
        case 'EDIT_CLEAR':
            return []
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