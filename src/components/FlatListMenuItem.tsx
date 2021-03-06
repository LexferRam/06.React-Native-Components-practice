import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MenuItem } from '../interfaces/interfaces'
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, useTheme } from '@react-navigation/native';

interface Props {
  menuItem: MenuItem
}

export const FlatListMenuItem = ({ menuItem }: Props) => {

  const navigation=useNavigation()
  // const {colors} = useTheme()

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => navigation.navigate(menuItem.component as any)}
    >
      <View style={styles.container}>
        <Icon
          name={menuItem.icon}
          color='gray'
          size={23}
        />

        <Text 
          style={{
            ...styles.itemText, 
            // color:colors.text
          }}>
            {menuItem.name}
        </Text>

        <View style={{ flex: 1 }} />
        <Icon
          name='chevron-forward-outline'
          color='#5856D6' 
          size={23}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row'
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19
  }
});