import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import CreateNewItem from '../screens/CreateNewItem';
import Header from '../components/Header';
import { Image } from 'react-native';


const logo = require('../../assets/LogoLyrics.png');

const Stack = createNativeStackNavigator();

const NavigationWrapper: FC = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#BF62EA',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerTitle: () => (
                    <Image
                        source={logo}
                        style={{
                            height: 30,
                            resizeMode: 'contain',
                            width: 200,
                        }}
                    />
                ),
            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="NewItem" component={CreateNewItem} />
        </Stack.Navigator>
    );
};

export default NavigationWrapper;
