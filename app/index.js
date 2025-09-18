import NetInfo from '@react-native-community/netinfo'
import { useRouter } from 'expo-router'
import {
  createUserWithEmailAndPassword, getAuth,
  GithubAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup
} from 'firebase/auth'
import { useEffect, useState } from 'react'
import AppButton from '../components/appButton'
import AppTextInput from '../components/appTextInput'
import Screen from '../components/screen'
import Title from '../components/Title'

export default function Login() {
  const [isConnected, setIsConnected] = useState(null);
  useEffect (() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
    return () => unsubscribe();
  }, [])
  const router = useRouter();
  const Auth=getAuth();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const createUser = ()=>{
    createUserWithEmailAndPassword(Auth, email, password)
    .then((userCredentials)=>{
      const user = userCredentials.user;
      console.log('User created with email: ', user.email)
    })
    .catch((error)=>alert(error));
  }
  const signIn = ()=>{
    signInWithEmailAndPassword(Auth, email, password)
    .then((userCredentials)=>{
      const user = userCredentials.user;
      console.log('User signin with email: ', user.email)
      if (isConnected === true) {   
        router.replace('Thornburrow_Dinner_Collection/schedule')
      } if (isConnected === false){
        router.replace('Thornburrow_Dinner_Collection/recipes')
      }
    })
    .catch((error)=>alert(error));
  }
  const signInWithGitHub = async () => {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(Auth, provider);
      const user = result.user;
      console.log('GitHub user:', user);
      router.replace('Thornburrow_Dinner_Collection/schedule')
    } catch (error) {
      console.error('GitHub sign-in error:', error);
    };
  }
  const offline = ()=>{
      if (isConnected === false){
        router.replace('Thornburrow_Dinner_Collection/recipes')
      }
  }
  return (
    <Screen>
      <Title>Thornburrow Dinner Collection​</Title>
      <Title>login</Title>
      <AppTextInput placeholder='Enter your email!' autoComplete="email" icon='email' value={email} onChangeText = {(text)=>setEmail(text)}/>
      <AppTextInput placeholder='Enter your password!' icon='lock' value={password} onChangeText = {(text)=>setPassword(text)} secureTextEntry/>
      <AppButton title="Github" onPress={signInWithGitHub}/>
      <AppButton title="Login" onPress={signIn}/>
      <AppButton title="Register" onPress={createUser}/>
      {!isConnected && (
        <AppButton disabled={isConnected} title="Offilne" onPress={offline}/>
      )}
    </Screen>
  )
}