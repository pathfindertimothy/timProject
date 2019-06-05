import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import { AppFooter } from '../footer/footer';


export class HomeScreen extends Component<Props> {
    static navigationOptions = {
        title: 'welcome to home screen'
    };

    render() {   
    const {navigate} = this.props.navigation;
        return (
            <View>
                <View>
                    <Button
                    title="Go to Profile Screen"
                    onPress={() => navigate('Profile', {name: 'Jean'})}
                    />
                </View>
                <View>
                    <Button
                    title="Click to Scan QR-Code"
                    onPress={() => navigate('ScanScreen', {name: 'Jean'})}
                    />
                </View>
            </View>
             
            
                                
        );
    }
}

