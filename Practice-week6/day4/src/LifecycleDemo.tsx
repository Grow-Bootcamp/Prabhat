import { Component } from "react";

class LifecycleDemo extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    console.log("Component mounted!");
  }

  componentDidUpdate() {
    console.log("Component updated!");
  }

  componentWillUnmount() {
    console.log("Component will unmount!");
  }

  render() {
    return (
      <div>
        <h2>React Lifecycle Demo</h2>
        <p>Count: {this.state.count}</p>

        <button
          onClick={() =>
            this.setState({ count: this.state.count + 1 })
          }
        >
          Increase
        </button>
      </div>
    );
  }
}

export default LifecycleDemo;