import { combineReducers } from 'redux';

import app from './app/app-reducer';
import auth from './auth/auth-reducer';

const rootReducer = combineReducers({ app, auth });

export default rootReducer;
