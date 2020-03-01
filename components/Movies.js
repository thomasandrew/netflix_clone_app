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
        height: 190,
        width: 110,
        borderWidth: 1,
        marginLeft: 17,
        marginTop: -5,
    },
    img: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
})
