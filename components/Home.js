import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { Card } from 'react-native-material-ui';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#e53935',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        return (
            <View style={styles.loginContainer}>
                <View style={styles.loginCard}>
                    <TextInput
                        style={styles.textInputStyle}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                    <Button
                        onPress={() => this.props.navigation.navigate('Profile', { name: 'Brent' })}
                        title="Go to profile"
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    loginCard: {
        backgroundColor:'#e53935',
        flexGrow: 0.8,
        paddingTop:10,
        paddingBottom:20,
        paddingLeft:50,
        paddingRight:50,
        borderRadius:10
    },
    textInputStyle: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        borderLeftColor: 'white',
    }
});



export default HomeScreen;