import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { LOGIN } from './path';

const PrivateRoute = () => {
  let isLogin = useSelector<any>((state) => state.login.isLogin);

  return isLogin ? <Outlet /> : <Navigate to={LOGIN} />;
};

export default PrivateRoute;
