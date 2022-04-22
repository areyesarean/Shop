import { INIT_STATE, LOADING, LOGIN, LOGOUT } from '../Actions/actions';

export interface State {
  isLogin: boolean;
  loading: boolean;
  user: string;
}

export const initialState: State = {
  isLogin: Boolean(localStorage.getItem('isLogin')),
  loading: false,
  user: localStorage.getItem('user') || '',
};

export const Reducer = (state: State = initialState, action: any) => {
  switch (action.type) {
    case INIT_STATE:
      return {
        ...state,
        isLogin: action.payload.isLogin,
        user: action.payload.username,
      };
    case LOGIN:
      return {
        ...state,
        isLogin: action.payload.isLogin,
        user: action.payload.username,
      };
    case LOGOUT:
      return {
        ...state,
        isLogin: action.payload.isLogin,
        user: action.payload.username,
      };
    case LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
