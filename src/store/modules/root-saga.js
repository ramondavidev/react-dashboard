import { all, takeLatest, call, put } from 'redux-saga/effects';
import { APP_ERROR } from '~/constants';
import history from '~/services/history';
import normalizeError from '~/utils/normalize-error';
import * as authActions from './auth/auth-actions';

import auth from './auth/auth-sagas';

export function* erroHandler({ error }) {
  if (error?.response?.status === 401) {
    yield put(authActions.logoutRequest());

    yield call(history.push, '/auth/login');
    // yield call(notification.warning, 'Login expirado!');
  } else {
    const message = normalizeError(error);
    alert(message);
  }
}

export default function* rootSaga() {
  yield all([takeLatest(APP_ERROR, erroHandler), auth]);
}
