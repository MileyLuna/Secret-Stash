const holdIngredientReducer = (state = [], action) => {
    switch (action.type) {
        case 'HOLD_INGREDIENT':
            return [...state, action.payload];
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default holdIngredientReducer;