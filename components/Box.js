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
      <View style={styles.box}>
        <Text style={styles.episode}>{this.props.infor}</Text>
        <View style={styles.information}>
          <Icon type="font-awesome" name="info-circle" size={20} color="#fff" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    marginTop: 136,
    marginLeft: -110,
    height: 30,
    width: 110,
    backgroundColor: '#000',
  },
  episode: {
    color: '#fff',
    left: 8,
    top: 5,
  },
  information: {
    left: 35,
    bottom: 13,
  },
});
