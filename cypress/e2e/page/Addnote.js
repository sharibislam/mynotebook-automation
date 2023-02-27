class Note {
  getTitle() {
    return cy.get("input[id='title']");
  }

  getDescription() {
    return cy.get("input[id='description']");
  }

  getTag() {
    return cy.get("input[id='tag']");
  }

  getSubmit() {
    return cy.get("button[type='submit']");
  }
}

export default Note;
