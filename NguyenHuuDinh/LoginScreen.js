import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';

var URL ="http://192.168.56.1/DD3/login.php"
export default class Login extends Component {
  static navigationOptions = {
    title: 'Login',
  };
  Login(UserName, Password) {
    fetch(URL, { 
      method: "POST",
      headers:{
        "Accept":"application/json",
        "Conten-Type":"application/json"
      },
      body: JSON.stringify({
        user_name: UserName,
        user_pass: Password, 
        }) 
      })
    .then((response) => response.text())
    .then(()=> {
        this.props.navigation.navigate('Home')
      })
    .done()
  }

  constructor(props) {
    super(props);
    this.state = {
      UserName: "",
      Password: "",
    }
  }
  
 

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/color/48/000000/user-folder.png' }} />
          <TextInput style={styles.inputs}
            placeholder="Input user name"
            keyboardType="default"
            onChangeText={(UserName) => this.setState({UserName:UserName})}
            value={this.state.UserName} />
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/color/48/000000/key-security.png' }} />
          <TextInput style={styles.inputs}
            placeholder='Input password'
            secureTextEntry={true}
            onChangeText={(Password) => this.setState({Password: Password})}
            value={this.state.Password} />
        </View>

        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}  onPress={() => this.Login(this.state.UserName, this.state.Password)}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('ChangePassword')}>
          <Text>Change password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Register')}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});
