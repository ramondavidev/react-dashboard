import slice from './app.reducer';

export const changeTheme = (theme) => async (dispatch) => {
    try {
      if(theme === 'DEFAULT') {
        theme = 'DARK'
      } else {
        theme = 'DEFAULT'
      }
      dispatch(slice.actions.changeTheme(theme));
    } catch (error) {
      console.log(error);
    }
  };