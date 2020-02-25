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
import Play from './components/Play'
import Movies from './components/Movies'

export default class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{  }}>
          <Image style={styles.main_star} source={{ uri: 'https://i.pinimg.com/originals/88/eb/2d/88eb2df9b2a2a547f093646d3149dfef.jpg' }} />
          <View style={styles.nav}>
            <View style={{ marginTop: -12 }}>
              <Image source={{ uri: 'https://i.pinimg.com/originals/60/b9/b1/60b9b11b28fde9cc13dd039ce8514076.png' }} style={{ width: 50, height: 50 }} />
            </View>
            <TouchableOpacity style={{ left: 10, fontFamily: 'Arial' }}>
              <Text style={{ color: '#fff' }}>
                Series
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ left: 40, fontFamily: 'Arial' }}>
              <Text style={{ color: '#fff' }}>
                Films
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ left: 70, fontFamily: 'Arial' }}>
              <Text style={{ color: '#fff' }}>
                My List
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Play />
        {/*<View style={styles.filmList}>
          <ScrollView horizontal={true}>

              <Movies />

          </ScrollView>
        </View> */}



      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    // backgroundColor: '#F5FCFF',
  },
  main_star: {
    height: 340,
  },
  nav: {
    flexDirection: 'row',
    marginTop: -303,
  },
  filmList: {
    borderWidth: 1,
    marginTop: -45,
  },

})

