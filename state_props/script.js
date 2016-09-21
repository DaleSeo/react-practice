var Parent = React.createClass({
  getInitialState: function() {
    return { name: 'Frarthur' }
  },
  render: function () {
    return <Child name={this.state.name} />;
  }
});

var Child = React.createClass({
  render: function () {
    return <h1>Hey, my name is {this.props.name}!</h1>;
  }
});

ReactDOM.render(<Parent />, document.getElementById('app'));