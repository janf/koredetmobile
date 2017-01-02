/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */



import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid
} from 'react-native';

import Hello from './app/hello.js';
import ListItems from './app/listitems.js';


export default class koredetmobile extends Component {

  onActionSelected(position) {
    if (position === 0) { // index of 'Settings'
      showSettings();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid
          logo={require('./images/home.jpg')}
          title="Koredet app"
          actions={[{title: 'Settings', icon: require('./images/icon_settings.png'), show: 'always'}]}
            onActionSelected={this.onActionSelected} />
        <Text style={styles.welcome}>
          Koredet Mobile
        </Text>

        <ListItems />
      
        <Text style={styles.instructions}>
          You have the following item types
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('koredetmobile', () => koredetmobile);
