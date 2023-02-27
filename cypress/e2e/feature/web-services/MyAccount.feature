Feature: User managment API for Mynotebook app

    This feature will test Myaccount functionality of MyNotebook app

    Scenario: Test Sign up fucntionality for mynotebook app using API
        Given As a guest user i navigate to signup page
        And I enter signup detail
        Then I validate user created successfully
        And Status code should be 200

    Scenario Outline: Test sign up fucntionality with <name> and <email>
        Given As a user i enter '<name>' '<email>' and '<password>'
        And I enter signup detail
        Then I validate user created successfully
        And Status code should be 200

        Examples:
            | name        | email        | password               |
            | Random_name | Random_email | Random_Strong_password |
            | Random_name | Random_email | Random_Strong_password |
            | Random_name | Random_email | Random_Strong_password |
            | Random_name | Random_email | Random_Strong_password |