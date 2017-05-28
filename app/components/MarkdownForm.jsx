const React = require('react');
const MarkdownRender = require('MarkdownRender');

const MarkdownForm = React.createClass({
  onPreview(e) {
    e.preventDefault();
    const newText = this.refs.markdownToRender.value;

    this.props.onNewText(newText);
  },
  onClear() {
    this.refs.markdownToRender.value = '';
    this.props.onClear();
  },
  render() {
    const initialText = '# Heading 1\n## Heading 2\n### Heading 3\n\n' +
    'You can _emphasize_text, or make it **strong**.  \nOr you can *emphasize* ' +
    'text or make it __strong__.\n\n You can make a\n1. List\n2. like\n3. this ' +
    '\n\nOr, if you\'d rather\n* one\n* like\n* this. \n\nYou can ' +
    '[set a link](http://www.google.com).\nOr more simply, http://www.google.com' +
    '\n\nAdd an image:  \n![I\'m a puppy!](http://media.mydogspace.com.s3.amazonaws.com/wp-content/uploads/2013/08/puppy-500x350.jpg)' +
    '\n\nTo find out more about markdown syntax, check out this ' +
    '[link](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).';
    return (
      <div>
        <h2 className="page-title">Markdown Previewer</h2>
        <MarkdownRender markdownText={this.props.markdownText} />
        <label>
          Type markdown below:
          <textarea rows="10" ref="markdownToRender">{initialText}</textarea>
        </label>
        <div className="controls">
          <button className="button primary" onClick={this.onPreview}>Preview!</button>
          <button className="button alert" onClick={this.onClear}>Clear</button>
        </div>
      </div>
    );
  },
});

module.exports = MarkdownForm;
