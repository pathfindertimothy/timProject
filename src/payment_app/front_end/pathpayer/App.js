/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';
import {HomeScreen} from './src/components/home/home';
import {Login} from './src/components/login/login';
import { LoginForm } from './src/components/loginForm/loginForm';
import { Register } from './src/components/register/register';
import { Test } from './src/components/home/test';
import { ScanQrCode } from './src/components/qrCodeScanner/qrCodeScanner';
import { createStackNavigator, createAppContainer } from 'react-navigation';

type Props = {};



class ProfileScreen extends Component<Props> {
    static navigationOptions = {
        title: "Welcome! Mobile Payment Solution!",
      };
   
  render() {  
    const {navigate} = this.props.navigation;  
    return (
        <View>
            <View style={{margin: 5}}>
                <Button
                title="Go to home screen"
                onPress={() => navigate('Home', {name: 'Thomas'})}
                /> 
            </View>
            <View style={{margin: 5}}>
                <Button
                title="Go to Test Screen"
                onPress={() => navigate('Test', {name: 'Register'})}
                />
            </View>            
         
        </View>
                     
    );
  }
}


const MainNavigator = createStackNavigator({
    Profile: {screen: ProfileScreen},
    Home: {screen: HomeScreen},
    Login: {screen: Login},     
    Register: {screen: Register},
    LoginForm: {screen: LoginForm},
    Test: {screen: Test}
  });
  
  const AppContainer = createAppContainer(MainNavigator);
  
  export default class App extends Component {
      render() {
          return(
              <AppContainer />
          );
      }
  }