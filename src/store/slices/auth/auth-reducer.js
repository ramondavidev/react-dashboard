import { INITIALISE, SET_LOADING, LOGIN_SUCCESS, SET_FILIAL, LOGOUT_SUCCESS } from './auth-constants';

const INITIAL_STATE = {
  loading: false,
  isAuthenticated: false
};

const authReducer = (state, action) => {
  switch (action.type) {
    // case INITIALISE: {
    //   const {
    //     isAuthenticated,
    //     data: { id, nome, apelido, login, administrador, ...rest },
    //     menu
    //   } = action.payload;

    //   return {
    //     ...state,
    //     isAuthenticated,
    //     isInitialised: true,
    //     user
    //   };
    // }

    case SET_LOADING: {
      return {
        ...state,
        loading: action.loading
      };
    }

    case SET_FILIAL: {
      return {
        ...state,
        filiais: action.filiais
      };
    }

    case LOGIN_SUCCESS: {
      const {
        data: { id, nome, apelido, login, administrador, ...rest },
        menu
      } = action.payload;

      return {
        ...state,
        ...rest,
        menu,
        usuario: {
          id,
          nome,
          apelido,
          login,
          administrador
        },
        isAuthenticated: true
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...INITIAL_STATE
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default authReducer;
