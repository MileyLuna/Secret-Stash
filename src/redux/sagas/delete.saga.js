import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* deleteRecipe(action) {
    try {
        // passes the username and password from the payload to the server

        const earseRecipe = yield axios.delete(`/api/recipe/delete/${action.payload}`);
        console.log('fetch RECIPE DETAIL:', earseRecipe.data);
        yield put({ type: 'CLEAR_ALL', payload: earseRecipe.data });
    } catch (error) {
        console.log('ERROR in delete:', error);
    }
}

function* deleteInstruction(action) {
    try {
        // passes the username and password from the payload to the server

        const earseInstruction = yield axios.delete(`/api/ins/delete/${action.payload}`);
        console.log('fetch RECIPE DETAIL:', earseInstruction.data);
        yield put({ type: 'CLEAR_ALL', payload: earseInstruction.data });
    } catch (error) {
        console.log('ERROR in delete:', error);
    }
}

function* deleteIngredient(action) {
    try {
        // passes the username and password from the payload to the server

        const earseIngredient = yield axios.delete(`/api/ing/delete/${action.payload}`);
        console.log('fetch RECIPE DETAIL:', earseIngredient.data);
        yield put({ type: 'CLEAR_ALL', payload: earseIngredient.data });
    } catch (error) {
        console.log('ERROR in delete:', error);
    }
}



function* deleteSaga() {
    yield takeEvery('DELETE_RECIPE', deleteRecipe);
    yield takeEvery('DELETE_INGREDIENT', deleteIngredient);
    yield takeEvery('DELETE_INSTRUCTION', deleteInstruction);



}
export default deleteSaga;