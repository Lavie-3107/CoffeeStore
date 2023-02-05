import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { TypeInput } from "./interface"
const Input: React.FC<TypeInput> = ({
  placeholder,
  classesInput,
  onChange,
  value
}) => {
  return (
    <TextInput style={classesInput} placeholder={placeholder} value={value} onChangeText={(text) => onChange(text)} />
  )
}

export default Input
