import React from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';


const Input = ({ name, icon, togglePassword, type, value, label, handleChange }: any) => {
    return (
        <View style={styles.myView}>
            <TextInput
                keyboardType={type === 'password' ? 'default' : type}  // Sets keyboard type based on type prop
                secureTextEntry={type === 'password'}  // Enable secure text for password
                value={value}
                onChangeText={(thisValue: any) => handleChange(name, thisValue)}
                style={styles.textInput}
                placeholder={label}
                placeholderTextColor="#80808070"
            />

            {
                icon &&
                <Pressable onPress={togglePassword} style={styles.icon}>
                    {icon}
                </Pressable>
            }
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    icon: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    myView: {
        width: '100%',
        position: 'relative'
    },
    textInput: {
        backgroundColor: '#f2f2f2',
        borderRadius: 6,
        width: '100%',
        height: 46,
        padding: 10,
        color: '#808080',
        fontSize: 12,
    },
});
