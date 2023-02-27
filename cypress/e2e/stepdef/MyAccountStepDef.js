import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import User from "../api/Authentication";
import Notes from "../api/Notes";
import HelperFunction from "../util/utility";

let usr = new User();
let note = new Notes();
let email, password, name;
let response, statusCode;

Given("As a guest user i navigate to signup page", () => {
  email = HelperFunction.generateRandomEmailId();
  password = HelperFunction.generateStrongPassword();
  name = HelperFunction.generateName();
  cy.log(`Email : ${email} , Password : ${password}, Name : ${name}`);
});

When("I enter signup detail", () => {
  usr.createUser(name, email, password).then(resp => {
    response = resp.body;
    statusCode = resp.status;
    cy.log(statusCode);
  });
});

Then("I validate user created successfully", () => {
  expect(response).to.have.property("authtoken");
});

Then("Status code should be 200", () => {
  expect(statusCode).to.eq(200);
});

Given(
  "As a user i enter {string} {string} and {string}",
  (args1, args2, args3) => {
    name = `${args1}_ ${HelperFunction.generateName()}`;
    email = args2 + HelperFunction.generateRandomEmailId();
    password = args3;
    cy.log(` Name : ${name}, Email : ${email} , Password : ${password}`);
  }
);
