const holdRecipeNameReducer = (state = '', action) => {
    switch (action.type) {
        case 'HOLD_NAME':
            return action.payload;
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default holdRecipeNameReducer;