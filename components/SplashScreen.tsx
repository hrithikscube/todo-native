import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const CustomSplashScreen = () => {
    return (
        <View style={styles.myView}>
            <Image
                source={require('@/assets/icons/logo.png')}
                style={styles.myLogo}
            />
        </View>
    )
}

export default CustomSplashScreen

let styles = StyleSheet.create({
    myView: {
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    myText: {
        fontSize: 20,
        fontWeight: 500
    },
    myLogo: {
        width: 150,
        height: 150
    }
})