import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      // th é o cabeçalho da tabela.
      <table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        {expenses.map((element) => (
          // parseFloat ou Number dá no mesmo. preciso só que converta em número.
          <tr key={ element.id }>
            <td>{ element.description }</td>
            <td>{ element.tag }</td>
            <td>{ element.method }</td>
            <td>{ Number(element.value).toFixed(2) }</td>
            <td>{ element.exchangeRates[element.currency].name }</td>
            <td>{ Number(element.exchangeRates[element.currency].ask).toFixed(2) }</td>
            <td>
              {
                (parseFloat(element.value)
                  * parseFloat(element.exchangeRates[element.currency].ask))
                  .toFixed(2)
              }
            </td>
            <td>
              <td>Real</td>
              <button type="submit">Editar</button>
              <button type="submit">Excluir</button>
            </td>
          </tr>
        ))}
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Table);
