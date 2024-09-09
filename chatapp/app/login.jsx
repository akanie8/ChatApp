import { StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { theme } from '../constants/theme'
import Icon from '../assets/icons'
import BackButton from '../components/BackButton'
import { useRouter } from 'expo-router'
import { hp, wp } from '../helpers/common'
import Input from '../components/Input'

const login = () => {
    const router = useRouter();
  return (
    <ScreenWrapper> 
      <StatusBar barStyle={"default"}/>
      <View style={styles.container}>
      <BackButton router={router}/>
      {/* welcome */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Hey Warrior!</Text>
        <Text style={styles.welcomeText}>Welcome Back</Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
      <Text style={{fontSize: hp(1,5), color: theme.colors.text}}>
        Please Login to start
      </Text>
      <Input
        icon={<Icon name={'mail'} size={26} strokeWidth={1.6} /> }
        placeholder='Enter your valid email'
        onChangeText={value=>{}}
      />
      </View>

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
    textAlign: 'left'
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
  },
  welcomeContainer:{
    marginTop: hp(15),
    marginButtom: hp(5),
  }
})