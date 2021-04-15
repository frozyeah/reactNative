import {AppRegistry} from 'react-native';
import App from './src/App';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux';

const AppWrapper = () => {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
}

AppRegistry.registerComponent('Vacuum', () => AppWrapper);