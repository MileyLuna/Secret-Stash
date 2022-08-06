import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* deleteRecipe(action) {
    try {
        // passes the username and password from the payload to the server

        const earseRecipe = yield axios.delete(`/api/recipe/delete/${action.payload}`);
        console.log('fetch RECIPE DETAIL:', earseRecipe.data);
        yield put({ type: 'SET_RECIPE' });
    } catch (error) {
        console.log('ERROR in delete:', error);
    }
}





function* deleteSaga() {
    yield takeEvery('DELETE_RECIPE', deleteRecipe);

}
export default deleteSaga;