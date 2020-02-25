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
            <View style={styles.movie}>
                <View style={{ flex: 2 }}>
                    <Image source={{ uri: this.props.filmUri }} style={styles.img} />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    movie: {
        height: 150,
        width: 90,
        borderWidth: 1,
        marginLeft: 8,
        marginTop: 23,
    },
    types: {
        top: 20,
    },
    text: {
        color: '#fff',
        fontFamily: 'Arial',
        fontSize: 16,
    },
    img: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
})

