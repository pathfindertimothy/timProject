import React, { Component } from 'react';
import { StyleSheet,TextInput, View, TouchableOpacity, Text, StatusBar, Button} from 'react-native';

export class Register extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#34495e" barStyle="light-content" />
                <Text style={styles.registerText}>Register</Text>
                <TextInput           
                    placeholder="name"
                    placeholderTextColor="#e74c3c"
                    returnKeyType="next"   
                    onSubmitEditing={() => this.surnameInput.focus()}                 
                    style={styles.input}
                     />
                <TextInput           
                    placeholder="surname"
                    placeholderTextColor="#e74c3c"
                    returnKeyType="next"
                    ref={(input) => this.surnameInput = input}
                    onSubmitEditing={() => this.mobileInput.focus()}
                    style={styles.input}
                     />
                 <TextInput           
                    placeholder="mobile number"
                    placeholderTextColor="#e74c3c"
                    returnKeyType="next" 
                    ref={(input) => this.mobileInput = input}
                    onSubmitEditing={() => this.emailInput.focus()}                 
                    style={styles.input}
                     />
                 <TextInput           
                    placeholder="email"
                    placeholderTextColor="#e74c3c"
                    returnKeyType="next"                    
                    keyboardType="email-address"
                    autoCapitalize='none'
                    autoCorrect={false}
                    ref={(input) => this.emailInput = input}
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
                    <Text style={styles.bottonText}>REGISTER</Text>
                </TouchableOpacity>  
                <Button
                style={{margin: 5}}
                title="Go to Login Screen"
                onPress={() => navigate('Login', {name: 'Jean'})}
                />
                <Text style={styles.footNote}>Powered by PathTech Malta</Text>  
                
            </View> 
        );
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
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
        paddingVertical: 15
    },
    bottonText: {
        textAlign: 'center',
        color: '#ecf0f1',
        fontWeight: '700'
    },
    registerText: {
        textAlign: 'center',
        margin: 10,        
    },
    footNote: {
        textAlign: 'center',
        marginTop: 5
    }
    
});