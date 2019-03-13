import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';

/**
 * Importing Provider to wrap the react component for Redux
 * Import redux store
 */
import { Provider } from 'react-redux';
import store from './config/Store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <p>
              React Redux Demo
            </p>
          </header>
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
