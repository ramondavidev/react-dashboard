import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: {}
};

const slice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    getUserData(state, action) {
      state.userData = action.payload;
    }
  }
});

export const reducer = slice.reducer;

export default slice;
