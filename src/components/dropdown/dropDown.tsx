import React, { FC, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Icons from 'react-native-vector-icons/Octicons'
interface Props {
  label?: string;
  data?: any;
  value?: number;
  setValue?: any;
  name?: string,
  setName?: any,
  classDropdown?: any,
  classWrapvalueDropdown?: any,
  type?:string
}

const Dropdown: FC<Props> = ({ label, data, value, name, setName, setValue, classDropdown, classWrapvalueDropdown,type }) => {
  const [visible, setVisible] = useState(false);
  const toggleDropdown = () => {
    setVisible(!visible);
  };
  const chooseValue = (e: any) => {
    setName(e.name)
    setValue(e.value)
    setVisible(false)
  }

  const renderDropdown = () => {
    if (visible) {
      return (
        <View style={classWrapvalueDropdown}>
          {data.map((e: any) =>
            <Text onPress={() => chooseValue(e)} key={e.value} style={styles.dropdown}>{e.name}</Text>
          )}
        </View>
      );
    }
  };

  return (
   <>
    <TouchableOpacity
      style={[classDropdown, visible ? styles.active : ""]}
      onPress={toggleDropdown}
    >
        {type ? <Icons name='filter' color="#ffffff" size={23}/> : <><Text style={styles.buttonText}>{name === "" ? label : name}</Text>
      <Text style={styles.buttonText}>
      {visible?<Icon name='angle-up' size={17} color="#ffffff"/>:<Icon name='angle-down' size={17} color="#ffffff"/>}
      </Text>
        </>}
    </TouchableOpacity>
     {renderDropdown()}
   </>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 15,
        lineHeight: 22,
        textAlign: "center",
        color: "#ffffff",
  },
  active: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  dropdown: {
    backgroundColor: '#fff',
    fontSize: 13,
    lineHeight: 20,
    width: "100%",
    paddingVertical: 5,
    borderBottomWidth: 1,
    paddingHorizontal: 5,
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default Dropdown;