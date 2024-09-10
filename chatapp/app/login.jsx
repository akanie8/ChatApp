import { Alert, Pressable, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { theme } from '../constants/theme'
import Icon from '../assets/icons'
import BackButton from '../components/BackButton'
import { useRouter } from 'expo-router'
import { hp, wp } from '../helpers/common'
import Input from '../components/Input'
import Button from '../components/Button'

const login = () => {
    const router = useRouter();
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [loading, setloading] = useState(false);

    const onSubmit = async () => {
        if(!emailRef.current || !passwordRef.current){
          Alert.alert('Login', "Please fill all the fields");
          return;
        }
    }

  return (
    <ScreenWrapper bg="white"> 
      <StatusBar barStyle={"default"}/>
      <View style={styles.container}>
      <BackButton router={router}/>
      {/* welcome */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Hello Brethren,</Text>
        <Text style={styles.welcomeText}>Welcome Back</Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
      <Text style={{fontSize: hp(2), color: theme.colors.text}}>
        Please Login to start
      </Text>

      <Input
        icon={<Icon name={'mail'} size={26} strokeWidth={1.6} color={theme.colors.text}/> }
        placeholder='Enter your valid email'
        onChangeText={value => emailRef.current = value}
      />

      <Input
        icon={<Icon name={'lock'} size={26} strokeWidth={1.6} color={theme.colors.text}/> }
        placeholder='Enter your valid password'
        secureTextEntry
        
        onChangeText={value => emailRef.current = value}
      />
      
      <Text style={styles.forgotPassword}>
        Forgot Password?
      </Text>
      </View>
        <Button title={'Login'} loading={loading} onPress={onSubmit} />

        {/* footer */}
        <View style={styles.footer}>
          <Text style={styles.footText}>
            Dont have an account?
          </Text>
          <Pressable>
            <Text style={[styles.footText, {color: theme.colors.primaryDark,fontWeight: theme.fonts.semibold}]}>Sign Up</Text>
          </Pressable>
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
    textAlign: 'left',

  },

  form: {
    gap: 25,
  },
  forgotPassword: {
    textAlign: 'left',
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