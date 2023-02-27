//const { describe } = require("mocha");
//import { use } from "chai";
import User from "../api/Authentication";
import Notes from "../api/Notes";
import HelperFunction from "../util/utility";

let usr = new User();
let note = new Notes();
describe("First api test", () => {
  it("first test case ", () => {
    let email = HelperFunction.generateRandomEmailId();
    let password = HelperFunction.generateStrongPassword();
    let name = HelperFunction.generateName();
    cy.log(email);
    cy.log(password);
    cy.log(name);
    usr.createUser(name, email, password).then(response => {
      cy.log(response.body.authtoken);
      note
        .addNote(
          "Sharib memo",
          "This is memo to remember",
          "General",
          response.body.authtoken
        )
        .then(response => {
          cy.log(response.body);
        });
    });
  });
});
