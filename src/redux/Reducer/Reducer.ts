import { INIT_STATE, LOGIN_LOGOUT_ACTION, LOADING } from '../Actions/actions';

export interface State {
  isLogin: boolean | null;
  loading: boolean;
}

export const initialState: State = {
  isLogin: null,
  loading: false,
};

export const Reducer = (state: State = initialState, action: any) => {
  switch (action.type) {
    case INIT_STATE:
      return { ...state, isLogin: Boolean(localStorage.getItem('isLogin')) };
    case LOGIN_LOGOUT_ACTION:
      return { ...state, isLogin: action.payload };
    case LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
