import { collection, getDocs, query, where } from 'firebase/firestore'
import { useState } from 'react'
import { View } from 'react-native'
import Content from '../../components/Content'
import MiniTitle from '../../components/MiniTitle'
import Screen from '../../components/screen'
import SearchAppButton from '../../components/SearchappButton'
import SearchAppTextInput from '../../components/SearchTextInput'
import Title from '../../components/Title'
import { db } from '../Firebase'

export default function Schedule() {
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  const [mon, setMon] = useState("")
  const [tue, setTue] = useState("")
  const [wed, setWed] = useState("")
  const [thu, setThu] = useState("")
  const [fri, setFri] = useState("")
  const [sat, setSat] = useState("")
  const [sun, setSun] = useState("")
  const [monName, setMonName] = useState("")
  const [tueName, setTueName] = useState("")
  const [wedName, setWedName] = useState("")
  const [thuName, setThuName] = useState("")
  const [friName, setFriName] = useState("")
  const [satName, setSatName] = useState("")
  const [sunName, setSunName] = useState("")
  const [monIG, setMonIG] = useState("")
  const [tueIG, setTueIG] = useState("")
  const [wedIG, setWedIG] = useState("")
  const [thuIG, setThuIG] = useState("")
  const [friIG, setFriIG] = useState("")
  const [satIG, setSatIG] = useState("")
  const [sunIG, setSunIG] = useState("")
  const col = collection(db, "recipes")
  const searchMon = async () => {
    const Mon = capitalizeFirstLetter(mon)
    const que = query(col, where("name", "==", Mon))
    const queSnap = await getDocs(que);
    queSnap.forEach((doc) => {
      setMonName(doc.data().name);
      setMonIG(doc.data().ingredients)
    })
  }
  const searchTue = async () => {
    const Tue = capitalizeFirstLetter(tue)
    const que = query(col, where("name", "==", Tue))
    const queSnap = await getDocs(que);
    queSnap.forEach((doc) => {
      setTueName(doc.data().name);
      setTueIG(doc.data().ingredients)
    })
  }
  const searchWed = async () => {
    const Wed = capitalizeFirstLetter(wed)
    const que = query(col, where("name", "==", Wed))
    const queSnap = await getDocs(que);
    queSnap.forEach((doc) => {
      setWedName(doc.data().name);
      setWedIG(doc.data().ingredients)
    })
  }
  const searchThu = async () => {
    const Thu = capitalizeFirstLetter(thu)
    const que = query(col, where("name", "==", Thu))
    const queSnap = await getDocs(que);
    queSnap.forEach((doc) => {
      setThuName(doc.data().name);
      setThuIG(doc.data().ingredients)
    })
  }
  const searchFri = async () => {
    const Fri = capitalizeFirstLetter(fri)
    const que = query(col, where("name", "==", Fri))
    const queSnap = await getDocs(que);
    queSnap.forEach((doc) => {
      setFriName(doc.data().name);
      setFriIG(doc.data().ingredients)
    })
  }
  const searchSat = async () => {
    const Sat = capitalizeFirstLetter(sat)
    const que = query(col, where("name", "==", Sat))
    const queSnap = await getDocs(que);
    queSnap.forEach((doc) => {
      setSatName(doc.data().name);
      setSatIG(doc.data().ingredients)
    })
  }
  const searchSun = async () => {
    const Sun = capitalizeFirstLetter(sun)
    const que = query(col, where("name", "==", Sun))
    const queSnap = await getDocs(que);
    queSnap.forEach((doc) => {
      setSunName(doc.data().name);
      setSunIG(doc.data().ingredients)
    })
  }
  return (
    <Screen>
      <Title>Week Planner</Title>
      <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center", flexWrap:"wrap"}}>
        <MiniTitle style={{}}>Monday:</MiniTitle>
        <SearchAppTextInput placeholder='Search name!' icon='script-text' value={mon} onChangeText = {(text)=>setMon(text)}/>
        <SearchAppButton title="Search" onPress={searchMon}/>
      </View>
      <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center", flexWrap:"wrap"}}>
        <MiniTitle style={{}}>Tuesday:</MiniTitle>
        <SearchAppTextInput placeholder='Search name!' icon='script-text' value={tue} onChangeText = {(text)=>setTue(text)}/>
        <SearchAppButton title="Search" onPress={searchTue}/>
      </View>
      <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center", flexWrap:"wrap"}}>
        <MiniTitle style={{}}>Wednesday:</MiniTitle>
        <SearchAppTextInput placeholder='Search name!' icon='script-text' value={wed} onChangeText = {(text)=>setWed(text)}/>
        <SearchAppButton title="Search" onPress={searchWed}/>
      </View>
      <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center", flexWrap:"wrap"}}>
        <MiniTitle style={{}}>Thursday:</MiniTitle>
        <SearchAppTextInput placeholder='Search name!' icon='script-text' value={thu} onChangeText = {(text)=>setThu(text)}/>
        <SearchAppButton title="Search" onPress={searchThu}/>
      </View>
      <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center", flexWrap:"wrap"}}>
        <MiniTitle style={{}}>Friday:</MiniTitle>
        <SearchAppTextInput placeholder='Search name!' icon='script-text' value={fri} onChangeText = {(text)=>setFri(text)}/>
        <SearchAppButton title="Search" onPress={searchFri}/>
      </View>
      <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center", flexWrap:"wrap"}}>
        <MiniTitle style={{}}>Saturday:</MiniTitle>
        <SearchAppTextInput placeholder='Search name!' icon='script-text' value={sat} onChangeText = {(text)=>setSat(text)}/>
        <SearchAppButton title="Search" onPress={searchSat}/>
      </View>
      <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center", flexWrap:"wrap"}}>
        <MiniTitle style={{}}>Sunday:</MiniTitle>
        <SearchAppTextInput placeholder='Search name!' icon='script-text' value={sun} onChangeText = {(text)=>setSun(text)}/>
        <SearchAppButton title="Search" onPress={searchSun}/>
      </View>
      <Title>Shopping List</Title>
      <View>
        <MiniTitle>{monName}: <Content>{monIG}</Content></MiniTitle>
        <MiniTitle>{tueName}: <Content>{tueIG}</Content></MiniTitle>
        <MiniTitle>{wedName}: <Content>{wedIG}</Content></MiniTitle>
        <MiniTitle>{thuName}: <Content>{thuIG}</Content></MiniTitle>
        <MiniTitle>{friName}: <Content>{friIG}</Content></MiniTitle>
        <MiniTitle>{satName}: <Content>{satIG}</Content></MiniTitle>
        <MiniTitle>{sunName}: <Content>{sunIG}</Content></MiniTitle>
      </View>
    </Screen>
  )
}