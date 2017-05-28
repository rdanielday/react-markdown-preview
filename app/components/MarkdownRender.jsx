const React = require('react');
const marked = require('marked');

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
});

const MarkdownRender = React.createClass({
  setMarkdown() {
    return {
      __html: marked(this.props.markdownText),
    };
  },
  render() {
    return (
        <div dangerouslySetInnerHTML={this.setMarkdown()} />
    );
  },
});

module.exports = MarkdownRender;
