import { Alert, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import { theme } from '../constants/theme';
import Icon from '../assets/icons';
import BackButton from '../components/BackButton';
import { useRouter } from 'expo-router';
import { hp, wp } from '../helpers/common';
import Input from '../components/Input';
import Button from '../components/Button';
import axios from 'axios';

const Login = () => {
  const router = useRouter();

  // State management for login form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const onSignIn = async () => {
    if(!email || !password){
      return Alert.alert('Error', 'Email and password are required');
    }

    setLoading(true);

    try{
      const response = await axios.post('http://172.16.8.100:3001/Login', {
        email,
        password,
      });

      if(response.status === 200){
        // Handle successful login, e.g., navigate to home or dashboard
        Alert.alert('Success', 'Login successful');
        // Here you can store the user data or token and navigate
        router.push('index');  // Navigate to the home screen after login
      }else{
        Alert.alert('Error', response.data.message || 'Login failed');
      }
      
    }catch (error){
      console.error('Error:', error);
      Alert.alert('Error', error.response?.data?.message || 'Could not connect to the server');
    } finally{
      setLoading(false);
    }
  };

  return (
    <ScreenWrapper bg="white">
      <StatusBar barStyle={"default"} />
      <View style={styles.container}>
        <BackButton router={router} />

        {/* Welcome Section */}
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome Back,</Text>
          <Text style={styles.welcomeText}>Let's Sign You In</Text>
        </View>

        {/* Form Section */}
        <View style={styles.form}>
          <Text style={{ fontSize: hp(2), color: theme.colors.text }}>
            Please enter your email and password to continue
          </Text>

          {/* Email Input */}
          <Input
            icon={<Icon name={'mail'} size={26} strokeWidth={1.6} color={theme.colors.text} />}
            placeholder='Enter your email'
            value={email}
            onChangeText={setEmail}
          />

          {/* Password Input */}
          <Input
            icon={<Icon name={'lock'} size={26} strokeWidth={1.6} color={theme.colors.text} />}
            placeholder='Enter your password'
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* Submit Button */}
        <Button title={'Sign In'} loading={loading} onPress={onSignIn} />

        {/* Footer Section */}
        <View style={styles.footer}>
          <Text style={styles.footText}>Don't have an account?</Text>
          <Pressable onPress={() => router.push('signup')}>
            <Text style={[styles.footText, { color: theme.colors.primaryDark, fontWeight: theme.fonts.semibold }]}>
              Sign Up
            </Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5),
  },
  welcomeText: {
    fontSize: hp(4),
    fontWeight: theme.fonts.bold,
    color: theme.colors.text,
    textAlign: 'left',
  },
  form: {
    gap: 15,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  footText: {
    textAlign: 'center',
    color: theme.colors.text,
    fontSize: hp(1.6),
  },
  welcomeContainer: {
    marginTop: hp(10),
    marginBottom: hp(3),
  },
});
