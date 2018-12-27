import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
} from 'react-native';

export default class LoginView extends Component {
    static navigationOptions = {
        title: 'ChangePassword',
    };

    constructor(props) {
        super(props);
        state = {
            UserName: '',
            Password: '',
            RePassword: '',
        }
    }

    onClickListener = (viewId) => {
        Alert.alert("Alert", "Change Password Successfully ");
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/color/48/000000/user-folder.png' }} />
                    <TextInput style={styles.inputs}
                        placeholder='Input user name'
                        keyboardType="default"
                        onChangeText={(email) => this.setState({ email })} />
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/color/48/000000/key-security.png' }} />
                    <TextInput style={styles.inputs}
                        placeholder="Input old password"
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({password})} />
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/color/48/000000/key-security.png' }} />
                    <TextInput style={styles.inputs}
                        placeholder="Input new password"
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({ password })} />
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/color/48/000000/key-security.png' }} />
                    <TextInput style={styles.inputs}
                        placeholder="Retype password"
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({ password })} />
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener()}>
                    <Text style={styles.loginText}>Change Password</Text>
                </TouchableHighlight>

                
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
        backgroundColor: "yellow",
    },
    loginText: {
        color: 'white',
    }
});
