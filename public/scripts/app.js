'use strict';

console.log('App.js is running');

var app = {
  title: 'Application Title',
  subTitle: 'This is our application subtitle'
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subTitle
  )
);

var user = {
  name: 'Mike',
  age: 33,
  location: 'Massachusetts'
};

function getLocation(location) {
  if (location) {
    return location;
  } else {
    return 'Unknown Location';
  }
}

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    getLocation(user.location)
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
