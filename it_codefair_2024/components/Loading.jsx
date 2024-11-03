import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native'

const Loading = ({ 
    size = 'large',
    color = 'grey',
}) => {
  return (
    <View style={{
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <ActivityIndicator size={size} color={color} />
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({})