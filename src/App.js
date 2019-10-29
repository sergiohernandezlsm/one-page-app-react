import React, { Component } from 'react';
import DisplayApp from './containers/App';
import { Provider } from 'react-redux';
import store from './store/index';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <DisplayApp />
      </Provider>
    )
  }

}

export default App;