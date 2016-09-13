class CommentBox extends React.Component {
  constructor() {
    super();

    this.state = {
      visible: true,
      comments: [
        { id: 1, author: 'Dale', body: 'Practice makes perfect!'},
        { id: 2, author: 'Kate', body: 'Music is my life.\r\nShow me the money'},
        { id: 3, author: 'Tom', body: 'I wanna know what love is...'}
      ]
    };
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
    return this.state.comments.map(comment => <Comment author={comment.author} body={comment.body} key={comment.id}/>);
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
            <button type="button" className="btn btn-danger"><i className="fa fa-trash"></i></button>
          </div>
          <h4>{this.props.author}</h4>
        </div>
        <div className="panel-body">{this.props.body}</div>
      </div>
    );
  }
}

let target = document.getElementById('commentBox');
ReactDOM.render(<CommentBox/>, target);