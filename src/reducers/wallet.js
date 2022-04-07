// segui o exemplo da aula de braddock
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};
const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'REQUEST':
    return {
      ...state,
    };
  case 'GET_CURRENCIES_ACTION':
    return {
      ...state,
      currencies: action.currencies,
    };
  case 'GET_API_FAIL_ACTION':
    return {
      ...state,
      error: action.error,
    };
  case 'SAVE_EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };
  case 'EDIT_EXPENSE':
    return {
      ...state,
      expenses: state.expenses.filter((element) => element.id !== action.expenses.id),
    };
  default:
    return state;
  }
};

export default wallet;
