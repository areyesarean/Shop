import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { InitState } from './redux/Actions/actions';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import './App.css';
import Loading from './components/Loading/Loading';
import Productos from './components/Productos/Productos';
import { LOGIN, PRODUCTOS, STORE } from './routes/path';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector<any>((state) => state.login.loading);

  useEffect(() => {
    dispatch(InitState());
  }, [dispatch]);

  return (
    <div>
      {(loading as boolean) && <Loading />}
      <Routes>
        <Route path={LOGIN} element={<PublicRoute />}>
          <Route path="" element={<Login />} />
        </Route>
        <Route path={STORE} element={<PrivateRoute />}>
          <Route path="" element={<Home />}>
            <Route path={PRODUCTOS} element={<Productos />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to={STORE} />} />
      </Routes>
    </div>
  );
}

export default App;
