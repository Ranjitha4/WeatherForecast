$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("WeatherForecastApplication.feature");
formatter.feature({
  "line": 1,
  "name": "5 day weather forecast for a given location",
  "description": "",
  "id": "5-day-weather-forecast-for-a-given-location",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6064008817,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Opening 5 Day Weather Forecast application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "The Weather Forecast application is launched",
  "keyword": "Given "
});
formatter.match({
  "location": "WeatherFeatureSteps.the_Weather_Forecast_application_is_launched()"
});
formatter.result({
  "duration": 3567756862,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verifying the application title and header",
  "description": "",
  "id": "5-day-weather-forecast-for-a-given-location;verifying-the-application-title-and-header",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I verify that page title is \"5 Weather Forecast\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I verify the header \"Five Day Weather Forecast for\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5 Weather Forecast",
      "offset": 29
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_that_page_title_is(String)"
});
formatter.result({
  "duration": 18687347,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Five Day Weather Forecast for",
      "offset": 21
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_header_is_displayed(String)"
});
formatter.result({
  "duration": 265060564,
  "status": "passed"
});
formatter.after({
  "duration": 1297483975,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Verifying 5 Day weather forecast data using different city names",
  "description": "",
  "id": "5-day-weather-forecast-for-a-given-location;verifying-5-day-weather-forecast-data-using-different-city-names",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I enter the city name as \"\u003cCityName\u003e\" and press enter",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I verify that five day weather forecast is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click on day \"1\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "The three hourly forecast is \"Displayed\" for day \"1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I verify the day \"1\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I verify the day \"1\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I verify the day \"1\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I verify the day \"1\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I click on day \"1\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I click on day \"2\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The three hourly forecast is \"Displayed\" for day \"2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I verify the day \"2\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I verify the day \"2\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I verify the day \"2\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I verify the day \"2\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I click on day \"2\"",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I click on day \"3\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "The three hourly forecast is \"Displayed\" for day \"3\"",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I verify the day \"3\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I verify the day \"3\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I verify the day \"3\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I verify the day \"3\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I click on day \"3\"",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"3\"",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I click on day \"4\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "The three hourly forecast is \"Displayed\" for day \"4\"",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I verify the day \"4\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I verify the day \"4\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "I verify the day \"4\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I verify the day \"4\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I click on day \"4\"",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"4\"",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I click on day \"5\"",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "The three hourly forecast is \"Displayed\" for day \"5\"",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I verify the day \"5\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "I verify the day \"5\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "I verify the day \"5\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "I verify the day \"5\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "I click on day \"5\"",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"5\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 54,
  "name": "",
  "description": "",
  "id": "5-day-weather-forecast-for-a-given-location;verifying-5-day-weather-forecast-data-using-different-city-names;",
  "rows": [
    {
      "cells": [
        "CityName"
      ],
      "line": 55,
      "id": "5-day-weather-forecast-for-a-given-location;verifying-5-day-weather-forecast-data-using-different-city-names;;1"
    },
    {
      "comments": [
        {
          "line": 56,
          "value": "#      | aberdeen  |"
        },
        {
          "line": 57,
          "value": "#      | dundee    |"
        },
        {
          "line": 58,
          "value": "#      | edinburgh |"
        },
        {
          "line": 59,
          "value": "#      | glasgow   |"
        },
        {
          "line": 60,
          "value": "#      | perth     |"
        }
      ],
      "cells": [
        "stirling"
      ],
      "line": 61,
      "id": "5-day-weather-forecast-for-a-given-location;verifying-5-day-weather-forecast-data-using-different-city-names;;2"
    },
    {
      "cells": [
        "london"
      ],
      "line": 62,
      "id": "5-day-weather-forecast-for-a-given-location;verifying-5-day-weather-forecast-data-using-different-city-names;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3136523972,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Opening 5 Day Weather Forecast application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "The Weather Forecast application is launched",
  "keyword": "Given "
});
formatter.match({
  "location": "WeatherFeatureSteps.the_Weather_Forecast_application_is_launched()"
});
formatter.result({
  "duration": 3112731840,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 56,
      "value": "#      | aberdeen  |"
    },
    {
      "line": 57,
      "value": "#      | dundee    |"
    },
    {
      "line": 58,
      "value": "#      | edinburgh |"
    },
    {
      "line": 59,
      "value": "#      | glasgow   |"
    },
    {
      "line": 60,
      "value": "#      | perth     |"
    }
  ],
  "line": 61,
  "name": "Verifying 5 Day weather forecast data using different city names",
  "description": "",
  "id": "5-day-weather-forecast-for-a-given-location;verifying-5-day-weather-forecast-data-using-different-city-names;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I enter the city name as \"stirling\" and press enter",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I verify that five day weather forecast is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click on day \"1\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "The three hourly forecast is \"Displayed\" for day \"1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I verify the day \"1\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I verify the day \"1\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I verify the day \"1\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I verify the day \"1\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I click on day \"1\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I click on day \"2\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The three hourly forecast is \"Displayed\" for day \"2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I verify the day \"2\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I verify the day \"2\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I verify the day \"2\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I verify the day \"2\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I click on day \"2\"",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I click on day \"3\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "The three hourly forecast is \"Displayed\" for day \"3\"",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I verify the day \"3\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I verify the day \"3\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I verify the day \"3\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I verify the day \"3\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I click on day \"3\"",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"3\"",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I click on day \"4\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "The three hourly forecast is \"Displayed\" for day \"4\"",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I verify the day \"4\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I verify the day \"4\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "I verify the day \"4\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I verify the day \"4\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I click on day \"4\"",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"4\"",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I click on day \"5\"",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "The three hourly forecast is \"Displayed\" for day \"5\"",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I verify the day \"5\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "I verify the day \"5\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "I verify the day \"5\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "I verify the day \"5\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "I click on day \"5\"",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"5\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "stirling",
      "offset": 26
    }
  ],
  "location": "WeatherFeatureSteps.i_enter_the_city_name_as_and_press_enter(String)"
});
formatter.result({
  "duration": 3069216233,
  "status": "passed"
});
formatter.match({
  "location": "WeatherFeatureSteps.i_verify_that_five_day_weather_forecast_is_displayed()"
});
formatter.result({
  "duration": 65101170,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "WeatherFeatureSteps.i_click_on_day(String)"
});
formatter.result({
  "duration": 967301715,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 50
    }
  ],
  "location": "WeatherFeatureSteps.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 717819669,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 158928799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 349120830,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 843520963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 327028360,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "WeatherFeatureSteps.i_click_on_day(String)"
});
formatter.result({
  "duration": 829174020,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 54
    }
  ],
  "location": "WeatherFeatureSteps.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 645666400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "WeatherFeatureSteps.i_click_on_day(String)"
});
formatter.result({
  "duration": 1135022880,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 50
    }
  ],
  "location": "WeatherFeatureSteps.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 728628514,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 249442334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 272400476,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 1431252524,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 792781014,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "WeatherFeatureSteps.i_click_on_day(String)"
});
formatter.result({
  "duration": 780783432,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 54
    }
  ],
  "location": "WeatherFeatureSteps.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 629063803,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "WeatherFeatureSteps.i_click_on_day(String)"
});
formatter.result({
  "duration": 978961506,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "3",
      "offset": 50
    }
  ],
  "location": "WeatherFeatureSteps.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 674147437,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 143151713,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 305524456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 1626723366,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 756461188,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "WeatherFeatureSteps.i_click_on_day(String)"
});
formatter.result({
  "duration": 803312309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "3",
      "offset": 54
    }
  ],
  "location": "WeatherFeatureSteps.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 657762596,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "WeatherFeatureSteps.i_click_on_day(String)"
});
formatter.result({
  "duration": 928510265,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "4",
      "offset": 50
    }
  ],
  "location": "WeatherFeatureSteps.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 699822627,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 167448523,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 358748971,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 1497342076,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 778866907,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "WeatherFeatureSteps.i_click_on_day(String)"
});
formatter.result({
  "duration": 741709077,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "4",
      "offset": 54
    }
  ],
  "location": "WeatherFeatureSteps.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 668222942,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "WeatherFeatureSteps.i_click_on_day(String)"
});
formatter.result({
  "duration": 904015332,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "5",
      "offset": 50
    }
  ],
  "location": "WeatherFeatureSteps.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 751401473,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 139846098,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 358877483,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 1987602157,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 943905830,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "WeatherFeatureSteps.i_click_on_day(String)"
});
formatter.result({
  "duration": 829056217,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "5",
      "offset": 54
    }
  ],
  "location": "WeatherFeatureSteps.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 656118266,
  "status": "passed"
});
formatter.after({
  "duration": 1317037440,
  "status": "passed"
});
formatter.before({
  "duration": 3303288436,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Opening 5 Day Weather Forecast application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "The Weather Forecast application is launched",
  "keyword": "Given "
});
formatter.match({
  "location": "WeatherFeatureSteps.the_Weather_Forecast_application_is_launched()"
});
formatter.result({
  "duration": 3157880622,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "Verifying 5 Day weather forecast data using different city names",
  "description": "",
  "id": "5-day-weather-forecast-for-a-given-location;verifying-5-day-weather-forecast-data-using-different-city-names;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I enter the city name as \"london\" and press enter",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I verify that five day weather forecast is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click on day \"1\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "The three hourly forecast is \"Displayed\" for day \"1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I verify the day \"1\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I verify the day \"1\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I verify the day \"1\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I verify the day \"1\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I click on day \"1\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I click on day \"2\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The three hourly forecast is \"Displayed\" for day \"2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I verify the day \"2\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I verify the day \"2\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I verify the day \"2\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I verify the day \"2\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I click on day \"2\"",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I click on day \"3\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "The three hourly forecast is \"Displayed\" for day \"3\"",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I verify the day \"3\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I verify the day \"3\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I verify the day \"3\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I verify the day \"3\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I click on day \"3\"",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"3\"",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I click on day \"4\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "The three hourly forecast is \"Displayed\" for day \"4\"",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I verify the day \"4\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I verify the day \"4\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "I verify the day \"4\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I verify the day \"4\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I click on day \"4\"",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"4\"",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I click on day \"5\"",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "The three hourly forecast is \"Displayed\" for day \"5\"",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I verify the day \"5\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "I verify the day \"5\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "I verify the day \"5\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "I verify the day \"5\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "I click on day \"5\"",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"5\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "london",
      "offset": 26
    }
  ],
  "location": "WeatherFeatureSteps.i_enter_the_city_name_as_and_press_enter(String)"
});
formatter.result({
  "duration": 2002763456,
  "status": "passed"
});
formatter.match({
  "location": "WeatherFeatureSteps.i_verify_that_five_day_weather_forecast_is_displayed()"
});
formatter.result({
  "duration": 47714114,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat PageObjects.WeatherForecastApp.VerifyFiveDayData(WeatherForecastApp.java:56)\r\n\tat runner.WeatherFeatureSteps.i_verify_that_five_day_weather_forecast_is_displayed(WeatherFeatureSteps.java:67)\r\n\tat ✽.Then I verify that five day weather forecast is displayed(WeatherForecastApplication.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "WeatherFeatureSteps.i_click_on_day(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 50
    }
  ],
  "location": "WeatherFeatureSteps.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "WeatherFeatureSteps.i_click_on_day(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 54
    }
  ],
  "location": "WeatherFeatureSteps.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "WeatherFeatureSteps.i_click_on_day(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 50
    }
  ],
  "location": "WeatherFeatureSteps.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "WeatherFeatureSteps.i_click_on_day(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 54
    }
  ],
  "location": "WeatherFeatureSteps.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "WeatherFeatureSteps.i_click_on_day(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "3",
      "offset": 50
    }
  ],
  "location": "WeatherFeatureSteps.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "WeatherFeatureSteps.i_click_on_day(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "3",
      "offset": 54
    }
  ],
  "location": "WeatherFeatureSteps.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "WeatherFeatureSteps.i_click_on_day(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "4",
      "offset": 50
    }
  ],
  "location": "WeatherFeatureSteps.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "WeatherFeatureSteps.i_click_on_day(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "4",
      "offset": 54
    }
  ],
  "location": "WeatherFeatureSteps.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "WeatherFeatureSteps.i_click_on_day(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "5",
      "offset": 50
    }
  ],
  "location": "WeatherFeatureSteps.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "WeatherFeatureSteps.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "WeatherFeatureSteps.i_click_on_day(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "5",
      "offset": 54
    }
  ],
  "location": "WeatherFeatureSteps.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current Page URL is http://localhost:3000/");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1576650074,
  "status": "passed"
});
});