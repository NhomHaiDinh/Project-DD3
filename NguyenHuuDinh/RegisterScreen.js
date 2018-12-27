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
var URL ="http://192.168.56.1/DD3/register.php"
export default class Register extends Component {
    static navigationOptions = {
        title: 'Register',
    };
    Register(UserName, Password){
        fetch(URL, {method:"POST", body: JSON.stringify({"user_name": UserName, "user_pass": Password})})
        .then((response) => response.text())
        .then(() => {alert("Register Successfully!")})
        .done()
    }
    constructor(props) {
        super(props);
        this.state = {
            UserName: '',
            Password: '',
            RePassword: '',
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
                        onChangeText={(UserName) => this.setState({UserName: UserName})}
                        value={this.state.UserName} />
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/color/48/000000/key-security.png' }} />
                    <TextInput style={styles.inputs}
                        placeholder="Input password"
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({ Password: password })}
                        value={this.state.Password} />
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/color/48/000000/key-security.png' }} />
                    <TextInput style={styles.inputs}
                        placeholder="Retype password"
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({ RePassword: password })}
                        value={this.state.RePassword} />
                </View>    
                <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.Register(this.state.UserName, this.state.Password)}>
                    <Text style={styles.loginText}>Register</Text>
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
        backgroundColor: "green",
    },
    loginText: {
        color: 'white',
    }
});
