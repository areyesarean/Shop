import { useState } from 'react';
import { Formik, FormikErrors } from 'formik';
import { useDispatch } from 'react-redux';
import {
  Loading,
  LoginAction,
} from '../../redux/Actions/actions';
import { ButtonSend, Container, Input, Error, AppName } from './Style';

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

  const handleSubmit = (form: InitialValues) => {
    dispatch(Loading(true));
    setTimeout(() => {
      if (form.username !== 'areyesarean' && form.password !== 'asd123') {
        setErr('Usuario o contraseña incorrectos');
        dispatch(Loading(false));
      } else {
        dispatch(Loading(false));
        dispatch(LoginAction(form.username));
      }
    }, 4000);
  };

  return (
    <div>
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
