import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native'


export default class App extends Component {
    render() {
        return (
            <View style={styles.box}>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    cont: {
        height: 120,
        width: 80,
        borderWidth: 1,
        marginLeft: 8,
        marginTop: 23,
    },
    images: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    box: {
        borderWidth: 1,   
        marginTop: 150,
        height: 20,
        width: 100,
    },
})

