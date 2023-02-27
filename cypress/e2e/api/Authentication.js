/// <reference types="cypress" />

const HOSTURL = Cypress.env("hostUrl");
console.log("Test have fun");

class User {
  createUser(name, email, password) {
    return cy.request("POST", HOSTURL + "api/auth/createuser", {
      name: name,
      email: email,
      password: password,
    });
  }

  getUserDetails(authToken) {
    return cy.request({
      method: "POST",
      url: `${HOSTURL}api/auth/getuser`,
      headers: {
        "auth-token": authToken,
      },
    });
  }

  getAuthToken(email, password) {
    return cy.request("POST", `${HOSTURL}api/auth/login`, {
      email: email,
      password: password,
    });
  }
}

export default User;
