import Input from '@/components/Input';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import PrimaryButton from '@/components/PrimaryButton';
import AddTodoIcon from '@/components/svgs/AddTodoIcon';
import OptionsIcon from '@/components/svgs/OptionsIcon';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

let categoriesList = [
    {
        name: 'All',
        value: 'All'
    },
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

    const [activeCategory, setActiveCategory] = useState('All')

    let allTodos = [
        {
            name: 'Dolor aute in sit veniam laboris anim et ea voluptate.',
            status: 'To Do',
        },
        {
            name: 'Pariatur ea voluptate eiusmod in voluptate incididunt sint est ipsum.',
            status: 'Completed'
        },
        {
            name: 'Occaecat dolor dolor dolor pariatur ad.',
            status: 'In Progress'
        },
        {
            name: 'Dolore excepteur aute est aliquip do sint nulla.',
            status: 'To Do',
        },
        {
            name: 'Elit consequat do officia esse dolore occaecat eiusmod qui magna veniam.',
            status: 'Completed'
        },
        {
            name: 'Consequat non cupidatat laborum cillum nostrud aliqua aute.',
            status: 'In Progress'
        },
        {
            name: 'Amet anim aliqua qui aliquip consectetur excepteur veniam deserunt ipsum officia officia in reprehenderit.',
            status: 'To Do',
        },
        {
            name: 'Reprehenderit laborum officia ea est quis sunt nostrud labore duis id.',
            status: 'Completed'
        },
        {
            name: 'Proident cillum ut laboris laboris ipsum cillum.',
            status: 'In Progress'
        },
        {
            name: 'Et ex consequat Lorem veniam esse ad fugiat.',
            status: 'To Do',
        },
        {
            name: 'Labore ad elit magna anim nisi laborum.',
            status: 'Completed'
        },
        {
            name: 'Ad nisi occaecat dolore proident.',
            status: 'In Progress'
        },
        {
            name: 'Ipsum laboris consectetur irure aliquip magna.',
            status: 'To Do',
        },
        {
            name: 'Voluptate est id ex duis eu ad aute ut excepteur ea veniam sint eu.',
            status: 'Completed'
        },
        {
            name: 'Deserunt adipisicing esse irure Lorem occaecat nulla veniam pariatur nulla excepteur.',
            status: 'In Progress'
        },
        {
            name: 'Aliquip mollit culpa amet nostrud fugiat cupidatat non reprehenderit est.',
            status: 'To Do',
        },
        {
            name: 'Anim tempor adipisicing aute laboris eiusmod adipisicing do adipisicing aliqua et mollit.',
            status: 'Completed'
        },
        {
            name: 'Ipsum in velit voluptate velit duis occaecat aliqua ex proident.',
            status: 'In Progress'
        },
    ]

    // const [todos, setTodos] = useState(allTodos) as any

    const handleChange = (name: any, value: any) => {
        setParams({
            ...params,
            [name]: value
        })
    }

    const [filteredTodos, setFilteredTodos] = useState([]) as any

    useEffect(() => {
        if (activeCategory === 'All') {
            setFilteredTodos(allTodos)
        }
        else {
            const filtered = allTodos.filter((todo: any) => todo.status === activeCategory);
            setFilteredTodos(filtered);
        }
    }, [activeCategory]);

    const router = useRouter()

    const handleLogout = () => {
        router.replace('/')
    }

    return (
        <SafeAreaView style={styles.myView}>

            <ScrollView style={styles.columnContainer}>
                <View style={styles.avatarContainer}>

                    <View style={styles.imgTextContainer}>
                        <Image
                            source={require('@/assets/images/avatar.png')}
                            style={styles.avatar}
                        />
                        <Text style={styles.avatarText}>Hello, <Text style={styles.bold}>Hrithik</Text></Text>
                    </View>

                    <Pressable onPress={handleLogout}>
                        <Text style={{ fontSize: 12, fontWeight: '500', color: '#0560FD' }}>Logout</Text>
                    </Pressable>
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
                                height={42}
                                borderRadius={999}
                                borderColor="#80808040"
                                width="fit"
                                onPress={() => setActiveCategory(item.name)}
                                variant={activeCategory === item.name ? '' : 'outlined'}
                                label={item.name}
                            />
                        )))
                    }
                </View>

                <View style={styles.cardContainer}>

                    {
                        React.Children.toArray(filteredTodos.map((item: any) => (
                            <View style={styles.card}>
                                <View style={styles.cardTextContainer}>

                                    <Text style={styles.cardText}>{item.name}</Text>

                                    <Pressable>
                                        <OptionsIcon />
                                    </Pressable>
                                </View>

                                <View style={{ width: 'auto', marginLeft: 'auto' }}>
                                    <Pressable style={{ borderRadius: 999, paddingVertical: 10, paddingHorizontal: 16, backgroundColor: item.status === 'Completed' ? '#16a34a' : item.status === 'In Progress' ? '#eab308' : '#0560FD' }}>
                                        <Text style={{ fontSize: 12, color: '#ffffff', textAlign: 'center' }}>
                                            {item.status}
                                        </Text>
                                    </Pressable>
                                </View>

                            </View>
                        )))
                    }

                </View>


            </ScrollView>
            <View style={styles.tabs}>

                <TouchableOpacity style={styles.todoBtn}>
                    <AddTodoIcon />
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

export default App

const styles = StyleSheet.create({
    cardTextContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardText: {
        width: '90%',
        fontSize: 14
    },
    todoBtn: {
        width: 80,
        height: 80,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    tabs: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        // borderColor: '#d32f2f',
        // borderWidth: 1,
        height: 90,
        width: '100%',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    cardContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        width: '100%',
        marginBottom: 80
    },

    card: {
        display: 'flex',
        borderRadius: 8,
        backgroundColor: '#80808020',
        minHeight: 120,
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 16,
    },

    myView: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        position: 'relative'
    },

    columnContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        padding: 20,
        width: '100%',
    },

    categoriesTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#121212',
        marginVertical: 10
    },

    categoriesContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        width: '100%',
        marginBottom: 20
    },

    avatarContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 10
    },

    imgTextContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
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
    },
})