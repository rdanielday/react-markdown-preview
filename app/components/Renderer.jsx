const React = require('react');
const MarkdownForm = require('MarkdownForm');

const Renderer = React.createClass({
  getInitialState() {
    return {
      text: '',
    };
  },
  handleNewText(newText) {
    this.setState({
      text: newText,
    });
  },
  handleClear() {
    this.setState({
      text: '',
    });
  },
  render() {
    return (
      <div>
        <MarkdownForm onNewText={this.handleNewText} onClear={this.handleClear} markdownText={this.state.text} />
      </div>
    );
  },
});

module.exports = Renderer;
