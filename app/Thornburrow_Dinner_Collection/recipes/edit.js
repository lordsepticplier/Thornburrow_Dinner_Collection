import { useLocalSearchParams, useRouter } from 'expo-router'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { useEffect, useRef, useState } from 'react'
import AppButton from '../../../components/appButton'
import AppTextInput from '../../../components/appTextInput'
import MiniTitle from '../../../components/MiniTitle'
import Screen from '../../../components/screen'
import Title from '../../../components/Title'
import { db } from '../../Firebase'

export default function Edit() {
  const router = useRouter();
  const Run = useRef(false)
  const [newName, setNewName] = useState("")
  const [newIngredients, setNewIngredients] = useState("")
  const [newSteps, setNewSteps] = useState("")
  const [newNotes, setNewNotes] = useState("")
  const [recipe, setRecipe] = useState([])
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  const params = useLocalSearchParams()
  const item = params.item
  const docID = doc(db, 'recipes', item )
  useEffect (() => {
    if (Run.current){
      return;
    }
      const fetchId = async () => {
        const recipe = await getDoc(docID);
        setRecipe(recipe.data())
        setNewName(recipe.data().name)
        setNewIngredients(recipe.data().ingredients)
        setNewSteps(recipe.data().steps)
        setNewNotes(recipe.data().notes)
      }
      fetchId()
      Run.current = true;
  }, [docID])
  const updateRecipe = async () => {
    const theName= capitalizeFirstLetter(newName)
    await updateDoc(docID, {
      name:theName,
      ingredients:newIngredients,
      steps:newSteps,
      notes:newNotes,
    });
    router.back();
  }
  return (
    <Screen> <Title>Edit {recipe.name}</Title>
      <MiniTitle>Name:</MiniTitle>
      <AppTextInput placeholder='Enter the name!' icon='script-text' value={newName} onChangeText = {(text)=>setNewName(text)}/>
      <MiniTitle>Ingredients:</MiniTitle>
      <AppTextInput placeholder='Enter the ingredients!' icon='script-text' value={newIngredients} onChangeText = {(text)=>setNewIngredients(text)} multiline numberOfLines={4}/>
      <MiniTitle>Steps:</MiniTitle>
      <AppTextInput placeholder='Enter the steps!' icon='script-text' value={newSteps} onChangeText = {(text)=>setNewSteps(text)} multiline numberOfLines={4}/>
      <MiniTitle>Notes:</MiniTitle>
      <AppTextInput placeholder='Enter the notes!' icon='script-text' value={newNotes} onChangeText = {(text)=>setNewNotes(text)} multiline numberOfLines={2}/>
      <AppButton title="Edit" onPress={updateRecipe}/>
    </Screen>
  )
}