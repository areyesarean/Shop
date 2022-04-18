import { useState } from 'react';
import { Formik, FormikErrors } from 'formik';
import { useDispatch } from 'react-redux';
import { LoginLogoutAction } from '../../redux/Actions/actions';
import { ButtonSend, Container, Input, Error, AppName } from './Style';
import Loading from '../Loading/Loading';

interface InitialValues {
  username: string;
  password: string;
}

const initialValues: InitialValues = {
  username: '',
  password: '',
};

const validate = (values: InitialValues) => {
  console.log(values);

  const errors: FormikErrors<InitialValues> = {};
  if (!values.username) {
    errors.username = 'El nombre de usuario es requerido';
  }
  if (values.password.length < 6) {
    errors.password = 'La contraseña es muy corta';
  }
  if (!values.password) {
    errors.password = 'La contraseña es requerida';
  }
  return errors;
};

const Login = () => {
  const dispatch = useDispatch();
  const [err, setErr] = useState('');
  const [load, setLoad] = useState(true);

  const handleSubmit = (form: InitialValues) => {
    setLoad(true);
    if (form.username !== 'areyesarean' && form.password !== 'asd123') {
      setErr('Usuario o contraseña incorrectos');
      setLoad(false);
    } else {
      dispatch(LoginLogoutAction(true));
      setLoad(false);
    }
  };

  return (
    <div>
      {/* {load && <Loading />} */}
      <Container>
        <AppName>Home Cloud</AppName>
        {err && <Error style={{ color: '#FF5252' }}>{err}</Error>}
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validate={validate}
        >
          {({ errors, values, touched, handleChange, handleSubmit }) => (
            <form autoComplete="off" onSubmit={handleSubmit}>
              <Input
                type="text"
                name="username"
                placeholder="Nombre de usuario"
                value={values.username}
                onChange={handleChange}
                colorBorder={errors.username ? 'red' : 'white'}
              />
              <Error>
                {errors.username && touched.username && errors.username}
              </Error>
              <Input
                type="text"
                name="password"
                placeholder="Contraseña"
                value={values.password}
                onChange={handleChange}
                colorBorder={errors.password ? 'red' : 'white'}
              />
              <Error>
                {errors.password && touched.password && errors.password}
              </Error>
              <ButtonSend type="submit">Entrar</ButtonSend>
            </form>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default Login;
