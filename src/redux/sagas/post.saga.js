import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';




function* addRecipe(action) {
    try {
        const item = yield axios.post('/api/recipe', action.payload);
        yield put({ type: 'FETCH_ITEM' });
    } catch (error) {
        console.log('ERR with POST addRecipe:', error);
    }
}

// function* addIngredient(action) {
//     try {
//         const item = yield axios.post('/api/ing/', action.payload);
//         yield put({ type: 'FETCH_ITEM', payload: item.data });
//     } catch (error) {
//         console.log('ERR with shelfForm:', error);
//     }
// }

// function* addInstruction(action) {
//     try {
//         const item = yield axios.post('/api/ins/', action.payload);
//         yield put({ type: 'FETCH_ITEM', payload: item.data });
//     } catch (error) {
//         console.log('ERR with shelfForm:', error);
//     }
// }



function* postSaga() {
    yield takeEvery('ADD_RECIPE', addRecipe);
    // yield takeEvery('ADD_INGREDIENT', addIngredient);
    // yield takeEvery('ADD_INSTRUCTION', addInstruction);


}
export default postSaga;