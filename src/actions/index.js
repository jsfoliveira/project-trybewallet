// Coloque aqui suas actions
export function emailAction(email) {
  return {
    type: 'GET_EMAIL_ACTION',
    email,
  };
}

export function passwordAction(password) {
  return {
    type: 'GET_PASSWORD_ACTION',
    password,
  };
}
