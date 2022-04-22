import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { Loading, LogoutAction } from '../../redux/Actions/actions';
import { PRODUCTO, PRODUCTOS } from '../../routes/path';

const Home = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector<any>((state) => state.login.isLogin);
  const loading = useSelector<any>((state) => state.login.loading);


  const handleClickLogout = () => {
    dispatch(LogoutAction());
  };

  const handleClickCargando = () => {
    dispatch(Loading(!loading));
  };

  return (
    <div>
      Home: {isLogin ? 'true' : 'false'}
      <button onClick={handleClickLogout}>Logout</button>
      <button onClick={handleClickCargando}>
        Carga ndo: {loading ? 'true' : 'false'}
      </button>
      <Link to={PRODUCTOS}>Productos</Link>
      <Link to={PRODUCTO}>Producto</Link>
      <Outlet />
    </div>
  );
};

export default Home;
