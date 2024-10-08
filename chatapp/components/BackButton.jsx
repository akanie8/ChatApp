import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from '../assets/icons'
import { theme } from '../constants/theme'


const BackButton = ({size=30, router}) => {
  return (
    <Pressable onPress={() => router.back()} style={styles.button}>
      <Icon name='arrowLeft' strokeWidth={3} size={size} color={theme.colors.text} />
    </Pressable>
  )
}

export default BackButton

const styles = StyleSheet.create({
  button:{
    alignSelf: 'flex-start',
    padding: 5,
    borderRadius: theme.radius.md,
    shadowOffset: 0.2,
    shadowOpacity: 0.2,
    top: 0,
    left: 0,
    position: 'absolute'
  }
})