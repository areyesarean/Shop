export const LOGIN_LOGOUT_ACTION = 'LOGIN_LOGOUT_ACTION';
export const INIT_STATE = 'INIT_STATE';
export const LOADING = 'LOADING';

export const LoginLogoutAction = (value: boolean) => {
  value
    ? window.localStorage.setItem('isLogin', String(value))
    : window.localStorage.removeItem('isLogin');
  return {
    type: LOGIN_LOGOUT_ACTION,
    payload: value,
  };
};

export const InitState = () => {
  return {
    type: INIT_STATE,
  };
};

export const Loading = (value: boolean) => {
  return {
    type: LOADING,
    payload: value
  }
}
