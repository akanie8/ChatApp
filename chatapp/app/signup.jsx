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

const Signup = () => {
  const router = useRouter();

  // State management for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if(!name || !email || !phone || !password){
      return Alert.alert('Error', 'All fields are required');
    }

    setLoading(true);

    try{
      const response = await axios.post('http://172.16.8.100:3001/signup', {
        Name: name,
        Email: email,
        Password: password,
        PhoneNumber: phone,
      });

      if(response.status === 201){
        Alert.alert('Success', 'You have signed up successfully');
        router.push('login');
      }else{
        Alert.alert('Error', response.data.message || 'An error occurred');
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
          <Text style={styles.welcomeText}>Your Journey Starts Here,</Text>
          <Text style={styles.welcomeText}>We Love To See You</Text>
        </View>

        {/* Form Section */}
        <View style={styles.form}>
          <Text style={{ fontSize: hp(2), color: theme.colors.text }}>
            Please enter your details to get started
          </Text>

          {/* Name Input */}
          <Input
            icon={<Icon name={'user'} size={26} strokeWidth={1.6} color={theme.colors.text} />}
            placeholder='Enter your name'
            value={name}
            onChangeText={setName}
          />

          {/* Email Input */}
          <Input
            icon={<Icon name={'mail'} size={26} strokeWidth={1.6} color={theme.colors.text} />}
            placeholder='Enter your valid email'
            value={email}
            onChangeText={setEmail}
          />

          {/* Phone Input */}
          <Input
            icon={<Icon name={'call'} size={26} strokeWidth={1.6} color={theme.colors.text} />}
            placeholder='Enter your valid phone number'
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />

          {/* Password Input */}
          <Input
            icon={<Icon name={'lock'} size={26} strokeWidth={1.6} color={theme.colors.text} />}
            placeholder='Enter your valid password'
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* Submit Button */}
        <Button title={'Sign Up'} loading={loading} onPress={onSubmit} />

        {/* Footer Section */}
        <View style={styles.footer}>
          <Text style={styles.footText}>Already have an account?</Text>
          <Pressable onPress={() => router.push('login')}>
            <Text style={[styles.footText, { color: theme.colors.primaryDark, fontWeight: theme.fonts.semibold }]}>
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Signup;

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
