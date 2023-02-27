Feature: Adding a feature to test add note functionality

    This feature will allow a exixsting user to add note and retrive existing note.

    Scenario: Add note as existing user
        Given As a user i navigate to Todo list home page
        And I enter "web_ui_Test@test.com" and "Next@1234" to log in todo list app
        And I enter "First note", "Adding this note for further" & "General" for my note
        Then I validate note added successfully


