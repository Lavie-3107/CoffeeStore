import React from 'react'
import { Image, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native'
import  Icon  from 'react-native-vector-icons/AntDesign'

export default function Index() {
  return (
      <SafeAreaView>
          <View style={styles.wrapHeaderInner}>
              <TouchableOpacity>
                  <Icon name="appstore1" size={30} color="#967259"/>
              </TouchableOpacity>
          </View>
   </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    wrapHeaderInner: {
        paddingHorizontal: 35,
        marginTop:40
    }
})
