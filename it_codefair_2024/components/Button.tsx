import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { hp } from '@/helpers/common'
import Loading from '@/components/Loading'

type ButtonProps = {
    buttonStyle?: object,
    textStyle?: object,
    title?: string,
    onPress?: () => void,
    loading?: boolean,
    hasShadow?: boolean,
}

const Button: React.FC<ButtonProps> = ({
    buttonStyle = {},
    textStyle = {},
    title = '',
    onPress = () => {},
    loading = false,
    hasShadow = true,
}) => {
    const shadowStyle = {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
    }

    if (loading) {
        return (
            <View style={[styles.button, buttonStyle, {backgroundColor: 'white'}]}> 
                <Loading />
            </View>  
        )
    }

    return (
        <Pressable onPress={onPress} style={[styles.button, buttonStyle, hasShadow && shadowStyle]}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </Pressable>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'green',
        height: hp(6.6),
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderCurve: 'continuous',
    },
    text: {
        fontSize: hp(2.5),
        color: 'white',
        fontWeight: '600',
    },
})