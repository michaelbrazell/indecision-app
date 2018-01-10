'use strict';

console.log('App.js is running');

var app = {
  title: 'Application Title',
  subTitle: 'This is our application subtitle',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

var onRemoveAll = function onRemoveAll(e) {
  e.preventDefault();
  app.options = [];
  render();
};

var appRoot = document.getElementById('app');

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subTitle && React.createElement(
      'p',
      null,
      app.subTitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
      'form',
      { onSubmit: onRemoveAll },
      React.createElement(
        'button',
        null,
        'Remove All Options'
      )
    ),
    React.createElement(
      'ol',
      null,
      React.createElement(
        'li',
        null,
        'Option 1'
      ),
      React.createElement(
        'li',
        null,
        'Option 2'
      )
    ),
    React.createElement(
      'p',
      null,
      'Options: ',
      app.options.length
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

render();
