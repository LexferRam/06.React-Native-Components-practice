import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { HeaderTitle } from '../components/HeaderTitle'
import { ThemeContext } from '../context/themeContext/ThemeContext'
import { styles } from '../Theme/appTheme'

export const ChangeThemeScreen = () => {

    const {setDarkTheme} = useContext(ThemeContext)

  return (
    <View style={styles.globalMargin}>
        <HeaderTitle title='Change Theme' />

        <TouchableOpacity
            onPress={setDarkTheme}
            activeOpacity={0.8}
            style={{
                width:150,
                height:50,
                borderRadius:20,
                backgroundColor:'#5856D6',
                justifyContent:'center',
            }}
        >
            <Text 
                style={{
                    color:'white', 
                    textAlign:'center',
                    fontSize:22,
                }}
            >
                Light / Dark
            </Text>
        </TouchableOpacity>
    </View>
  )
}
