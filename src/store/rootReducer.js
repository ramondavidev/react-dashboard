import { combineReducers } from '@reduxjs/toolkit';
import { reducer as userReducer } from './modules/user/user.reducer';
import { reducer as appReducer } from './modules/app/app.reducer';

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer
});

export default rootReducer;
