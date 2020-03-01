import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
       <View style={styles.oriMovie}>
                <View style={{ flex: 2 }}>
                    <Image source={{ uri: this.props.oriUri }} style={styles.oriImg} />
                </View>
            </View>
    );
  }
}

const styles = StyleSheet.create({
    oriMovie: {
        height: 350,
        width: 170,
        borderWidth: 1,
        marginLeft: 17,
        marginTop: -5,
    },
    oriImg: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
});
