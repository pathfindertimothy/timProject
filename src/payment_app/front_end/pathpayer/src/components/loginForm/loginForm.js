import React, { Component } from 'react';
import { StyleSheet,TextInput, View, TouchableOpacity, Text, StatusBar} from 'react-native';
import { createStackNavigator } from 'react-navigation';

type Props = {};

export class LoginForm extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#34495e" barStyle="light-content" />
                <TextInput           
                    placeholder="username or email"
                    placeholderTextColor="#e74c3c"                    
                    keyboardType="email-address"
                    autoCapitalize='none'
                    autoCorrect={false}
                    returnKeyType='next'
                    onSubmitEditing={() => this.passwordInput.focus()}
                    style={styles.input}
                     />
                <TextInput                    
                    placeholder="password"                    
                    placeholderTextColor="#e74c3c"
                    secureTextEntry
                    returnKeyType="go"
                    ref={(input) => this.passwordInput = input}
                    style={styles.input}                    
                     />
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>REGISTER</Text>
                </TouchableOpacity>   
                <Text style={styles.footNote}>Powered by PathTech Malta</Text>

            </View> 
        );
    }
}

const styles=StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: '#ecf0f1',
        marginBottom: 10,
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#bdc3c7' ,
        paddingVertical: 15,
        margin: 5
    },
    buttonText: {
        textAlign: 'center',
        color: '#ecf0f1',
        fontWeight: '700'
    },
    footNote: {
        textAlign: 'center',
        marginTop: 5
    }
});