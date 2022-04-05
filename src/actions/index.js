import fetchApi from '../services/fetchApi';

export const GET_EMAIL_ACTION = 'GET_EMAIL_ACTION';
export const REQUEST = 'REQUEST';
export const GET_CURRENCIES_ACTION = 'GET_CURRENCIES_ACTION';
export const GET_API_FAIL_ACTION = 'GET_API_FAIL_ACTION';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';

// Action que retorna o seu type e o email.
export function emailAction(email) {
  return {
    type: GET_EMAIL_ACTION,
    email,
  };
}

export const requestApi = () => ({
  type: REQUEST,
});
// Action da requisição feita com sucesso.
export function currenciesAction(currencies) {
  return {
    type: GET_CURRENCIES_ACTION,
    currencies,
  };
}
// Action da falha na requisição.
export function apiFailAction(error) {
  return {
    type: GET_API_FAIL_ACTION,
    error,
  };
}
// Action das despesas.
export function saveExpenseAction(value, exchangeRates) {
  return {
    type: SAVE_EXPENSE,
    // expenses: { exchangeRato, ...value },
    expenses: { ...value, exchangeRates },
  };
}

// THUNK
export function fetchCurrent() {
  return async (dispatch) => {
    // avisa para a aplicação que estamos iniciado o fetch.
    dispatch(requestApi());
    try {
      // faz o fetch da api.
      const location = await fetchApi();
      // console.log(location);
      // Remove das informações trazidas pela API a opção 'USDT'
      const currencies = Object.keys(location).filter((element) => element !== 'USDT');
      // avisa para a aplicação que estamos iniciado o fetch com o filtro, sem USDT.
      dispatch(currenciesAction(currencies));
    } catch (error) {
      // avisa para a aplicação que está dando erro na fetch.
      dispatch(apiFailAction(error));
    }
  };
}

// export function fetchRate(expenses) {
//   return async (dispatch) => {
//     dispatch(requestApi());
//     try {
//       const datas = await fetchApi();
//       console.log(datas);
//       dispatch(saveExpenseAction(expenses, datas));
//     } catch (error) {
//       dispatch(apiFailAction(error));
//     }
//   };
// }

export function fetchRate(exchangeRates) {
  return (dispatch) => {
    dispatch(requestApi());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => dispatch(saveExpenseAction(exchangeRates, data)))
      .catch((error) => dispatch(apiFailAction(error)));
  };
}
