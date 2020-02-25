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
            <View style={styles.types}>
                <Text style={styles.text}>
                    {this.props.txt}
                </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    types: {
        top: 20,
    },
    text: {
        color: '#fff',
        fontFamily: 'Arial',
        fontSize: 16,
    },
   
})

