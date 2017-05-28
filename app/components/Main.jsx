const React = require('react');
const Nav = require('Nav');

const Main = props => (
  <div>
    <Nav />
    <div className="row">
      <div className="column small-centered medium-10 large-8">
        {props.children}
      </div>
    </div>
  </div>
  );

module.exports = Main;
