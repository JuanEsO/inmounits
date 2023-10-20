import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions, Touchable, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

interface HomeCardProps {
    imageSource: string;
    caption: string;
}

const HomeCard: React.FC<HomeCardProps> = ({ imageSource, caption }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('NewItem')}>
            <Image source={{ uri: imageSource }} style={styles.image} />
            <View style={styles.footer}>
                <Text style={styles.caption}>{caption}</Text>
                <View style={styles.circleIndicator} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: width * 0.43,
        height: 240,
        padding: 8,
    },
    image: {
        width: '100%',
        height: '85%',
        borderRadius: 10,
    },
    footer: {
        width: '100%',
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 2,
    },
    caption: {
        // padding: 16,
        fontSize: 14,
        fontFamily: 'Roboto',
        fontWeight: '400',
        // textAlign: 'center',
    },
    circleIndicator: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#BF62EA',
        alignSelf: 'center',
    },
});

export default HomeCard;
