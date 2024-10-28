import Input from '@/components/Input';
import PrimaryButton from '@/components/PrimaryButton';
import FacebookIcon from '@/components/svgs/FacebookIcon';
import GoogleIcon from '@/components/svgs/GoogleIcon';
import HideIcon from '@/components/svgs/HideIcon';
import ViewIcon from '@/components/svgs/ViewIcon';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUp = () => {

    const router = useRouter()

    const [params, setParams] = useState({
        email: '',
        password: '',
        confirm_password: ''
    });

    const handleChange = (name: string, value: string) => {
        setParams({
            ...params,
            [name]: value
        });
    };

    const [show, setShow] = useState(false)

    const togglePassword = () => {
        setShow(!show)
    }

    return (
        <SafeAreaView style={styles.myView}>
            <View style={styles.signUpContainer}>
                <Image
                    source={require('@/assets/icons/logo.png')}
                    style={styles.myLogo}
                />
                <Text style={styles.headerTitle}>Sign Up</Text>
                <Input
                    type="email"
                    name="email"
                    value={params.email}
                    handleChange={handleChange}
                    label="Enter your email"
                />

                <Input
                    icon={show ? <ViewIcon /> : <HideIcon />}
                    togglePassword={togglePassword}
                    type={show ? "default" : "password"}
                    name="password"
                    value={params.password}
                    handleChange={handleChange}
                    label="Enter your password"
                />

                <Input
                    icon={show ? <ViewIcon /> : <HideIcon />}
                    togglePassword={togglePassword}
                    type={show ? "default" : "password"}
                    name="confirm_password"
                    value={params.confirm_password}
                    handleChange={handleChange}
                    label="Confirm your password"
                />

                <PrimaryButton label="Sign Up" />

                <Text style={styles.orText}>Or with</Text>

                <PrimaryButton icon={<FacebookIcon />} label="Login with Facebook" />
                <PrimaryButton icon={<GoogleIcon />} variant="outlined" label="Login with Google" />

                <Text style={styles.secondaryText}>
                    Already Have an account?  <Text onPress={() => router.replace('./')} style={styles.blueText}>SignIn</Text>
                </Text>

            </View>
        </SafeAreaView>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    myLogo: {
        width: 60,
        height: 60
    },
    myView: {
        backgroundColor: '#ffffff',
        width: '100%',
        height: '100%',
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    signUpContainer: {
        width: '100%',
        alignItems: 'center',
        padding: 20,
        gap: 14,
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: '600',
    },
    orText: {
        fontSize: 12,
        fontWeight: '500',
    },
    secondaryText: {
        fontSize: 12,
        fontWeight: '500',
    },
    blueText: {
        color: '#0560FD'
    }
});
