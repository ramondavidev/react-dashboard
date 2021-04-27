import slice from './user.reducer';
import api from '~/services/api';

export const getUserData = () => async (dispatch) => {
    try {
      const response = await api.get('/v1/painelcontrole/usuario/conta');
      dispatch(slice.actions.getUserData(response.data));
    } catch (error) {
      console.log(error);
    }
  };