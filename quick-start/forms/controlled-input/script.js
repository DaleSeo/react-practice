class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Text field value is: ' + this.state.value);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="edit me"
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
        />
        <button onClick={this.handleSubmit.bind(this)}>
          Submit
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Form />,
  document.getElementById('root')
);