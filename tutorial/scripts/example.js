var Comment = React.createClass({
  rawMarkup: function () {
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup };
  },
  render: function () {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function () {
    return (
      <div className="commentList">
        <Comment author="Pete Hunt">댓글입니다.</Comment>
        <Comment author="Jordan Walke">*또 다른* 댓글입니다.</Comment>
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function () {
    return (
      <div className="commentForm">
        Hello! I'm a CommentForm.
      </div>
    );
  }
});

var CommentBox = React.createClass({
  render: function () {
    return (
      <div className="commentBox">
        <h1>댓글</h1>
        <CommentList/>
        <CommentForm/>
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox/>,
  document.getElementById('content')
);