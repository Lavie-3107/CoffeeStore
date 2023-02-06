import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import FirstScreen from './screen/firstScreen/firsrScreen';
import HomeScreen from './screen/home/homeScreen';
import TabBottom from './src/components/navigation/tabBottom/tabBottom';
export default function App() {
  const [showScreen,setShowScreen]=useState(true)
   const showFirstSreen = () => {
        setShowScreen(false)
  }
  setInterval(showFirstSreen, 2000)
  return (
    <>
      {showScreen?<FirstScreen/>:<TabBottom/>}
    </>
  )
}

const styles = StyleSheet.create({

});

