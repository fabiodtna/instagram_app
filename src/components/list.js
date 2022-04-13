import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function List(props){

    function carregaicon(likeada){
        return likeada ? require('../img/likeada.png') :
        require('../img/like.png')
    }
    
    function mostraLikes(likers){
        if(likers === 0){
            return;
        }

        return(
            <Text style={styles.likes}>{likers} {likers > 1 ? 'curtidas': 'curtida'}</Text>
        );

    }

    return(
        <View>
            <View style={styles.viewperfil}>
                <Image
                source={{uri:props.data.imageperfil}}
                style={styles.fotoPerfil}
                />
                <Text
                style={styles.nomeUser}
                >{props.data.nome}</Text>
            </View>

            <Image
            source={{uri:props.data.imagepub}}
            style={styles.fotopub}/>

            <View style={styles.areabtn}>
                <TouchableOpacity>
                    <Image 
                    source={carregaicon(props.data.likeada)}
                    style={styles.iconlike}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnsend}>
                    <Image 
                    source={require('../img/coment.png')}
                    style={styles.iconlike}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnsend}>
                    <Image 
                    source={require('../img/direct.png')}
                    style={styles.iconlike}
                    />
                </TouchableOpacity>
            </View>

            {mostraLikes(props.data.likers)}
            
            <Text style={styles.descricaotext}>{props.data.descricao}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    
    viewperfil:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        padding:8
    },
    fotoPerfil:{
        width:50,
        height:50,
        borderRadius:25
    },
    nomeUser:{
        paddingLeft:10,
        fontSize:18
    },
    fotopub:{
        height:300,
        resizeMode:'cover'        
    },
    areabtn:{
        flexDirection:'row',
        padding:5
    },
    iconlike:{
        width:30,
        height:30
    },
    btnsend:{
        paddingLeft:5
    },
    likes:{
        fontWeight:'bold',
        marginLeft: 5
    },
    descricaotext:{
        fontSize:16,
        marginLeft:10,
        marginBottom:5
    }

})