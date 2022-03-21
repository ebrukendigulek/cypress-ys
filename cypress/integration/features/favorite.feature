Feature: Favorite Page

Background:
    Given User opens the city page
    And User choose city "İstanbul"
    * Dont show pop-ups with cookies
    When User logins from home page

    Scenario: Add favorite restaurant
        When User add restaurant to the favorites
        And User navigate to favorite page from homepage
        Then User validates restaurant added to the favorites
        