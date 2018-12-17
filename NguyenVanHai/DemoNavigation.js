/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Text, View, Button} from 'react-native';
import {createStackNavigator, createAppContainer, } from 'react-navigation'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Second page"
          onPress={() => navigate('Second')}
        />
      </View>
      
    );
  }
}

class SecondScreen extends React.Component {
  static navigationOptions = {
    title: 'Second',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Second Screen</Text>
        <Button
          title="Go to home page"
          onPress={() => navigate('Home')}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Second: {
    screen: SecondScreen
  }
});

export default createAppContainer(AppNavigator);
