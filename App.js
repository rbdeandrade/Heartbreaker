import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { createSwitchNavigator } from 'react-navigation'
// import the different screens
import Loading from './js/login/Loading'
import SignUp from './js/login/SignUp'
import Login from './js/login/Login'
import Main from './js/app/Main'
// create our app's navigation stack
const App = createSwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main,
  },
  {
    initialRouteName: 'Loading'
  }
)
export default App