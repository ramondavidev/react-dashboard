import axios from 'axios';
import _ from 'lodash';

import { APP_TOKEN } from '~/constants';

const api = axios.create({
  baseURL: process.env.REACT_APP_URL_API
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
