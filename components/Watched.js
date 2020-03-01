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
import { Icon } from 'react-native-elements';

export default class App extends Component {
  render() {
    return (
      <View style={styles.information}>
        <Image source={{ uri: 'https://dressagirl.pt/wp-content/uploads/2019/07/play-button-overlay-png.png' }} style={styles.playc} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  information: {
    left: 35,
    bottom: 110,
  },
  playc: {
    width: 80,
    height: 80,
 },
});
