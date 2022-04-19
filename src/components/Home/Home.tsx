import { useDispatch, useSelector } from 'react-redux';
import { Loading, LoginLogoutAction } from '../../redux/Actions/actions';
import { Comprar } from '../../redux/Actions/ProductAction';

const Home = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector<any>((state) => state.login.isLogin);
  const loading = useSelector<any>((state) => state.login.loading);
  const products: any = useSelector<any>((state) => state.product);

  const handleClickLogin = () => {
    dispatch(LoginLogoutAction(true));
  };

  const handleClickLogout = () => {
    dispatch(LoginLogoutAction(false));
  };

  const handleClickCargando = () => {
    dispatch(Loading(!loading));
  };

  const handleComprar = () => {
    dispatch(Comprar());
  };

  return (
    <div>
      Home: {isLogin ? 'true' : 'false'}
      <button onClick={handleClickLogin}>Login</button>
      <button onClick={handleClickLogout}>Logout</button>
      <button onClick={handleClickCargando}>Cargando</button>
      <div>
        <ul>
          {products.map((prod: any, index: number) => (
            <li key={index}>
             Name: {prod.name} - Precio: {prod.precio} - Cant: {prod.cant}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handleComprar}>Comprar</button>
    </div>
  );
};

export default Home;
