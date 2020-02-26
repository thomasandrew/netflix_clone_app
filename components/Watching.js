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
            <View style={styles.cont}>
                <View style={{ flex: 2 }}>
                    {/*<Image source={{ uri: this.props.wacthUri }} style={styles.images} /> */}
                    <Image source={{ uri: 'https://i.pinimg.com/564x/e2/15/5b/e2155ba33358d3a4f46ca6d23cde7fde.jpg' }} style={styles.images} />
                </View>

                <View style={styles.box}>
                   
                </View>
                
           


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
})

