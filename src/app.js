import React, { Component } from 'react';
import { View } from 'react-native';
import SearchComponent from './components/search-component';
import PreviewComponent from './components/preview-component';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View >
        <SearchComponent />
        <PreviewComponent/>
      </View>
    );
  }
}

export default App;