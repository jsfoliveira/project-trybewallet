import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrent } from '../actions/index';
import Header from '../Componentes/Header';
import Table from '../Componentes/Table';

class Wallet extends React.Component {
  // requisicao da api
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <Header />
        <form>
          <label
            htmlFor="value"
          >
            Valor da despesas
            <input
              id="value"
              name="value"
              data-testid="value-input"
            />
          </label>

          <label
            htmlFor="description"
          >
            Descrição da despesa
            <input
              id="description"
              name="description"
              data-testid="description-input"
            />
          </label>

          <label
            htmlFor="currency"
          >
            Moeda
            <select
              id="currency"
              name="currency"
              data-testid="currency-input"
            >
              {currencies.map(
                (element) => <option key={ element } value={ element }>{element}</option>,
              )}
            </select>
          </label>

          <label
            htmlFor="method"
          >
            <select
              id="method"
              data-testid="method-input"
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>

          <select data-testid="tag-input">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </form>
        <Table />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrent()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Wallet.propTypes = {
  currencies: PropTypes.string,
  getCurrencies: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
