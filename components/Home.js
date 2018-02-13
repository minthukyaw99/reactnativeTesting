import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TextInput } from 'react-native';
import {Card, Button} from 'react-native-material-ui';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CardSection from './CardSection';

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
            backgroundColor: '#039be5',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        return (
            <View style={styles.loginContainer}>
                <CardSection>
                    <View style={styles.loginCard}>
                        <View style={styles.iconWrapper}>
                            <Ionicons name='ios-mail-outline' size={30} style={{color: '#fff'}}/>
                        </View>
                        <View style={styles.texInputWrapper}>
                            <TextInput
                                style={styles.textInputStyle}
                                onChangeText={(text) => this.setState({text})}
                                value={this.state.text}
                                placeholder="abc@example.com"
                                placeholderTextColor='#e0e0e0'
                                tintColor='black'
                            />
                        </View>
                    </View>
                    <View style={styles.loginCard}>
                        <View style={styles.iconWrapper}>
                            <Ionicons name='ios-lock-outline' size={30} style={{color: '#fff'}}/>
                        </View>
                        <View style={styles.texInputWrapper}>
                            <TextInput
                                style={styles.textInputStyle}
                                onChangeText={(text) => this.setState({text})}
                                value={this.state.text}
                            />
                        </View>
                    </View>
                    <View style={{paddingBottom: 20}}>
                        <Button icon='exit-to-app' raised={true} text={'Log In'} style={{ container: { backgroundColor: '#d81b60'}, text: { color: '#fff'}}} />
                    </View>
                </CardSection>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginContainer: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    iconWrapper: {
        width: 50,
    },
    texInputWrapper: {
        flexGrow: 3,
        marginLeft: 20,
    },
    loginCard: {
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInputStyle: {
        height: 40,
        borderColor: '#fff',
        borderWidth: 0.5,
        borderRadius: 5
    },
    backgroundImageStyle: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },

});


export default HomeScreen;