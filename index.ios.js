/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import rootReducer from './src/reducers/index-reducer';
import { createStore } from 'redux';
import App from './src/app';

const initialState = { data: {
  title: 'React Native',
    text: 'React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React. The focus of React Native is on developer efficiency across all the platforms you care about — learn once, write anywhere. Facebook uses React Native in multiple production apps and will continue investing in React Native.',
    imgUrl: 'http://facebook.github.io/react/img/logo_og.png'
}}
const store = createStore(rootReducer, initialState);

class WebpagePreview extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('WebpagePreview', () => WebpagePreview);