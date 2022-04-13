import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from './src/components/header';
import List from './src/components/list';

export default function App() {

  const [feed, setFeed] = useState([
    {
      id:'1',
      nome:'Carlos',
      descricao:'Mais um dia de Bugs!',
      imageperfil:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTScc8osaNyWUrTD2owjy2n-Ql6Bnz7izrwmg&usqp=CAU",
      imagepub:"https://2.bp.blogspot.com/-fPKwbA4Auvc/VWHmDW255DI/AAAAAAAAeO8/n74AIXXi4mU/s1600/upgrade%2Beh%2Bo%2Bcarai.jpg",
      likeada: true,
      likers: 1      
    },
    {
      id:'2',
      nome:'Joao',
      descricao:'Boa Noite Pessoal!',
      imageperfil:"https://i.pinimg.com/736x/f5/d9/8b/f5d98b3e305d45533bd32d558c70c5d9.jpg",
      imagepub:"https://static4.depositphotos.com/1008939/339/i/600/depositphotos_3390421-stock-photo-night-sky.jpg",
      likeada: false,
      likers: 0  
    },
    {
      id:'3',
      nome:'Jubileu',
      descricao:'Os melhore codigos sai a noite!',
      imageperfil:"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      imagepub:"https://png.pngtree.com/background/20210711/original/pngtree-starry-night-with-crescent-moon-picture-image_1166828.jpg",
      likeada: true,
      likers: 5
    }
  ])

  return (
    <View style={styles.container}>
      <Header/>

      <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      data={feed}
      renderItem={({item}) => <List data={item}/> }
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
