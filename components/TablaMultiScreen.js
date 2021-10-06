import React, { useState } from 'react'
import styleGlobal from '../styles/global';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export const TablaMultiScreen = () => {

    const [number, setNumber] = useState('');
    const [arrayRes, setArrayRes] = useState([]);

    const handleGenerateMulti = () => {
        if (isNaN(parseInt(number))) {
            alert('Eso no es un numero');
            return;
        }

        const newArray = [];
        for (let i = 0; i <= 12; i++) {
            const line = `${number} x ${i + 1} = ${(number * (i + 1))}`;
            newArray.push(line);
        }
        setArrayRes(newArray);
    }

    const handleResetValues = () => {
        setNumber('');
        setArrayRes([]);
    }

    return (
        <>
            <Text style={styleGlobal.header}>Tabla</Text>
 
            <View>
                <Text style={styleGlobal.subHeader}>
                    {arrayRes.length === 0 ?
                        ('Digita un numero para generar su tabla de multiplicacion')
                        :
                        (`Tabla de multiplicar del ${number} !`)}
                </Text>

                {
                    arrayRes.length === 0 ?
                        (
                            <View>
                                <TextInput
                                    keyboardType='numeric'
                                    placeholder='Digite un numero'
                                    placeholderTextColor={'black'}
                                    onChangeText={(text) => setNumber(text)}
                                    style={styleGlobal.input}
                                />

                                <TouchableOpacity
                                    style={styleGlobal.submitButton}
                                    onPress={() => { handleGenerateMulti() }}>
                                    <Text style={styleGlobal.submitButtonText}> Generar tabla ! </Text>
                                </TouchableOpacity>
                            </View>
                        )
                        :
                        (
                            <View>
                                {arrayRes.map(res => (<Text key={res} style={styles.result}>{res}</Text>))}

                                <TouchableOpacity
                                    style={styleGlobal.submitButton}
                                    onPress={() => { handleResetValues() }}>
                                    <Text style={styleGlobal.submitButtonText}> Volver a generar tabla </Text>
                                </TouchableOpacity>
                            </View>
                        )
                }

            </View>

        </>
    )
}


const styles = StyleSheet.create({
    result: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    }
});
