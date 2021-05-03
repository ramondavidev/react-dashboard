import React, { createContext } from 'react';

import * as authActions from '~/store/slices/auth/auth-actions';
import SplashScreen from '~/components/SplashScreen';

const AuthContext = createContext({
  login: () => Promise.resolve(),
  logout: () => {}
});

export const AuthProvider = ({ children }) => {
  const auth = useSelector(state => state.auth);

  const login = async (email, password) => {
    dispatch(authActions.login({ email, password }));
  };

  const logout = () => {
    dispatch(authActions.logout());
  };

  // useEffect(() => {
  //   const initialise = async () => {};

  //   initialise();
  // }, []);

  if (!auth.isInitialised) {
    return <SplashScreen />;
  }

  return (
    <AuthContext.Provider
      value={{
        ...auth,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
