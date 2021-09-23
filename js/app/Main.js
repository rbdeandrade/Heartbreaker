import React, { Component } from 'react'
import { StyleSheet, Platform, Image, Text, View, Button, AppRegistry } from 'react-native'
import firebase from 'react-native-firebase'
import Router from './Routes'

export default class CustomDrawer extends Component {
  render() {
    return(
      <Router />
    );
  }
}

AppRegistry.registerComponent('CustomDrawer', () => CustomDrawer);