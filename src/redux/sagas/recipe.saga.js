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

function* recipeSaga() {
    yield takeEvery('FETCH_RECIPE', fetchRecipe);
}

export default recipeSaga;