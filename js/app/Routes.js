import Loading from '../login/Loading'
import SignUp from '../login/SignUp'
import Login from '../login/Login'
import Main from './Main-back'
import SideMenu from './SideMenu/SideMenu'
import {DrawerNavigator, DrawerItems} from 'react-navigation'
import React from 'react'
import {Text,Button,} from 'react-native'

export default DrawerNavigator({
    Loading: {
    screen: Loading
  },
  SignUp: {
    screen: SignUp
  },
  Login: {
    screen: Login
  },
  Main: {
    screen: Main
  },
}, {
  contentComponent: SideMenu,
  drawerWidth: 300,
});