class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {checked: {'A': false, 'B': true, 'C': false}};
  }

  handleChange(event) {
    const value = event.target.value;
    const checked = Object.assign({}, this.state.checked);
    this.setState({value: event.target.value});
    if (checked[value]) {
      checked[value] = false;
    } else {
      checked[value] = true;
    }
    this.setState({checked});
  }

  handleSubmit(event) {
    alert('Boxes checked: ' +
      (this.state.checked.A ? 'A ' : '') +
      (this.state.checked.B ? 'B ' : '') +
      (this.state.checked.C ? 'C' : '')
    )
  }

  render() {
    return (
      <div>
        <label>
          <input
            type="checkbox"
            value="A"
            onChange={this.handleChange.bind(this)}
          />
          Option A
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="B"
            onChange={this.handleChange.bind(this)}
            defaultChecked={true}
          />
          Option B
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="C"
            onChange={this.handleChange.bind(this)}
          />
          Option Cz
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