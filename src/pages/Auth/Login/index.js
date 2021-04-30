import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { fade, useTheme } from '@material-ui/core';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';

// import useAuth from '~/hooks/auth-hook';
// import useIsMountedRef from '~/hooks/useIsMountedRef';
import * as authActions from '~/store/slices/auth/auth-actions';

import Page from '~/components/Page';
import useStyles from './index.styles';

const Login = ({ className, ...rest }) => {
  const theme = useTheme();
  const classes = useStyles();
  const dispatch = useDispatch();

  const { loading, filiais } = useSelector(state => state.auth);
  const [validationSchema] = useState(
    Yup.object().shape({
      login: Yup.string()
        .email('Informar um email válido')
        .max(255)
        .required('Email é obrigatório'),
      senha: Yup.string()
        .max(255)
        .required('Senha é obrigatório')
    })
  );

  const handleSubmit = async values => {
    dispatch(authActions.loginRequest({ ...values }));
  };

  return (
    <Page title="Login">
      <Card className={classes.root}>
        <CardContent>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <h1 className={classes.logo}>
              SIAF<span>Plus+</span>
            </h1>
            <p style={{ fontSize: 14 }}>
              Sistema integrado administrativo financeiro
            </p>
          </Box>
          <Divider
            style={{
              marginTop: 16,
              marginBottom: 16,
              marginLeft: -32,
              marginRight: -32
            }}
          />
          <Box flexGrow={1} mt={3} className={classes.cardContent}>
            <Formik
              initialValues={{
                login: '',
                senha: '',
                filialSelecionada: null,
                submit: null
              }}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              {({
                errors,
                handleBlur,
                handleChange,
                handleSubmit,
                setFieldValue,
                touched,
                values
              }) => (
                <form noValidate onSubmit={handleSubmit} {...rest}>
                  {filiais?.length > 0 ? (
                    <>
                      <FormControl variant="outlined" fullWidth>
                        <InputLabel id="filial-selecionada-select-outlined-label">
                          Filiais de acesso
                        </InputLabel>
                        <Select
                          labelId="filial-selecionada-select-outlined-label"
                          id="filial-selecionada-select-outlined"
                          value={values?.filialSelecionada}
                          label="Filiais de acesso"
                          fullWidth
                          disabled={loading}
                          renderValue={filial => filial?.razaoSocial}
                        >
                          {filiais?.map(filial => (
                            <MenuItem
                              key={filial._id}
                              value={filial}
                              onClick={event => {
                                event.persist();
                                setFieldValue('filialSelecionada', filial);
                              }}
                            >
                              {filial?.razaoSocial}
                              {'  '} ( <small>{filial?.cnpj}</small> )
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </>
                  ) : (
                    <>
                      <TextField
                        error={Boolean(touched.login && errors.login)}
                        fullWidth
                        autoFocus
                        helperText={touched.login && errors.login}
                        label="E-mail"
                        margin="normal"
                        name="login"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        disabled={loading}
                        type="email"
                        value={values.login}
                        variant="outlined"
                      />
                      <TextField
                        error={Boolean(touched.senha && errors.senha)}
                        fullWidth
                        helperText={touched.senha && errors.senha}
                        label="Senha"
                        margin="normal"
                        name="senha"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        disabled={loading}
                        type="password"
                        value={values.senha}
                        variant="outlined"
                      />
                    </>
                  )}

                  {errors.submit && (
                    <Box mt={3}>
                      <FormHelperText error>{errors.submit}</FormHelperText>
                    </Box>
                  )}
                  <Box mt={2}>
                    <Button
                      color="secondary"
                      disabled={loading}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      {loading ? (
                        <>
                          <CircularProgress
                            size={24}
                            style={{ marginRight: 12 }}
                          />
                          Carregando...
                        </>
                      ) : (
                        <>
                          {filiais?.length > 0
                            ? 'Selecionar filial'
                            : 'Acessar'}
                        </>
                      )}
                    </Button>
                  </Box>
                </form>
              )}
            </Formik>
          </Box>
        </CardContent>
        <CardContent
          style={{
            marginTop: 16,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: fade(theme.palette.common.black, 0.5)
          }}
        >
          <p style={{ color: '#FFF' }}>Adsoft Gestão Empresarial - v1.0.0</p>

          <p style={{ color: '#FFF' }}>
            © {new Date().getFullYear()}. TODOS OS DIREITOS RESERVADOS
          </p>
        </CardContent>
      </Card>
    </Page>
  );
};

Login.propTypes = {
  className: PropTypes.string
};

export default Login;
