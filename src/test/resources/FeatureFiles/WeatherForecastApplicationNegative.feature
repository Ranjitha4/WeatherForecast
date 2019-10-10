Feature: 5 day weather forecast for a given location negative scenario

  Background: Opening 5 Day Weather Forecast application
    Given The Weather Forecast application is launched

  Scenario: Verifying the application title and header
    Then I verify that page title is "5 Weather Forecast"
    Then I verify the header "Five Day Weather Forecast for" is displayed

  Scenario Outline: Verifying 5 Day weather forecast data using different city names
    Then I enter the city name as "<CityName>" and press enter
    Then I verify that five day weather forecast is not displayed
    
    Examples: 
      | CityName  |
      |london| 
