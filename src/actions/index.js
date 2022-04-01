import fetchApi from '../services/fetchApi';

export const GET_EMAIL_ACTION = 'GET_EMAIL_ACTION';
export const REQUEST = 'REQUEST';
export const GET_CURRENCIES_ACTION = 'GET_CURRENCIES_ACTION';
export const GET_API_FAIL_ACTION = 'GET_API_FAIL_ACTION';

// Coloque aqui suas actions
export function emailAction(email) {
  return {
    type: GET_EMAIL_ACTION,
    email,
  };
}

export const requestApi = () => ({
  type: REQUEST,
});

export function currenciesAction(currencies) {
  return {
    type: GET_CURRENCIES_ACTION,
    currencies,
  };
}

export function apiFailAction(error) {
  return {
    type: GET_API_FAIL_ACTION,
    error,
  };
}

// THUNK
export function fetchCurrent() {
  return async (dispatch) => {
    // avisa para a aplicacao que estamos iniciado o fetch
    dispatch(requestApi());
    try {
      // faz o fetch da api
      const location = await fetchApi();
      // Remove das informações trazidas pela API a opção 'USDT'
      const currencies = Object.keys(location).filter((element) => element !== 'USDT');
      dispatch(currenciesAction(currencies));
    } catch (error) {
      dispatch(apiFailAction(error));
    }
  };
}
