import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* deleteRecipe(action) {
    try {
        // passes the username and password from the payload to the server

        const earse = yield axios.get(`/api/recipe/detail/${action.payload}`);
        console.log('fetch RECIPE DETAIL:', earse.data);
        yield put({ type: 'CLEAR_ALL', payload: earse.data });
    } catch (error) {
        console.log('ERROR in delete:', error);
    }
}



function* deleteSaga() {
    yield takeEvery('DELETE_RECIPE', deleteRecipe);



}
export default deleteSaga;