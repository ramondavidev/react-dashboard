// *https://www.registers.service.gov.uk/registers/country/use-the-api*
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import axios from 'axios';
import MuiAlert from '@material-ui/lab/Alert';
import api from '~/services/api';
const Alert = props => <MuiAlert elevation={6} variant="filled" {...props} />;

const Asynchronous = ({
  label,
  margin,
  endpoint,
  form,
  field,
  fieldToSelect,
  filterBuilder
}) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [alert, setAlert] = useState({
    open: false,
    mode: 'warning',
    msg: ''
  });
  const storage = localStorage.getItem('siafplus');
  const { token } = JSON.parse(storage);
  const loading = open && options.length === 0;
  const fieldMeta = form.getFieldMeta(field.name);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlert({ open: false, mode: 'alert', msg: '' });
  };

  const prepareData = data => {
    if (data.hasOwnProperty('items')) {
      return data.items; //caso seja retornado array de items dentro do response
    } else if (Array.isArray(data)) {
      return data;
    } else {
      return [];
    }
  };

  const fetchData = async active => {
    try {
      let url = endpoint;
      if (filterBuilder) {
        url = url + `?$filter=contains(${filterBuilder}, ${fieldMeta.value})`;
      }
      const { data } = await api.get(url);
      const response = prepareData(data);
      if (active) {
        setOptions(response);
      }
    } catch (error) {
      console.log(error.message || error.response);
      setAlert({
        open: true,
        mode: 'error',
        msg: 'Ops! Falha ao carregar os dados desse campo'
      });
    }
  };

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    fetchData(active);

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <>
      {alert.open && (
        <Snackbar
          open={alert.open}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity={alert.mode}>
            {alert.msg}
          </Alert>
        </Snackbar>
      )}
      <Autocomplete
        id="asynchronous-demo"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        getOptionSelected={(option, value) =>
          String(option[fieldToSelect]) === String(value[fieldToSelect])
        }
        getOptionLabel={option => String(option[fieldToSelect])}
        options={options}
        loading={loading}
        onChange={(_, value) => form.setFieldValue(field.name, value)}
        renderInput={params => (
          <TextField
            {...params}
            label={label}
            variant="outlined"
            margin={margin}
            error={Boolean(fieldMeta.touched && fieldMeta.error)}
            fullWidth
            helperText={fieldMeta.touched && fieldMeta.error}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              )
            }}
          />
        )}
      />
    </>
  );
};

export default Asynchronous;
