import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrent, fetchRate } from '../actions/index';
import Table from '../Componentes/Table';

const alimentacao = 'Alimentação';
class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      valueExpense: 0,
      descriptionExpense: '',
      currencyExpense: 'USD',
      methodExpense: 'Dinheiro',
      tagExpense: alimentacao,
    };
  }

  // requisicao da api
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  // controlar inputs
handleChange = (event) => {
  const { name, value } = event.target;
  this.setState({
    [name]: value,
  });
}

// Após adicionar a despesa, limpe o valor do campo valor da despesa
handleClick = () => {
  const { getRates, expenses } = this.props;
  const {
    valueExpense,
    descriptionExpense,
    currencyExpense,
    methodExpense,
    tagExpense,
  } = this.state;
  // para criar o id de acordo com o tamanho do expense.
  const expense = {
    id: expenses.length,
    value: valueExpense,
    description: descriptionExpense,
    currency: currencyExpense,
    method: methodExpense,
    tag: tagExpense,
  };
  getRates(expense);
  this.setState({
    valueExpense: 0,
    descriptionExpense: '',
    currencyExpense: 'USD',
    methodExpense: 'Dinheiro',
    tagExpense: alimentacao,
  });
}

calculation = () => {
  const { expenses } = this.props;
  // pra usar reducer precisa transformar a string em número. o ask é o câmbio da moeda. o return do total vai gerar um valor com várias casa decimais, preciso arredondar pra 2 com toFixed.s
  if (expenses.length === 0) {
    return 0;
  }
  return expenses
    .reduce((total, valor) => {
      total
  += Number(valor.value)
  * Number(valor.exchangeRates[valor.currency].ask);
      // console.log(total);
      // console.log(valor.exchangeRates);
      return total;
    }, 0).toFixed(2);
}

render() {
  const { email, currencies } = this.props;
  // console.log(this.props.expenses);
  const { valueExpense,
    descriptionExpense,
    currencyExpense,
    methodExpense,
    tagExpense } = this.state;
  return (
    <div>
      <header>
        <p
          data-testid="email-field"
        >
          Email
          { email }
        </p>
        <p
          data-testid="total-field"
        >
          { this.calculation() }
        </p>
        <p
          data-testid="header-currency-field"
        >
          BRL
        </p>
      </header>
      <form>
        <label
          htmlFor="valueExpense"
        >
          Valor da despesas
          <input
            id="valueExpense"
            name="valueExpense"
            value={ valueExpense }
            onChange={ this.handleChange }
            data-testid="value-input"
          />
        </label>

        <label
          htmlFor="descriptionExpense"
        >
          Descrição da despesa
          <input
            id="descriptionExpense"
            name="descriptionExpense"
            value={ descriptionExpense }
            onChange={ this.handleChange }
            data-testid="description-input"
          />
        </label>

        <label
          htmlFor="currencyExpense"
        >
          Moeda
          <select
            id="currencyExpense"
            name="currencyExpense"
            value={ currencyExpense }
            onChange={ this.handleChange }
            data-testid="currency-input"
          >
            {currencies.map(
              (element) => <option key={ element } value={ element }>{element}</option>,
            )}
          </select>
        </label>

        <label
          htmlFor="methodExpenset"
        >
          <select
            id="methodExpenset"
            name="methodExpense"
            value={ methodExpense }
            onChange={ this.handleChange }
            data-testid="method-input"
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label
          htmlFor="tagExpense"
        >
          <select
            value={ tagExpense }
            name="tagExpense"
            id="tagExpense"
            onChange={ this.handleChange }
            data-testid="tag-input"
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
      <Table />
    </div>
  );
}
}

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrent()),
  getRates: (expense) => dispatch(fetchRate(expense)),
});

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  currencies: PropTypes.string.isRequired,
  getCurrencies: PropTypes.isRequired,
  getRates: PropTypes.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
