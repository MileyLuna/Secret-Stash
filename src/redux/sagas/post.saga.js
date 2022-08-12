import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';




//will take new recipe to server to add into DB
//when saga comes back, refresh and update DOM 
function* addRecipe(action) {
    try {
        yield axios.post('/api/post', action.payload);
        yield put({ type: 'FETCH_ITEM' });
    } catch (error) {
        console.log('ERR with POST addRecipe:', error);
    }
}

function* addInstruction(action) {
    try {
        console.log('addInstruction:', action.payload);
        const response = yield axios.post('/api/ins/add', action.payload);
        console.log('response:', response.data[0].recipe_id);
        yield put({ type: 'FETCH_INSTRUCTION', payload: response.data[0].recipe_id});
    } catch (error) {
        console.log('ERR with POST addInstruction:', error);
    }
}

function* addIngredient(action) {
    try {
        console.log('addInstruction:', action.payload);
        const response = yield axios.post('/api/ing/add', action.payload);
        console.log('response:', response.data[0].recipe_id);
        yield put({ type: 'FETCH_INGREDIENT', payload: response.data[0].recipe_id});
    } catch (error) {
        console.log('ERR with POST addInstruction:', error);
    }
}



function* postSaga() {
    yield takeEvery('ADD_RECIPE', addRecipe);
    yield takeEvery('ADD_INSTRUCTION', addInstruction);
    yield takeEvery('ADD_INGREDIENT', addIngredient);


}
export default postSaga;