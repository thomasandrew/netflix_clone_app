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

//https://player.vimeo.com/video/218281086
export default class App extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            height: 210,
            width: 374,
          }}>
          <Image
            source={{
              uri:
                'https://c9.quickcachr.fotos.sapo.pt/i/Ge6175120/21308271_zhjqD.jpeg',
            }}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: 'cover',
            }}
          />
        </View>
        <View style={{
          backgroundColor: '#000',
          padding: 18
        }}>
          <View>
            <TouchableOpacity>
              <View style={styles.play_now}>
              <View style={styles.movePlay}>
                <Icon
                  type="font-awesome"
                  name="play"
                  size={20}
                  color="#181818"
                />
                </View>
                <View>
                  <Text style={{
                    fontFamily: 'Verdana',
                    marginLeft: 90,
                    marginTop: -19
                    }}>Play</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          
           <View>
            <TouchableOpacity>
              <View style={styles.myList}>
              <View style={styles.movePlay}>
                <Icon type='ionicon' name='md-add' size={23} color="#fff" />
                </View>
                <View>
                  <Text style={{
                    fontFamily: 'Verdana',
                    marginLeft: 80,
                    marginTop: -23,
                    color: '#fff'
                    }}>My List</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>


          <View />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  play_now: {
    backgroundColor: '#fff',
    width: 170,
    padding: 10,
    borderRadius: 2,
  },
  movePlay: {
    marginLeft: -20,
  },
  myList: {
    backgroundColor: '#333',
    width: 170,
    padding: 8,
    marginLeft: 180,
    borderRadius: 3,
    marginTop: -40
  },
})
