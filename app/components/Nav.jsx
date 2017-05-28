const React = require('react');

const { Link, IndexLink } = require('react-router');

const Nav = () => (
  <div className="top-bar">
    <div className="top-bar-left">
      <ul className="menu">
        <li className="menu-text">
          React Markdown Renderer
        </li>
        <li>
          <IndexLink to="/" activeClassName="active-link">Markdown Preview</IndexLink>
        </li>
        <li>
          <Link to="/about" activeClassName="active-link">About</Link>
        </li>
      </ul>
    </div>
    <div className="top-bar-right">
      <ul className="menu">
        <li className="menu-text">
          A project by <a href="http://github.com/rdanielday">Ryan Day</a>
        </li>
      </ul>
    </div>
  </div>
  );

module.exports = Nav;
