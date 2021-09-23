import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { NavigationActions } from 'react-navigation'
import firebase from 'react-native-firebase'
import { StyleSheet, ScrollView, Text, View, Button, TouchableOpacity, Alert } from 'react-native'
import { Icon, } from 'react-native-elements'

class SideMenu extends Component {
    state = { currentUser: null }

    componentDidMount() {
        const { currentUser } = firebase.auth()

        this.setState({ currentUser })
    }

    handleLogout = () => {
        firebase
            .auth()
            .signOut()
            .then(() => this.props.navigation.navigate('Login'))
            .catch(error => this.setState({ errorMessage: error.message }))
    }

    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    handleLogout = () => {
        firebase
            .auth()
            .signOut()
            .then(() => this.props.navigation.navigate('Login'))
            .catch(error => this.setState({ errorMessage: error.message }))
    }

    render() {
        const { currentUser } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.topperContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            Alert.alert('Esta é a sua conta!')}}>
                        <Icon
                            name='account-circle'
                            color='#fff'
                            size={100}
                             />
                    </TouchableOpacity>
                    <Text> Hello {currentUser && currentUser.email}! </Text>
                </View>
                <ScrollView>
                    <View>
                        <Text style={styles.sectionHeadingStyle}>
                            Section 1
            </Text>
                        <View style={styles.navSectionStyle}>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Loading')}>
                                Loading
              </Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.sectionHeadingStyle}>
                            Section 2
            </Text>
                        <View style={styles.navSectionStyle}>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('SignUp')}>
                                SignUp
              </Text>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Login')}>
                                Login
              </Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.sectionHeadingStyle} onPress={this.navigateToScreen('Main')}>
                            Main
            </Text>
                    </View>
                </ScrollView>
                <View style={styles.footerContainer}>
                    <Button title="Logout" onPress={this.handleLogout} />
                </View>
            </View>
        );
    }
}

SideMenu.propTypes = {
    navigation: PropTypes.object
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1
    },
    navItemStyle: {
        padding: 10
    },
    navSectionStyle: {
        backgroundColor: 'lightgrey'
    },
    sectionHeadingStyle: {
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    footerContainer: {
        padding: 20,
        backgroundColor: 'lightgrey'
    },
    topperContainer: {
        flex: 1,
        padding: 50,
        backgroundColor: 'lightgrey'
    }
})

export default SideMenu;