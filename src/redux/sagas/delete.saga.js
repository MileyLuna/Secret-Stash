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

function* deleteInstruction(action) {
    try {
        // passes the username and password from the payload to the server

        const response = yield axios.delete(`/api/ins/delete/${action.payload}`);
        console.log('deleteInstruction:', response);
        yield put({ type: 'FETCH_INSTRUCTION', payload: response.data[0].recipe_id});
    } catch (error) {
        console.log('ERROR in delete:', error);
    }
}

function* deleteIngredient(action) {
    try {
        // passes the username and password from the payload to the server

        const response = yield axios.delete(`/api/ing/delete/${action.payload}`);
        console.log('deleteInstruction:', response);
        yield put({ type: 'FETCH_INGREDIENT', payload: response.data[0].recipe_id});
    } catch (error) {
        console.log('ERROR in delete:', error);
    }
}






function* deleteSaga() {
    yield takeEvery('DELETE_RECIPE', deleteRecipe);
    yield takeEvery('DELETE_INSTRUCTION', deleteInstruction);
    yield takeEvery('DELETE_INGREDIENT', deleteIngredient);

}
export default deleteSaga;