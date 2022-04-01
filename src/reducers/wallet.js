// segui o exemplo da aula de braddock
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
};
const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'REQUEST':
    return {
      ...state,
      isFetching: true,
    };
  case 'GET_CURRENCIES_ACTION':
    return {
      ...state,
      isFetching: false,
      currencies: action.currencies,
    };
  case 'GET_API_FAIL_ACTION':
    return {
      ...state,
      isFetching: false,
      error: action.error,
    };
  case 'EXPENSES':
    return {
      ...state,
      expenses: action.expenses,
    };
  default:
    return state;
  }
};

export default wallet;
