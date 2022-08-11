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
        const reponse = yield axios.post('/api/post/add', action.payload);
        yield put({ type: 'FETCH_INSTRUCTION', payload: [{recipe_id: reponse.recipe_id}] });
    } catch (error) {
        console.log('ERR with POST addInstruction:', error);
    }
}



function* postSaga() {
    yield takeEvery('ADD_RECIPE', addRecipe);
    yield takeEvery('ADD_INSTRUCTION', addInstruction);


}
export default postSaga;