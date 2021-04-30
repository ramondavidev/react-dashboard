import { call, all, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';

import api from '~/services/api';
import history from '~/services/history';
import { isValidToken } from '~/utils/auth';
import {
  APP_MENU,
  APP_TOKEN,
  APP_USER,
  BASE_API_URL,
  NODE_API_URL
} from '~/constants';
import { INITIALISE, LOGIN_REQUEST, LOGOUT_REQUEST } from './auth-constants';
import * as appActions from '~/store/modules/app/app-actions';
import * as authActions from './auth-actions';
import authService from './auth-service';

export function* initialise() {
  try {
    //Validated token
    const accessToken = localStorage.getItem(APP_TOKEN);
    if (!accessToken && !isValidToken(accessToken)) {
      yield put(logout());
      return;
    }

    if (accessToken)
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    //Recovery User Data and Menu
    const user = localStorage.getItem(APP_USER);
    const menu = localStorage.getItem(APP_MENU);
    yield put(
      authActions.loginSuccess({
        data: user ? JSON.parse(user) : null,
        menu: menu ? JSON.parse(menu) : []
      })
    );

    //Recovery Theme
    const currentTheme = localStorage.getItem(APP_THEME);
    const { theme } = yield select(state => state.app);
    if (currentTheme !== theme) {
      yield put(appActions.setTheme(currentTheme ?? THEMES.DEFAULT));
    }
  } catch (error) {}
}

export function* login({ payload: { login, senha, filialSelecionada } }) {
  try {
    yield put(authActions.setLoading(true));

    let FilialID = filialSelecionada ? filialSelecionada?.id : 0;
    if (!filialSelecionada) {
      const { data: filiais } = yield call(authService.getFiliais, {
        login,
        senha
      });
      if (filiais.length > 0) {
        yield put(authActions.setFilial(filiais));
        yield put(authActions.setLoading(false));

        return;
      } else {
        FilialID = filiais[0].id;
      }
    }

    //Seta o token antes de carregar os dados do usuário
    const { data: auth } = yield call(authService.getToken, {
      login,
      senha,
      FilialID
    });
    const { access_token } = auth;
    localStorage.setItem(APP_TOKEN, access_token);

    //Carrega os dados do usuario
    const { data: conta } = yield call(authService.getConta);
    const { data: compartilhamentos } = yield call(
      api.get,
      `${BASE_API_URL}/v1/painelcontrole/compartilhamento/`
    );
    const {
      menu,
      cmpComprador: comprador,
      intColaborador: colaborador,
      fatVendedor: vendedor,
      intEmpresa: empresa,
      pctUsuarioPerfil: usuarioPerfil,
      pctParametros: parametros,
      pctPermissoes: permissoes,
      pctMascaras: mascaras,
      filiaisAcesso: filiais,
      ...rest
    } = conta;

    const data = {
      ...rest,
      comprador,
      colaborador,
      vendedor,
      empresa,
      usuarioPerfil,
      parametros,
      permissoes,
      mascaras,
      filiais,
      compartilhamentos: compartilhamentos.map(c => ({
        [c.dominio]: c.compartilhado
      }))
    };

    localStorage.setItem(APP_USER, JSON.stringify(data));
    localStorage.setItem(APP_MENU, JSON.stringify(menu));

    yield put(
      authActions.loginSuccess({
        data,
        menu
      })
    );

    // yield call(axios.post, 'http://127.0.0.1:3335/api/sync-teste', {
    //   baseURL: NODE_API_URL,
    //   token: access_token
    // });

    yield put(authActions.setLoading(false));

    yield call(history.push, '/');
    // yield call(notification.success, 'Login efetuado com sucesso!');
  } catch (error) {
    console.log(error);
    localStorage.removeItem(APP_USER);
    localStorage.removeItem(APP_MENU);

    yield put(authActions.setLoading(false));
  }
}

export function* logout() {
  try {
    delete axios.defaults.headers.common.Authorization;

    localStorage.removeItem(APP_TOKEN);
    localStorage.removeItem(APP_USER);
    localStorage.removeItem(APP_MENU);

    yield put(authActions.logoutSuccess());

    yield call(history.push, '/auth/login');
  } catch (error) {
    console.log(error);
  }
}

export default all([
  takeLatest(INITIALISE, initialise),
  takeLatest(LOGIN_REQUEST, login),
  takeLatest(LOGOUT_REQUEST, logout)
]);
