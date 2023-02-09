import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import FirstScreen from './screen/firstScreen/firsrScreen';
import HomeScreen from './screen/home/homeScreen';
import TabBottom from './src/components/navigation/tabBottom/tabBottom';
import ProductDetail from './screen/productDetail/productDetail';
import { store } from './redux/store'
import { Provider } from 'react-redux'
export default function App() {
  const [showScreen,setShowScreen]=useState(true)
   const showFirstSreen = () => {
        setShowScreen(false)
  }
  setInterval(showFirstSreen, 2000)
  return (
    <Provider store={store}>
      {showScreen?<FirstScreen/>:<TabBottom/>}
    </Provider>
  )
}

const styles = StyleSheet.create({

});

