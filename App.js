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
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { Icon } from 'react-native-elements'
import HomeS from './components/HomeS'

function HomeScreen() {
  return (
     <HomeS />
  )
}

function SearchScreen() {
    return (
    <View style={styles.search}>
     <Text style={{ fontSize: 25, color: '#fff' }}>Coming Soon</Text>
    </View>
  )
}

function DownloadScreen() {
    return (
    <View style={styles.download}>
     <Text style={{ fontSize: 25, color: '#fff' }}>Coming Soon</Text>
    </View>
  )
}

function MoreScreen() {
    return (
    <View style={styles.more}>
     <Text style={{ fontSize: 25, color: '#fff' }}>Coming Soon</Text>
    </View>
  )
}

const Tab = createMaterialBottomTabNavigator()

function MyTabs() {
  return (
     <Tab.Navigator
       barStyle={{ backgroundColor: '#000' }}
     >

      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={25} />   
          ),
        }}
        />

      <Tab.Screen 
        name="Search" 
        component={SearchScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon type="font-awesome" name="search" size={23} color={color} />   
          ),
        }} 
        />

      <Tab.Screen 
        name="Download" 
        component={DownloadScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="download-multiple" color={color} size={25} />   
          ),
        }}
        />

      <Tab.Screen 
      name="More" 
      component={MoreScreen} 
      options={{
        tabBarIcon: ({ color, size }) => (
           <Icon type="font-awesome" name="list" size={23} color={color} />   
        ),
      }}
      />

     </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
       <MyTabs />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  search: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  download: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
  more: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
});
