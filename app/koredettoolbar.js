
import React from 'react';

import { Text, StyleSheet,  } from 'react-native';

export default class KoredetToolbar extends React.Component {

  render() {
    return (
        <Text style={styles.welcome}>Hello my friend {this.props.name}</Text>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});