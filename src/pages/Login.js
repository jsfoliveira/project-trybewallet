import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { emailAction } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isButtonDisabled: true,
    };
  }

handleClick= (event) => {
  event.preventDefault();
  const { email } = this.state;
  const { history, getEmailValue } = this.props;
  getEmailValue(email);
  history.push('/carteira');
}

validateForm = () => {
  const { email, password } = this.state;
  // validando password
  const numberMagicEmail = 6;
  const passwordValidation = password.length >= numberMagicEmail;
  // Validando email. Busquei no https://regexr.com/
  // O método match() retorna uma correspondência entre uma string com uma expressão regular.
  const emailValidation = email.match(/\S+@\S+\.\S+/);
  if (emailValidation && passwordValidation) {
    this.setState({
      isButtonDisabled: false,
    });
  } else {
    this.setState({
      isButtonDisabled: true,
    });
  }
}

// controlar os valores digitados no input
handleChange = (event) => {
  const { name, value } = event.target;
  console.log(event.target.name);
  console.log(event.target.value);
  this.setState({
    [name]: value,
  }, this.validateForm);
}

render() {
  const { email, password, isButtonDisabled } = this.state;
  return (
    <div>
      <form>
        <label htmlFor="email">
          E-mail
          <input
            id="email"
            type="text"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            id="password"
            type="text"
            name="password"
            value={ password }
            onChange={ this.handleChange }
            data-testid="password-input"
          />
        </label>
        <button
          type="submit"
          disabled={ isButtonDisabled }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
}

const mapDispatchToProps = (dispatch) => ({
  getEmailValue: (email) => dispatch(emailAction(email)),
});

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
