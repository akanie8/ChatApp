import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { theme } from '../constants/theme'
import Icon from '../assets/icons'
import Home from '../assets/icons/Home'
import BackButton from '../components/BackButton'
import { useRouter } from 'expo-router'
import { hp, wp } from '../helpers/common'
const login = () => {
    const router = useRouter();
  return (
    <ScreenWrapper> 
      <StatusBar barStyle={"default"}/>
      <View style={styles.container}>
      <BackButton router={router}/>
      </View>
    </ScreenWrapper>
  )  
}

export default login

const styles = StyleSheet.create({
  container:{
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5)
  },

  welcomeText:{
    fontSize: hp(4),
    fontWeight: theme.fonts.bold,
    color: theme.colors.text,
  },

  form: {
    gap: 25,
  },
  forgotPassword: {
    textAlign: 'right',
    fontWeight: theme.fonts.semibold,
    color: theme.colors.text,
  },
  footer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'centre',
    gap: 5,
  },
  footText:{
    textAlign: 'center',
    color: theme.colors.text,
    fontSize: hp(1.6)
  }
})