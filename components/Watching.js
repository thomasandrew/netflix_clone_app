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
      <View style={styles.cont}>
        <View style={{ flex: 2 }}>
          <Image source={{ uri: this.props.conti }} style={styles.images} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
    height: 140,
    width: 110,
    borderWidth: 1,
    marginLeft: 17,
    marginTop: -7,
  },
  images: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
});
