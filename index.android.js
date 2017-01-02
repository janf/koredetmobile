/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

<<<<<<< HEAD


=======
>>>>>>> f42a4540307eee1b9ab8abeed39d93a95366b580
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
<<<<<<< HEAD
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

=======
  View
} from 'react-native';

import { MKButton } from 'react-native-material-kit';

export default class koredet extends Component {
  render() {
    const ColoredButton = MKButton.coloredButton().withText("Hello, World!").build();
    return (
      <View style={styles.container}>
        <ColoredButton />
        <Text>Test</Text>
>>>>>>> f42a4540307eee1b9ab8abeed39d93a95366b580
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
<<<<<<< HEAD
    fontSize: 30,
=======
    fontSize: 20,
>>>>>>> f42a4540307eee1b9ab8abeed39d93a95366b580
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

<<<<<<< HEAD
AppRegistry.registerComponent('koredetmobile', () => koredetmobile);
=======
AppRegistry.registerComponent('koredet', () => koredet);
>>>>>>> f42a4540307eee1b9ab8abeed39d93a95366b580
