import React from 'react';
import {View, Text} from 'react-native'
import AppLoading from 'expo-app-loading'
import {useFonts, Ubuntu_700Bold, Ubuntu_400Regular, Ubuntu_500Medium} from '@expo-google-fonts/ubuntu'
import {Produto} from './src/screens/Produto'

export default function App(){
  const [fontsLoaded] = 
  useFonts({Ubuntu_700Bold, Ubuntu_400Regular, Ubuntu_500Medium})

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return(
    <Produto/>
  )
}