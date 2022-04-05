import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  totalExpenses(expenses) {
    const total = expenses.reduce((acc, expense) => {
      const subTotal = expense.value * expense.exchangeRates[expense.currency].ask;
      acc += subTotal;
      return acc;
    }, 0);
    return +(total).toFixed(2);
  }

  render() {
    const { email, expense } = this.props;
    return (
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
          Despesas
          0
          { this.totalExpenses(expense) }
        </p>
        <p
          data-testid="header-currency-field"
        >
          BRL
        </p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expense: state.wallet.expense,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expense: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, null)(Header);
