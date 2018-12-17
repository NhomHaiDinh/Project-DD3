/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'stretch', margin: 20, color: 'red'}}>
        <Text style={{color: 'red'}}>Name:  {this.props.name}</Text>
        <Text style={{color: 'blue'}}>Email:  {this.props.email}</Text>
      </View>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor:'black'}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'yellow'}}>DEMO PROPS</Text>
        </View>
        <View style={{flex: 4, justifyContent: 'center',alignItems: 'flex-start'}}>
          <Greeting name='Nguyễn Văn Hải' email='nguyenvanhai@gmail.com'/>
          <Greeting name='Nguyễn Hữu Định' email='nguyenhuudinh@gmail.com'/>
          <Greeting name='Dặng Phương Đông' email='dangphuongdong@gmail.com'/>
        </View>
      </View>
      
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreetings);
