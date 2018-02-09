import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

class ProfileScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Profile</Text>
                <Button
                    onPress={() => this.props.navigation.goBack(null)}
                    title="Go to Home"
                />
            </View>
        )
    }
}

export default ProfileScreen;