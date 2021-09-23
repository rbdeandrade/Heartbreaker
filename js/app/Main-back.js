import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Button, TouchableOpacity } from 'react-native'
import firebase from 'react-native-firebase'
import { Header, Icon, } from 'react-native-elements'

export default class Main extends React.Component {
  state = { currentUser: null }

  componentDidMount() {
    const { currentUser } = firebase.auth()

    this.setState({ currentUser })
  }

  render() {
    const { currentUser } = this.state

    return (
      <View style={styles.container}>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          barStyle="light-content"
          leftComponent={
            <TouchableOpacity
              onPress={() => this.props.navigation.toggleDrawer()}>
              <Icon
                name='more-vert'
                color='#fff' />
            </TouchableOpacity>
          }
          centerComponent={{
            text: 'Dashboard',
            style: {
              color: '#fff'
            }
          }}
          rightComponent={{
            icon: 'notifications-none',
            color: '#fff'
          }}
          backgroundColor="#b4ce4e"
        />
        <View style={styles.content}>
          <Text>
            Welcome to Heartbreaker ! 
            {currentUser && currentUser.email}
        </Text>
          <Button title="Menu" onPress={() => this.props.navigation.toggleDrawer()} />
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 70,
              position: 'absolute',
              bottom: 10,
              right: 10,
              height: 70,
              borderRadius: 100,
              backgroundColor: '#fff'
            }}
          >
            <Icon name="add" size={30} color="#b4ce4e" underlayColor="#000" />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b4ce4e",
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#b4ce4e",
  },
})