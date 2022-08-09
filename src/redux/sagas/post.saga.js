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



function* postSaga() {
    yield takeEvery('ADD_RECIPE', addRecipe);


}
export default postSaga;