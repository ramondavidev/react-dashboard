import axios from 'axios';

import { APP_TOKEN, BASE_API_URL } from '~/constants';

const api = axios.create({
  baseURL: `${BASE_API_URL}`
});

api.interceptors.request.use(async config => {
  const token = localStorage.getItem(APP_TOKEN);

  return {
    ...config,
    headers: token
      ? {
          ..._.merge(config.headers, {
            Authorization: `Bearer ${token}`
          })
        }
      : { ...config.headers }
  };
});

export default api;
