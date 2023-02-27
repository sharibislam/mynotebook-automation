describe("My first test", () => {
  it("Visits the website", () => {
    cy.visit("https://www.google.com/");
    cy.title().should("include", "Google");
  });

  it("Validate Title ", () => {
    cy.visit("https://www.google.com/");
    cy.title().should("include", "Google");
  });
});
