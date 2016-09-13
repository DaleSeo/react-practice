class Topics extends React.Component {
  render() {
    const topics = ["HTML", "CSS", "JavaScript", "React"];
    return (
      <ul>
        {topics.map(topic => <li>{topic}</li>)}
      </ul>
    );
  }
}

let target = document.getElementById('topics');
ReactDOM.render(<Topics/>, target);