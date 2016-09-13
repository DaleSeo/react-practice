class CommentBox extends React.Component {
  constructor() {
    super();

    this.state = {
      visible: true
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
        {commentNodes}
      </div>
    );
  }

  _getComments() {
    const commentList = [
      { id: 1, author: 'Dale', body: 'Practice makes perfect!'},
      { id: 2, author: 'Kate', body: 'Music is my life.\r\nShow me the money'},
      { id: 3, author: 'Tom', body: 'I wanna know what love is...'}
    ];
    return commentList.map(comment => <Comment author={comment.author} body={comment.body} key={comment.id}/>);
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