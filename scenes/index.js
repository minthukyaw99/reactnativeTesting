import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { COLOR, ThemeProvider, Card, Button } from 'react-native-material-ui';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';

const Index = TabNavigator(
        {
            Home: {
                screen: HomeScreen,
            },
            Setting: {
                screen: SettingScreen,
            },
        },
        {
            initialRouteName: 'Home',
            tabBarOptions: {
                activeTintColor: '#e53935',
                inactiveTintColor: '#ef9a9a',
            },
            animationEnabled: true,
            navigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused, tintColor }) => {
                    const { routeName } = navigation.state;
                    let iconName;
                    if (routeName === 'Home') {
                        iconName = `ios-home${focused ? '' : '-outline'}`;
                    } else if (routeName === 'Setting') {
                        iconName = `ios-settings${focused ? '' : '-outline'}`;
                    }

                    // You can return any component that you like here! We usually use an
                    // icon component from react-native-vector-icons
                    return <Ionicons name={iconName} size={25} color={tintColor} />;
                },
            }),
        }
    );

export default Index;