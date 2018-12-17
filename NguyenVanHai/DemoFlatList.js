/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Text, View, FlatList, StyleSheet } from 'react-native';

export default class MyListItem  extends React.Component {

  constructor(props){
    super(props);
    this.state={
      listItem : [
        {key: '1', maSP: 'SP01', tenSP: 'Macbook Air 2018'}, 
        {key: '2', maSP: 'SP02', tenSP: 'Macbook Pro 13" 2018'}, 
        {key: '3', maSP: 'SP03', tenSP: 'Macbook Pro 15" 2017'},  
        {key: '4', maSP: 'SP04', tenSP: 'Macbook Air 2018'},  
        {key: '5', maSP: 'SP05', tenSP: 'Macbook Pro 15" 2017'},  
        {key: '6', maSP: 'SP06', tenSP: 'Macbook Air 2018'},  
        {key: '7', maSP: 'SP07', tenSP: 'Macbook Pro 15" 2017'},  
        {key: '8', maSP: 'SP08', tenSP: 'Macbook Air 2018'},  
        {key: '9', maSP: 'SP09', tenSP: 'Macbook Pro 15" 2017'},  
        {key: '10', maSP: 'SP10', tenSP: 'Macbook Pro 13" 2017'},  
      ]
    }
  }


  render() {
    return (
      <FlatList
        data={this.state.listItem}
        renderItem={({item}) => 
        <View style={sp.dong}>
          <Text>{item.key}</Text>
          <Text>{item.maSP}</Text>
          <Text>{item.tenSP}</Text>
        </View>
        }
      />
    );
  }
}

var sp = StyleSheet.create({
  dong: {
    borderBottomWidth: 1,
    padding: 50,

  }
});