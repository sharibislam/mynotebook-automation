/// <reference types="cypress" />

const HOSTURL = "http://localhost:5000/";

class Notes {
  addNote(title, description, tag, authToken) {
    return cy.request({
      method: "POST",
      url: `${HOSTURL}api/note/addnote`,
      body: {
        title: title,
        description: description,
        tage: tag,
      },
      headers: {
        "auth-token": authToken,
      },
    });
  }

  updateNote(title, name, tag, authToken, _id) {
    return cy.request({
      method: "PUT",
      url: `${HOSTURL}api/note/updatenote/${_id}`,
      body: {
        title: title,
        name: name,
        tage: tag,
      },
      headers: {
        "auth-token": authToken,
      },
    });
  }

  deleteNote(authToken, _id) {
    return cy.request({
      method: "DELETE",
      url: `${HOSTURL}api/note/deletenote/${_id}`,
      headers: {
        "auth-token": authToken,
      },
    });
  }

  fetchAllNote(authToken) {
    return cy.request({
      method: "GET",
      url: `${HOSTURL}api/note/fetachallnotes`,
      headers: {
        "auth-token": authToken,
      },
    });
  }
}

export default Notes;
