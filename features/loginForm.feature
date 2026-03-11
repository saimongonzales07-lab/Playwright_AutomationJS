Feature: Login functionality

  Scenario: Successful login
    Given I open the login page
    When I enter username "standard_user" and password "secret_sauce"
    And I click the login button
    Then I should see the Inventory page

  Scenario: Failed login with incorrect credentials
    Given I open the login page
    When I enter username "invalid_user" and password "wrong_password"
    And I click the login button
    Then I should see an error message "Username and password do not match any user in this service"

  Scenario: Failed login with missing password
    Given I open the login page
    When I enter username "standard_user" and no password
    And I click the login button
    Then I should see an error message "Password is required"