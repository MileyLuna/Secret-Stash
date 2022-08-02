//Get * instruction
const instructionReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_INSTRUCTION':
            return action.payload;
        default:
            return state;
    }
};

export default instructionReducer;