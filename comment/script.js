class CommentBox extends React.Component {
  render() {
    const comments = this._getComments();
    return (
      <div>
        <h3>{this._getCommentsTitle(comments.length)}</h3>
        <div className="panel-group">{comments}</div>
      </div>
    );
  }

  _getComments() {
    const commentList = [
      { id: 1, author: 'Dale', body: 'Practice makes perfect!'},
      { id: 2, author: 'Kate', body: 'Music is my life.'},
      { id: 3, author: 'Tom', body: 'I wanna know what love is...'}
    ];
    return commentList.map(comment => <Comment author={comment.author} body={comment.body} key={comment.id}/>);
  }

  _getCommentsTitle(commentCount) {
    if (commentCount == 0) return 'No comments yet';
    if (commentCount == 1) return '1 comment';
    return `${commentCount} comments`;
  }
}

class Comment extends React.Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">{this.props.author}</div>
        <div className="panel-body">{this.props.body}</div>
      </div>
    );
  }
}

let target = document.getElementById('commentBox');
ReactDOM.render(<CommentBox/>, target);