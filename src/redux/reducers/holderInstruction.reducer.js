

const holdInstructionReducer = (state = [], action) => {
    switch (action.type) {
        case 'HOLD_INSTRUCTION':
            return [...state, action.payload];
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default holdInstructionReducer;