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
import { Icon } from 'react-native-elements'

export default class App extends Component {
    render() {
        return (
           
                <View style={styles.play}>
                <TouchableOpacity style={{left: 10}}>
                   <View style={styles.plus}>
                        <Icon type='ionicon' name='md-add' size={30} color="#fff" />
                    </View>
                    <View>
                        <Text style={styles.my}>My List</Text>
                    </View>
                </TouchableOpacity>    

                <View>
                    <TouchableOpacity style={styles.btn_play}>
                       <View style={{marginLeft: -50, marginTop: 7}}>
                            <Icon type='font-awesome' name='play' size={20} color='#181818' /> 
                        </View>
                         
                        <View style={{marginLeft: 40, bottom: 19}}>
                            <Text style={{fontFamily: 'Verdana'}}>
                               Play
                            </Text>
                        </View> 
                        
                    </TouchableOpacity>
                    
                </View> 
                 



                </View>
            
        )
    }
}

const styles = StyleSheet.create({
    play: {
        marginTop: 270,
       
    },
    plus: {
        marginLeft: -200,
    },
    my: {
        color: '#fff',
        marginTop: -5,
        marginLeft: 5,
    },
    btn_play: {
        borderWidth: 1,
        width: 90,
        height: 35,
        marginLeft: 80,
        marginTop: -40,
        backgroundColor: '#fff',
    },

})

