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
              {/*  <View>
                    <Text>
                       Popular on Netflix
                    </Text>
                </View>
                <View style={{flex: 2}}>
                    <Image source={{ uri: this.props.film }} style={styles.img}/>
                </View>
                 */}
            </View>  
        )
    }
}

{/*
const styles = StyleSheet.create({
    movie: {
        height: 130,
        width: 130,
        borderWidth: 1,
        marginLeft: 20,
    },
}) */}

