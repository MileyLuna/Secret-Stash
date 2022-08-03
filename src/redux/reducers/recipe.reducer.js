// const initialState = ['']

const recipeReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_RECIPE':
            return action.payload;
        case 'SET_USER_RECIPE':
            return action.payload;
        // case 'SET_RECIPE_DETAIL':
        //     return 
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default recipeReducer;