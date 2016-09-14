class CommentBox extends React.Component {
  constructor() {
    super();

    this.state = {
      visible: true,
      comments: []
    };
  }

  componentWillMount() {
    this._fetchComments();
  }

  componentDidMount() {
    this._timer = setInterval(() => this._fetchComments(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this._timer);
  }

  _fetchComments() {
    $.ajax({
      method: 'GET',
      url: 'comments.json',
      success: (comments) => {
        this.setState({
          comments: comments
        });
      }
    });
  }

  render() {
    const comments = this._getComments();

    let commentNodes;
    let buttonText = 'Show';

    if (this.state.visible) {
      commentNodes = <div className="panel-group">{comments}</div>;
      buttonText = 'Hide';
    }

    return (
      <div className="container">
        <div className="page-header">
          <h3>
            {this._getCommentsTitle(comments.length)} <button type="button" onClick={this._toggle.bind(this)} className="btn btn-default">{buttonText}</button>
          </h3>
        </div>
        <CommentForm addComment={this._addComment.bind(this)}/>
        {commentNodes}
      </div>
    );
  }

  _getComments() {
    return this.state.comments.map(comment => <Comment
      author={comment.author}
      body={comment.body}
      key={comment.id}
      id={comment.id}
      onDelete={this._deleteComment.bind(this)}
      />);
  }

  _getCommentsTitle(commentCount) {
    if (commentCount == 0) return 'No comments yet';
    if (commentCount == 1) return '1 comment';
    return `${commentCount} comments`;
  }

  _toggle() {
    this.setState({
      visible: !this.state.visible
    });
  }

  _addComment(author, body) {
    const comment = {
      id: this.state.comments.length + 1,
      author,
      body
    }
    this.setState({comments: this.state.comments.concat([comment])});
  }

  _deleteComment(commentID) {
    // $.ajax({
    //   method: 'DELETE',
    //   url: 'comments.json'
    // });

    const comments = this.state.comments.filter(
      comment => comment.id !== commentID
    );

    this.setState({ comments });
  }
}

class CommentForm extends React.Component {
  render() {
    return (
      <div className="well">
        <form onSubmit={this._submit.bind(this)}>
          <div className="form-group">
            <label className="sr-only" for="author">Author</label>
            <input ref={input => this._author = input} type="input" className="form-control" id="author" placeholder="Author"/>
          </div>
          <div className="form-group">
            <label className="sr-only" for="body">Body</label>
            <textarea ref={textarea => this._body = textarea} row="3" className="form-control" id="body" placeholder="Body"></textarea>
          </div>
          <button type="submit" className="btn btn-default">Post Comment</button>
        </form>
      </div>
    );
  }

  _submit(event) {
    event.preventDefault();

    if (!this._author.value || !this._body.value) {
      alert("Please enter your name and comment");
      return;
    }

    let author = this._author;
    let body = this._body;

    this.props.addComment(author.value, body.value);
  }
}

class Comment extends React.Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <div className="btn-group pull-right">
            <button type="button" className="btn btn-danger" onClick={this._delete.bind(this)}><i className="fa fa-trash"></i></button>
          </div>
          <h4>{this.props.author}</h4>
        </div>
        <div className="panel-body">{this.props.body}</div>
      </div>
    );
  }

  _delete(event) {
    event.preventDefault();
    if (confirm('Are you sure?')) {
      this.props.onDelete(this.props.id);
    }
  }
}

let target = document.getElementById('commentBox');
ReactDOM.render(<CommentBox/>, target);