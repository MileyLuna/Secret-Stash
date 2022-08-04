import { put, takeEvery } from 'redux-saga/effects';
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

function* fetchRecipeDetail(action) {
    try {
        // passes the username and password from the payload to the server

        const recipeDetail = yield axios.get(`/api/recipe/detail/${action.payload}`);
        console.log('fetch RECIPE DETAIL:', recipeDetail.data);
        yield put({ type: 'SET_RECIPE_DETAIL', payload: recipeDetail.data });
    } catch (error) {
        console.log('ERROR in fetchRecipeDetail:', error);
    }
}

function* fetchIngredient(action) {
    try {
        // passes the username and password from the payload to the server

        const ingredientDetail = yield axios.get(`/api/ing/detail/${action.payload}`);
        // console.log('fetch INGREDIENT:', ingredientDetail.data);
        yield put({ type: 'SET_INGREDIENT', payload: ingredientDetail.data });
    } catch (error) {
        console.log('ERROR in fetchIngredient:', error);
    }
}

function* fetchInstruction(action) {
    try {
        // passes the username and password from the payload to the server

        const instructionDetail = yield axios.get(`/api/ins/detail/${action.payload}`);
        console.log('fetch INSTRUCTION:', instructionDetail.data);
        yield put({ type: 'SET_INSTRUCTION', payload: instructionDetail.data });
    } catch (error) {
        console.log('ERROR in fetchInstruction:', error);
    }
}

function* fetchUserRecipe(){
    try{
        const response = yield axios.get('/api/recipe/user');
        yield put({ type: 'SET_RECIPE', payload: response.data });
    }
    catch (error) {
        console.log('ERROR in userRecipe:', error);
    }
}



function* fetchSaga() {
    yield takeEvery('FETCH_RECIPE', fetchRecipe);
    yield takeEvery('FETCH_RECIPE_DETAIL', fetchRecipeDetail);
    yield takeEvery('FETCH_INGREDIENT', fetchIngredient);
    yield takeEvery('FETCH_INSTRUCTION', fetchInstruction);

    yield takeEvery('FETCH_USER_RECIPE', fetchUserRecipe);
}

export default fetchSaga;