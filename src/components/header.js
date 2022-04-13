import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
           <TouchableOpacity>
                <Image 
                source={require('../img/logo.png')}
                style={styles.logo}
                /> 
           </TouchableOpacity>

           <TouchableOpacity>
                <Image 
                source={require('../img/direct.png')}
                style={styles.direct}/> 
           </TouchableOpacity>
        </View>
 );
}

const styles = StyleSheet.create({
    header:{
        marginTop:25,
        height:55,
        backgroundColor:'#fff',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"space-between",
        paddingHorizontal:20,
        borderBottomWidth:0.6,
        shadowColor:'black',
    },
    logo:{
        width:90,
        height:40,
        resizeMode: 'contain', 
    },
    direct:{
        width:25,
        height:25,
        resizeMode: 'contain', 
    }
})