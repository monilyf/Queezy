import client, {METHODS} from './client';

export const api = {
  auth: {
    login: params =>
      client({
        url: '/login',
        data: params,
        method: METHODS.POST,
      }),
  },
};
