
import React from "react";
import { hot } from 'react-hot-loader/root';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Hello {name}
        </h1>
        <img src="/img/happy.png" />
      </>
    );
  }
}

export default hot(App);
