import { THEMES } from '~/constants';
import { SET_THEME } from './app-constants';

const initialState = {
  theme: THEMES.DEFAULT
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_THEME: {
      return {
        ...state,
        theme: action.theme
      };
    }

    default:
      return state;
  }
}
