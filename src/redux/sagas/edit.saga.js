import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* recipeDetail(action) {
    try {
        // passes the username and password from the payload to the server
        console.log('action payload is:', action.payload.id, action.payload);
        const recipeDetail = yield axios.put(`/api/recipe/edit/${action.payload.id}`, action.payload);
        console.log('fetch RECIPE DETAIL:', recipeDetail.data);
        // yield put({ type: 'SET_RECIPE_DETAIL' });
    } catch (error) {
        console.log('ERROR in PUT Recipe SAGA:', error);
    }
}

function* ingredientDetail(action) {
    try {
        // passes the username and password from the payload to the server
        console.log('ingredientDetail action payload is:', action.payload.id, action.payload);
        const ingredientDetail = yield axios.put(`/api/ing/edit/${action.payload.id}`, action.payload);
        console.log('fetch INGREDIENT:', ingredientDetail.data);
        yield put({ type: 'SET_INGREDIENT' });
    } catch (error) {
        console.log('ERROR in PUT Ingredient SAGA:', error);
    }
}

function* instructionDetail(action) {
    try {
        // passes the username and password from the payload to the server

        const instructionDetail = yield axios.put(`/api/ins/edit/${action.payload.id}`, action.payload);
        console.log('fetch INSTRUCTION:', instructionDetail.data);
        yield put({ type: 'SET_INSTRUCTION'});
    } catch (error) {
        console.log('ERROR in PUT Instruction SAGA:', error);
    }
}

function* editSaga() {
    yield takeEvery('RECIPE_DETAIL', recipeDetail);
    yield takeEvery('INGREDIENT_DETAIL', ingredientDetail);
    yield takeEvery('INSTRUCTION_DETAIL', instructionDetail);




}

export default editSaga;