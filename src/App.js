import React, { lazy, Suspense, Component } from "react";
import Loader from './components/Loader'
const Tetris = lazy(() => import("./components/Tetris"));

const renderLoading = () => <div className="loader center"><i className="fa fa-spin" /> </div>

class App extends Component {
  constructor() {
    super();
    this.state = { isLoading: true }
  }

  componentDidMount() {
    this.setState({ isLoading: false })

  }

  render() {
    let content = this.state.isLoading ? <Loader /> : <Tetris />

    return (
      <div className="App">
        <Suspense fallback={renderLoading()}>
          {content}
        </Suspense>
      </div>
    );
  }
};

export default App;
