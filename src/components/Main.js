require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from '../reducers'





class AppComponent extends React.Component {
  render() {
    return (
      
        <App />
      
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
