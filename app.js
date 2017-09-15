import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppNavigator from './src/router';

export default class App extends Component {
  render() {
    return (
      <AppNavigator></AppNavigator>
    );
  }
}