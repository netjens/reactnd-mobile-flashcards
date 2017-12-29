import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { purple,white } from '../utils/colors'


export default function Button({ children, onPress, style = {} }) {
    return (
        <TouchableOpacity
            style={[styles.button,style]}
            onPress={onPress}>
            <Text style={[styles.buttonText]}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    button: {
        marginTop: 30,
        padding: 10,
        width: 150,
        height: 45,
        borderRadius: 2,
        alignSelf: 'center',
        justifyContent: 'center'
        
    },
    buttonText: {
        color: white,
        fontSize: 22,
        textAlign: 'center'
    }
})