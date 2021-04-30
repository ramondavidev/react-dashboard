import { createSlice } from '@reduxjs/toolkit';
import { THEMES } from '~/constants';

const initialState = {
  theme: THEMES.DEFAULT
};

const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state, action) {
      state.theme = action.payload;
    }
  }
});

export const reducer = slice.reducer;

export default slice;
