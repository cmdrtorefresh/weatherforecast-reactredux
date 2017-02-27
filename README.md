# Redux React Simple App : Weather Forecast

Taken from [Stephen Grider](https://github.com/StephenGrider)'s React-Redux course on [Udemy](https://www.udemy.com/react-redux/).

### About this App

This app creates the weather forecast (temperature, pressure and humidity) of several cities that are queried in the search textfield.

### Elements of the App

Containers:
- Search Bar (textfield and submit button).
- Weather List (table of properties of different cities).

Reducers:
- Weather

Components:
- Chart

Middleware:
- [redux-promise](https://www.npmjs.com/package/redux-promise) `npm install --save redux-promise`

Other Dependency:
- [axios](https://www.npmjs.com/package/axios) (for html request). `npm install --save axios`
- [Sparklines](https://github.com/borisyankov/react-sparklines) (for chart generating). `npm install --save react-sparklines`

### How to see the app in action

`npm install` installs the dependencies.
`npm start` starts the server.

Go to `localhost:8080` on the browser.
