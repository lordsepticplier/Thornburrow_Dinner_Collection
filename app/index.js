import { useRouter } from 'expo-router'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { useState } from 'react'
import { Text, View } from 'react-native'
import AppButton from '../components/appButton'
import AppTextInput from '../components/appTextInput'
import "../Firebase"

export default function Login() {
  const router = useRouter();
  const auth=getAuth();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const createUser = ()=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials)=>{
      const user = userCredentials.user;
      console.log('User created with email: ', user.email)
    })
    .catch((error)=>alert(error));
  }
  return (
    <View>
      <Text>login</Text>
      <AppTextInput placeholder='Enter your email!' icon='email' value={email} onChangeText = {(text)=>setEmail(text)}/>
      <AppTextInput placeholder='Enter your password!' icon='lock' value={password} onChangeText = {(text)=>setPassword(text)} secureTextEntry/>
      <AppButton title="Login"/>
      <AppButton title="Register" onPress={createUser} />
    </View>
  )
}