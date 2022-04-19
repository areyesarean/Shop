import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const isLogin = useSelector<any>((state) => state.login.isLogin);
  return isLogin ? <Navigate to={'/home'} /> : <Outlet />;
};

export default PublicRoute;
