import React, { useCallback, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Image,
    ScrollView,
} from 'react-native';

interface FormValues {
    name: string;
    description: string;
    price: number;
    state: string;
    payDate?: Date;
    renterName?: string;
    phoneNumber?: string;
}

const { height } = Dimensions.get('window');
const imageUri =
    'https://media.istockphoto.com/id/1185197503/es/foto/dise%C3%B1o-interior-de-apartamento-escandinavo-moderno-sala-de-estar-3d-renderizado.jpg?s=612x612&w=0&k=20&c=YLne9CKUJNFxEEWMcl3UEMfgTXC93Qhysg0xJVnTm7A=';

const CreateNewItem: React.FC = () => {
    const [formValues, setFormValues] = useState<FormValues>({
        name: '',
        description: '',
        price: 0,
        state: '',
        payDate: new Date(),
        renterName: '',
        phoneNumber: '',
    });

    const handleInputChange = (
        name: keyof FormValues,
        value: string | number,
    ) => {
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = () => {
        console.log(formValues);
    };

    const getDateFormatted = useCallback((date: Date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1;

        return `${day} / ${month}`;
    }, []);

    return (
        <ScrollView style={styles.root}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: imageUri }} style={styles.image} />
            </View>
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Nombre</Text>
                    <TextInput
                        value={formValues.name}
                        onChangeText={value => handleInputChange('name', value)}
                        style={styles.input}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Estado</Text>
                    <TextInput
                        value={formValues.state}
                        onChangeText={value =>
                            handleInputChange('state', value)
                        }
                        style={styles.input}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Valor arriendo</Text>
                    <TextInput
                        value={`$ ${formValues.price.toString()}`}
                        onChangeText={value =>
                            handleInputChange('price', Number(value))
                        }
                        style={styles.input}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Fecha de pago</Text>
                    <TextInput
                        value={getDateFormatted(
                            formValues?.payDate ?? new Date(),
                        )}
                        onChangeText={value =>
                            handleInputChange('payDate', value)
                        }
                        style={styles.input}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Descripcion</Text>
                    <TextInput
                        value={formValues.description}
                        onChangeText={value =>
                            handleInputChange('description', value)
                        }
                        style={[styles.input, { minHeight: 100 }]}
                        multiline
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Arrendatario</Text>
                    <TextInput
                        value={formValues.renterName}
                        onChangeText={value =>
                            handleInputChange('renterName', Number(value))
                        }
                        style={styles.input}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Telefono</Text>
                    <TextInput
                        value={formValues.phoneNumber}
                        onChangeText={value =>
                            handleInputChange('phoneNumber', Number(value))
                        }
                        style={styles.input}
                    />
                </View>

                <TouchableOpacity
                    onPress={handleSubmit}
                    style={styles.submitButton}>
                    <Text style={styles.textButton}>Submit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#fff',
    },
    formContainer: {
        padding: 25,
        position: 'relative',
        flex: 1,
        paddingBottom: 100,
    },
    imageContainer: {
        backgroundColor: '#E8E5E8',
        height: height * 0.3,
        width: '100%',
    },
    image: {
        height: '100%',
        width: '100%',
        objectFit: 'cover',
    },
    inputLabel: {
        fontSize: 15,
        fontWeight: '500',
        color: '#6545A4',
        marginLeft: 5,
        marginBottom: 2,
    },
    input: {
        backgroundColor: 'rgba(178,162,209,0.4)',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
        fontSize: 15,
        color: '#465CA4',
    },
    inputContainer: {
        marginVertical: 8,
    },
    submitButton: {
        backgroundColor: '#6545A4',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        position: 'absolute',
        bottom: 35,
        width: '100%',
        alignSelf: 'center',
    },
    textButton: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },
});

export default CreateNewItem;
