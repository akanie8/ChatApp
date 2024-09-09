import { Share, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './Home'
import { theme } from '../../constants/theme'
import Mail from './Mail'
import User from './User'
import Heart from './Heart'
import Plus from './Plus'
import Search from './Search'
import Call from './Call'
import Camera from './Camera'
import Edit from './Edit'
import ArrowLeft from './ArrowLeft'
import ThreeDotsCircle from './ThreeDotsCircle'
import ThreeDotsHorizontal from './ThreeDotsHorizontal'
import Logout from './logout'
import Video from './Video'
import Image from './Image'
import Delete from './Delete'
import Send from './Send'
import Lock from './Lock'
import Location from './Location'
import { CommonActions } from '@react-navigation/native'
import Comment from './Comment'

const icons = {
    home: Home,
    mail: Mail,
    lock: Lock,
    user: User,
    heart: Heart,
    plus: Plus,
    search: Search,
    location: Location,
    call: Call,
    camera: Camera,
    edit: Edit,
    arrowLeft: ArrowLeft,
    threeDotsCircle: ThreeDotsCircle,
    threeDotsHorizontal: ThreeDotsHorizontal,
    share: Share,
    logout: Logout,
    video: Video,
    comment: Comment,
    user: User,
    image: Image,
    delete: Delete,
    send: Send,
    search: Search,
}

const Icon = ({name, ...props}) => {
    const IconComponent = icons[name]
  return (
    <IconComponent
        height={props.size || 24}
        width={props.size || 24}
        strokeWidth={props.strokeWidth || 19}
        color={theme.colors.textLight}
        {...props}
    />
  )
}



export default Icon;
