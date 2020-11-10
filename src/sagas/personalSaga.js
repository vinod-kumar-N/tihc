import { all, put, takeLatest } from 'redux-saga/effects';
import personalActions, { personalActionTypes } from '@Actions/personalActions';
import PersonalService from '../services/personalService';
import { withLoader } from './loaderSaga';

function* _getCountryList(action) {
    try {
        const payload = action;
        const countries = yield PersonalService.countryList();
        yield put(personalActions.setCountryList(countries.countryDetails));
    } catch (error) {
        yield console.log('Error while fetching countries', error);
    }
}

function* getCountryList() {
    yield takeLatest(personalActionTypes.GET_COUNTRY_LIST, withLoader(_getCountryList));
}

export default function* PersonalSaga() {
    yield all([getCountryList()])
}