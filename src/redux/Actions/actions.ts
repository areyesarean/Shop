export const INIT_STATE = 'INIT_STATE';
export const InitState = () => {
  return {
    type: INIT_STATE,
    payload: {
      isLogin: Boolean(localStorage.getItem('isLogin')),
      username: Boolean(localStorage.getItem('user')),
    },
  };
};

export const LOADING = 'LOADING';
export const Loading = (value: boolean) => {
  return {
    type: LOADING,
    payload: value,
  };
};

export const LOGIN = 'LOGIN';

export const LoginAction = (username: string) => {
  localStorage.setItem('isLogin', 'true');
  localStorage.setItem('user', username);
  return {
    type: LOGIN,
    payload: {
      isLogin: true,
      username,
    },
  };
};
export const LOGOUT = 'LOGOUT';

export const LogoutAction = () => {
  localStorage.removeItem('isLogin');
  localStorage.removeItem('user');
  return {
    type: LOGIN,
    payload: {
      isLogin: false,
      username: '',
    },
  };
};
