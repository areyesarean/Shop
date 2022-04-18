import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { InitState } from './redux/Actions/actions';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import { Background } from './Style';
import './App.css';
import { useSelector } from 'react-redux';
import Loading from './components/Loading/Loading';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector<any>((state) => state.loading);

  useEffect(() => {
    //Incializa el estado tomando como referencia el valor en el local storage
    dispatch(InitState());
  }, [dispatch]);

  return (
    <Background>
      {(loading as boolean) && <Loading />}
      <Routes>
        <Route>
          <Route path="/" element={<PublicRoute />}>
            <Route path="" element={<Login />} />
          </Route>
          <Route path="/home" element={<PrivateRoute />}>
            <Route path="" element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </Background>
  );
}

export default App;
