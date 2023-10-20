/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import NavigationWrapper from './src/navigation/NavigationWrapper';

const AppContainer = () => (
  <NavigationWrapper>
    <App />
  </NavigationWrapper>
);

AppRegistry.registerComponent(appName, () => AppContainer);
