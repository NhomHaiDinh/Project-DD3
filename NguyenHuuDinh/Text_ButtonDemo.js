import React, { Component } from 'react';
import { Text, View, Alert, Button, StyleSheet, RadioButton } from 'react-native';

export default class HelloWorldApp extends Component {
  _onPressButton() {
    Alert.alert('Good Luck To You!')
  }

  render() {
    return (
      <View style={{ alignItems: 'center', padding: 10 }}>
        <Text>Hello!</Text>
        <Text>Welcome To KHOA CAFE!</Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Here"
            color="red"
          />
          

        </View>
      </View>

        );
      }
    }
const styles = StyleSheet.create({
          container: {
          flex: 1,
        justifyContent: 'center',
       },
  buttonContainer: {
          margin: 20,
      },
  alternativeLayoutButtonContainer: {
          margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
      }  
});