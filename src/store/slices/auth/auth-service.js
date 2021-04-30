import qs from 'qs';
import api from '~/services/api';
import { BASE_API_URL } from '~/constants';

class AuthService {
  getFiliais({ login, senha }) {
    return api.get(`${BASE_API_URL}/v1/integracao/empresa/filiais`, {
      headers: {
        login,
        senha
      }
    });
  }

  getToken({ login, senha, FilialID }) {
    var data = qs.stringify({
      grant_type: 'password',
      username: login,
      password: senha,
      FilialID
    });

    return api.post(`${BASE_API_URL}/v1/painelcontrole/usuario/token`, data, {
      'Content-Type': 'application/x-www-form-urlencoded'
    });
  }

  getConta() {
    return api.get(`${BASE_API_URL}/v1/painelcontrole/usuario/conta`);
  }
}

export default new AuthService();
