import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const PrimaryButton = ({ label, borderColor, width, icon, variant, onPress }: any) => {

    let styles = StyleSheet.create({
        btn: {
            width: width || '100%',
            height: 46,
            padding: 10,
            paddingHorizontal: width ? 16 : 10,
            backgroundColor: '#0560FD',
            borderColor: '#0560FD',
            borderWidth: 1,
            borderRadius: 6,
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            justifyContent: 'center'
        },
        btnText: {
            fontSize: 14,
            color: '#ffffff',
            fontWeight: '500',
            textAlign: 'center'
        },
        secondaryBtn: {
            width: width || '100%',
            height: 46,
            padding: 10,
            paddingHorizontal: width ? 16 : 10,
            borderColor: borderColor || '#0560FD',
            borderRadius: 6,
            borderWidth: 1,
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            justifyContent: 'center'
        },
        secondaryBtnTxt: {
            fontSize: 14,
            color: '#121212',
            fontWeight: '500',
            textAlign: 'center'
        }
    })

    if (variant === 'outlined') {
        return (
            <TouchableOpacity onPress={onPress} style={styles.secondaryBtn}>
                {icon}
                <Text style={styles.secondaryBtnTxt}>
                    {label}
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <TouchableOpacity onPress={onPress} style={styles.btn}>
            {icon}
            <Text style={styles.btnText}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default PrimaryButton

