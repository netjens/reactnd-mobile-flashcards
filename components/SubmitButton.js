import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { purple ,white} from '../utils/colors'


export default function SubmitButton({onPress}) {
    return (
        <TouchableOpacity
            style={styles.submitBtn}
            onPress={onPress}>
            <Text style={styles.submitBtnText}>SUBMIT</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    submitBtn: {
        backgroundColor: purple,
        marginTop: 30,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        alignSelf: 'center',
        justifyContent: 'center'
        
    },
    submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center'
    }
})