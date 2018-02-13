import React from 'react';
import axios from 'axios';
import {Asset, AppLoading} from 'expo';
import { COLOR, ThemeProvider } from 'react-native-material-ui';

import Index from './scenes/index';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
        };
    }

    render() {
        if (!this.state.isReady) {
            return (
                <AppLoading
                    startAsync={this._cacheResourcesAsync}
                    onFinish={() => this.setState({isReady: true})}
                    onError={console.warn}
                />
            );
        }

        return (
            <ThemeProvider uiTheme={uiTheme}>
                <Index/>
            </ThemeProvider>
        );
    }

    async _cacheResourcesAsync() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve(true)
            }, 20);
        });
    }
}

const uiTheme = {
    palette: {
        primaryColor: '#039be5',
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
};
