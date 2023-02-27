class Login {
  getEmail() {
    return cy.get("input[type='email']");
  }

  getPassword() {
    return cy.get("input[type='password']");
  }

  getLoginButton() {
    return cy.get("button[type='submit']");
  }
}

export default Login;
