import { useDispatch, useSelector } from 'react-redux';
import { LoginLogoutAction } from '../../redux/Actions/actions';

const Home = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector<any>((state) => state.isLogin);

  const handleClickLogin = () => {
    dispatch(LoginLogoutAction(true));
  };
  
  const handleClickLogout = () => {
    dispatch(LoginLogoutAction(false));
  };

  return (
    <div>
      Home: {isLogin ? 'true' : 'false'}
      <button onClick={handleClickLogin}>Login</button>
      <button onClick={handleClickLogout}>Logout</button>
    </div>
  );
};

export default Home;
