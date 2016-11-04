class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'B'};
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
        <label>
          <input
            type="radio"
            name="choice"
            value="A"
            onChange={this.handleChange.bind(this)}
          />
          Option A
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="choice"
            value="B"
            onChange={this.handleChange.bind(this)}
            defaultChecked={true}
          />
          Option B
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="choice"
            value="C"
            onChange={this.handleChange.bind(this)}
          />
          Option C
        </label>
        <br />
        <br />
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