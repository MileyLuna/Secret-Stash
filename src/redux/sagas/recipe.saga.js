import { put, take, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchRecipe() {
    try {
        // passes the username and password from the payload to the server

        const response = yield axios.get('/api/recipe');
        yield put({ type: 'SET_RECIPE', payload: response.data });
    } catch (error) {
        console.log('Error with user registration:', error);
    }
}

function* fetchRecipeDetail() {
    try {
        // passes the username and password from the payload to the server

        const recDetail = yield axios.get(`/api/recipe/${action.payload}`);
        console.log('fetch RECIPE DETAIL:', recDetail.data);
        yield put({ type: 'SET_RECIPE', payload: recDetail.data });
    } catch (error) {
        console.log('ERROR in fetchRecipeDetail:', error);
    }
}

function* fetchIngredient() {
    try {
        // passes the username and password from the payload to the server

        const ingDetail = yield axios.get(`/api/ing/${action.payload}`);
        console.log('fetch INGREDIENT:', ingDetail.data);
        yield put({ type: 'SET_INGREDIENT', payload: ingDetail.data });
    } catch (error) {
        console.log('ERROR in fetchIngredient:', error);
    }
}

function* fetchInstruction() {
    try {
        // passes the username and password from the payload to the server

        const insDetail = yield axios.get(`/api/ins/${action.payload}`);
        console.log('fetch INSTRUCTION:', insDetail.data);
        yield put({ type: 'SET_INSTRUCTION', payload: insDetail.data });
    } catch (error) {
        console.log('ERROR in fetchInstruction:', error);
    }
}



function* recipeSaga() {
    yield takeEvery('FETCH_RECIPE', fetchRecipe);
    yield takeEvery('FETCH_RECIPE_DETAIL', fetchRecipeDetail);
    yield takeEvery('FETCH_INGREDIENT', fetchIngredient);
    yield takeEvery('FETCH_INSTRUCTION', fetchInstruction);
}

export default recipeSaga;