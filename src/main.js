/** STYLE **/
require('./main.scss');

/** JS **/
var React = require('react');
var ReactDOM = require('react-dom');
var Component = require('./component');

ReactDOM.render(
  <Component />,
  document.getElementById('react')
);
