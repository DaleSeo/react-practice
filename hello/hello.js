class Hello extends React.Component {
  render() {
    return <div>Hello React</div>;
  }
}

let target = document.getElementById('hello');
ReactDOM.render(<Hello/>, target);