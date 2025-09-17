import { addDoc, collection } from 'firebase/firestore'
import { useState } from 'react'
import AppButton from '../../components/appButton'
import AppTextInput from '../../components/appTextInput'
import Screen from '../../components/screen'
import Title from '../../components/Title'
import { db } from '../Firebase'

export default function Add() {
  const [newName, setNewName] = useState("")
  const [newIngredients, setNewIngredients] = useState("")
  const [newSteps, setNewSteps] = useState("")
  const [newNotes, setNewNotes] = useState("")
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  const addRecipe = async () => {
    const theName =capitalizeFirstLetter(newName)
      await addDoc(collection(db, 'recipes'), {
        name:theName,
        ingredients:newIngredients,
        steps:newSteps,
        notes:newNotes,
      });
      setNewName("");
      setNewIngredients("");
      setNewSteps("");
      setNewNotes("");
  }
  return (
    <Screen> <Title>Add the Recipe</Title>
      <AppTextInput placeholder='Enter the name!' icon='script-text' value={newName} onChangeText = {(text)=>setNewName(text)}/>
      <AppTextInput placeholder='Enter the ingredients!' icon='script-text' value={newIngredients} onChangeText = {(text)=>setNewIngredients(text)} multiline numberOfLines={4}/>
      <AppTextInput placeholder='Enter the steps!' icon='script-text' value={newSteps} onChangeText = {(text)=>setNewSteps(text)} multiline numberOfLines={4}/>
      <AppTextInput placeholder='Enter the notes!' icon='script-text' value={newNotes} onChangeText = {(text)=>setNewNotes(text)} multiline numberOfLines={2}/>
      <AppButton title="Add" onPress={addRecipe}/>
    </Screen>
  )
}