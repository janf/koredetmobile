'use strict';

import React from 'react';

import { ListView, Text, StyleSheet } from 'react-native';


function getItemsFromAPI() {
   return fetch('http://192.168.1.94:3000/apiv1/items.json')
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
}



export default class ListItems extends React.Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['Pizza', 'Sag', 'Ost', 'Kjøttdeig']),
    };
  }

  componentDidMount() {

  	getItemsFromAPI().then(items => {
  		this.setState({ ...this.state, dataSource: this.state.dataSource.cloneWithRows(items.map(it => it.name))});
  	});


  }

  render() {
    return (
      <ListView 
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text style={styles.listitem}>{rowData}</Text>}
      />
    );
  }
}

const styles = StyleSheet.create({
  listitem: {
    fontSize: 25,
    textAlign: 'left',
    margin: 5,
  },

});