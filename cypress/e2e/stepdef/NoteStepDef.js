import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import Login from "../page/Login";
import Note from "../page/Addnote";

const login = new Login();
const note = new Note();
Given("As a user i navigate to Todo list home page", () => {
  cy.visit(Cypress.env("baseUrl"));
});

Then(
  "I enter {string} and {string} to log in todo list app",
  (args1, args2) => {
    login.getEmail().type(args1);
    login.getPassword().type(args2);
    login.getLoginButton().click();
    cy.wait(5000);
  }
);

Then(
  "I enter {string}, {string} & {string} for my note",
  (args1, args2, args3) => {
    note.getTitle().type(args1);
    note.getDescription().type(args2);
    note.getTag().type(args3);
    note.getSubmit().click();
  }
);

Then("I validate note added successfully", () => {
  cy.log("Validated");
});
