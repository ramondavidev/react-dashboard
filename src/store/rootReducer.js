import { combineReducers } from '@reduxjs/toolkit';
import { reducer as userReducer } from './slices/user/user.reducer';
import { reducer as appReducer } from './slices/app/app.reducer';

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer
});

export default rootReducer;
