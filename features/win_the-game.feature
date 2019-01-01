@javascript
Feature: Win The Game

  Scenario: Load prefight page
    Given I am at the website
    Then I should see the pre fight panel

  Scenario: load fight page
    Given I am at the website
    When I click start button
    Then I should see the fight panel
