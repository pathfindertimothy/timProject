import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
 
export class  Test extends Component {
            static navigationOptions = {
                title: 'Test home page'
            };
   render() {
            const {navigate} = this.props.navigation;
       return(
            <Button
            title="Go to Register Screen"
            onPress={() => navigate('Register', {name: 'Jean'})}
            />
       );
   }
}