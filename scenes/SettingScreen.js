import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

class SettingScreen extends Component {
    static navigationOptions = {
        title: 'Setting',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Setting</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Profile', { name: 'Brent' })}
                    title="Go to Home"
                />
            </View>
        )
    }
}



export default SettingScreen;