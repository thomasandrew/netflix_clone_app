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

export default class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
       <View style={{paddingTop: 23}}>
        <Image style={styles.main_star} source={{ uri: 'https://github.com/KalleHallden/Netflix_Clone/blob/master/netflix_clone/lib/assets/starwars1.jpg?raw=true'}}/>
          <View style={styles.nav}>

            <View style={{marginTop: -12}}>
              <Image source={{ uri: 'https://i.pinimg.com/originals/60/b9/b1/60b9b11b28fde9cc13dd039ce8514076.png' }} style={{width: 50, height:50}}/>
            </View>

            <TouchableOpacity style={{left: 10, fontFamily: 'Arial'}}>
              <Text style={{ color: '#F5FCFF'}}>
                Series 
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ left: 40, fontFamily: 'Arial'}}>
              <Text style={{ color: '#F5FCFF'}}>
                Films
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ left: 70, fontFamily: 'Arial'}}>
              <Text style={{ color: '#F5FCFF'}}>
                My List
              </Text>
            </TouchableOpacity>

          </View>
        </View>

        <Play />




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
    height: 310,
  },
  nav: {
    flexDirection: 'row',
    marginTop: -300,
  },
 
})

