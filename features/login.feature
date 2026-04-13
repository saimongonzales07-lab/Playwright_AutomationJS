Feature: Login functionality

  Scenario: Valid user login
    Given I open the login page
    When I login with valid credentials
    Then I should see the Products page

  Scenario: Validation incorrect Password
    Given I open the login page
    When I login using invalid user using "standard_user" and "Invalid_password"
    Then I should see the Incorrect "Epic sadface: Username and password do not match any user in this service"