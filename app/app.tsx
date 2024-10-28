import Input from '@/components/Input';
import React, { useState } from 'react';
import MenuIcon from '@/components/svgs/MenuIcon';
import PrimaryButton from '@/components/PrimaryButton';
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

let categoriesList = [
    {
        name: 'In Progress',
        value: 'In Progress'
    },
    {
        name: 'To Do',
        value: 'To Do'
    },
    {
        name: 'Completed',
        value: 'Completed'
    },
]

const App = () => {

    const [mStates, setMStates] = useState({
        todo: {
            isOpen: false
        }
    }) as any

    const toggleModalOpen = (name: any) => {
        let temp = { ...mStates }
        temp[name].isOpen = true
        setMStates(temp)
    }

    const toggleModalClose = (name: any) => {
        let temp = { ...mStates }
        temp[name].isOpen = false
        setMStates(temp)
    }

    const [params, setParams] = useState({
        search: '',
        name: '',
    })

    const [activeCategory, setActiveCategory] = useState('In Progress')

    const [todos, setTodos] = useState([
        {
            name: 'Nisi laborum nisi nulla do.',
            status: 'To Do',
        },
        {
            name: 'Excepteur do veniam sunt quis dolor elit ullamco eu.',
            status: 'Completed'
        },
        {
            name: 'Excepteur do veniam sunt quis dolor elit ullamco eu.',
            status: 'In Progress'
        },
    ])

    const handleChange = (name: any, value: any) => {
        setParams({
            ...params,
            [name]: value
        })
    }

    return (
        <SafeAreaView style={styles.myView}>

            <View style={styles.columnContainer}>
                <View style={styles.avatarContainer}>

                    <View style={styles.imgTextContainer}>
                        <Image
                            source={require('@/assets/images/avatar.png')}
                            style={styles.avatar}
                        />
                        <Text style={styles.avatarText}>Hello, <Text style={styles.bold}>Hrithik</Text></Text>
                    </View>

                    <>
                        {/* menu options: about, logout */}
                        <Pressable style={styles.iconBtn}>
                            <MenuIcon />
                        </Pressable>
                    </>
                </View>

                <Input
                    name="search"
                    value={params.search}
                    handleChange={handleChange}
                    label="Find your task here."
                />

                <Text style={styles.categoriesTitle}>Your Task</Text>

                <View style={styles.categoriesContainer}>
                    {
                        React.Children.toArray(categoriesList.map(item => (
                            <PrimaryButton
                                borderColor="#80808040"
                                width="fit"
                                onPress={() => setActiveCategory(item.name)}
                                variant={activeCategory === item.name ? '' : 'outlined'}
                                label={item.name}
                            />
                        )))
                    }
                </View>

            </View>
        </SafeAreaView>
    )
}

export default App

const styles = StyleSheet.create({

    myView: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
    },

    columnContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        padding: 20,
        width: '100%'
    },

    categoriesTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#121212'
    },

    categoriesContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        width: '100%'
    },

    avatarContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },

    imgTextContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },

    iconBtn: {
        borderRadius: 999,
        width: 30,
        height: 30,
        borderColor: '#80808020',
        borderWidth: 1
    },

    avatar: {
        width: 40,
        height: 40
    },

    avatarText: {
        fontSize: 16,
    },

    bold: {
        fontWeight: '600'
    },

    menuIcon: {
        width: 30,
        height: 30
    }

})