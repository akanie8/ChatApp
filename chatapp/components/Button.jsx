import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const Button = ({
    buttonStyle,
    textStyle,
    title='',
    onPress=() =>{},
    loading = false,
    hasShadow = true,
}) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, buttonStyle]}>
    <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
    button:{
        
    }
})