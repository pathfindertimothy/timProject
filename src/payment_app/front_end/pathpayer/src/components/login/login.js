import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { LoginForm } from '../loginForm/loginForm';

export class Login extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image 
                    style={styles.logo}
                    source={require('../../image/loginImage/loginImage.jpg')} /> 
                <Text style={styles.titleOne}>pathpayer</Text> 
                <Text style={styles.titleTwo}>ultimate payment solution</Text>             
            </View>
            <View style={styles.formContainer}>  
                <LoginForm />          
            </View>                       
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#95a5a6'
    },    
    logo: {
        width: 100,
        height: 100
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    titleOne: {
        color: 'black',
        marginTop: 5,
        width: 160,
        textAlign: 'center',
        opacity: 0.9
    },
    titleTwo: {
        color: 'black',
        marginTop: 0,
        width: 180,
        textAlign: 'center',
        opacity: 0.9
    }
});