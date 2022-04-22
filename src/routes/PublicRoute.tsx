import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { STORE } from './path';

const PublicRoute = () => {
  const isLogin = useSelector<any>((state) => state.login.isLogin);
  return isLogin ? <Navigate to={STORE} /> : <Outlet />;
};

export default PublicRoute;
