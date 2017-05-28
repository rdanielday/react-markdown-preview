const React = require('react');
const ReactDOM = require('react-dom');
const Main = require('Main');
const About = require('About');
const Renderer = require('Renderer');

const {
    Route,
    Router,
    IndexRoute,
    hashHistory,
  } = require('react-router');

// Load Foundation
$(document).foundation();

// App css
require('applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About} />
      <IndexRoute component={Renderer} />
    </Route>
  </Router>,
  document.getElementById('app'),
);
