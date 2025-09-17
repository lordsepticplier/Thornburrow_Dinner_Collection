import NetInfo from '@react-native-community/netinfo';
import { useRouter } from 'expo-router';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import AppButton from '../../../components/appButton';
import Title from '../../../components/Title';
import { db } from '../../Firebase';


export default function Recipes() {
  const [isConnected, setIsConnected] = useState(null);
  const [refresh, setRefresh] = useState(true);
  useEffect (() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
    return () => unsubscribe();
  }, [])
  useEffect (() => {
    setRefresh(false)
  })
  const router = useRouter();
  const [items, setItems] = useState([]);
  const fetchData = async () => {
    const recData = await getDocs(collection(db, 'recipes'))
    const data = recData.docs.map(doc=> ({id: doc.id, ...doc.data(),}))
    setItems(data);
  }
  useEffect (() => {
    if (isConnected === true) {   
      fetchData()
      setRefresh(true)
    } if (isConnected === false){
      const offline= [{id:'1', name : "Pizza"},{id:'2',name : "Teriyaki Chicken"},{id:'3',name : "Chicken Pot Pie"}]
      setItems(offline);  
    }
  }, [isConnected, refresh])
  return (
    <View style={{alignItems:'center',}}>
      <Title>Recipes</Title>
      <FlatList data={items} renderItem={({ item }) =>
        <AppButton title={item.name} onPress={()=>{router.push({pathname:'Thornburrow_Dinner_Collection/recipes/recipe', params:{item:item.id}});}}/>
      }/>
    </View>
  )
}

