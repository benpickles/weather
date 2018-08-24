# Weather

[![Build Status](https://travis-ci.org/benpickles/weather.svg?branch=master)](https://travis-ci.org/benpickles/weather)

A little React app using [Create React App](https://github.com/facebookincubator/create-react-app) to show London's weather from the [OpenWeatherMap 5 day weather forecast API](http://openweathermap.org/forecast5).

[View the app](https://goofy-shaw-627778.netlify.com/).

## TODO

- Fix times: I'm guessing they should be 00:00, 03:00, 06:00 etc instead of 01:00, 04:00, 07:00 etc.
- Show rain, wind, and cloud (and snow etc).
- Drive the time/date selection by scrolling the list.
- Replace placeholder graphics.
- Choose a city/lat-lon/etc.
- Offline-capability via Service Workers.

## Development

To build your own version first install the project's dependencies:

```
$ yarn install
```

Then start a local development server with:

```
$ yarn start
```
