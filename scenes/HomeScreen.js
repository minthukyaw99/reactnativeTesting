import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from '../components/Home';
import Profile from '../components/Profile';

const HomeScreen = StackNavigator({
    Home: {
        screen: Home,
    },
    Profile: {
        screen: Profile,
    }
});



export default HomeScreen;