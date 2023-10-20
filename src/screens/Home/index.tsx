/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import HomeCard from '../../components/HomeCard';

const imageUri =
    'https://media.istockphoto.com/id/1185197503/es/foto/dise%C3%B1o-interior-de-apartamento-escandinavo-moderno-sala-de-estar-3d-renderizado.jpg?s=612x612&w=0&k=20&c=YLne9CKUJNFxEEWMcl3UEMfgTXC93Qhysg0xJVnTm7A=';

const data = [
    {
        id: 1,
        name: 'Apartamento 1',
        image: imageUri,
    },
    {
        id: 2,
        name: 'Apartamento 1',
        image: imageUri,
    },
    {
        id: 3,
        name: 'Apartamento 1',
        image: imageUri,
    },
    {
        id: 4,
        name: 'Apartamento 1',
        image: imageUri,
    },
    {
        id: 5,
        name: 'Apartamento 1',
        image: imageUri,
    },
    {
        id: 6,
        name: 'Apartamento 1',
        image: imageUri,
    },
    {
        id: 7,
        name: 'Apartamento 1',
        image: imageUri,
    },
    {
        id: 8,
        name: 'Apartamento 1',
        image: imageUri,
    },
    {
        id: 9,
        name: 'Apartamento 1',
        image: imageUri,
    },
    {
        id: 10,
        name: 'Apartamento 1',
        image: imageUri,
    },
];

const Home: React.FC = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item, index }) => (
                    <View style={{ marginRight: index % 2 !== 0 ? 0 : 20 }}>
                        <HomeCard
                            imageSource={item.image}
                            caption={item.name}
                        />
                    </View>
                )}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                contentContainerStyle={styles.list}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    list: {
        paddingVertical: 5,
        alignSelf: 'center',
        marginVertical: 20,
    },
    separator: {
        height: 20,
    },
});

export default Home;
