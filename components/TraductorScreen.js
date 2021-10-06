import React, { useState } from 'react'
import styleGlobal from '../styles/global';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import ConvertNumbers from '../helpers/traductorNumeros';

export const TraductorScreen = () => {

    const [number, setNumber] = useState(0);

    const handleTranslate = () => {
        if (isNaN(parseInt(number))) {
            alert('Eso no es un numero');
            return;
        }

        const numberTranslated = ConvertNumbers(number);
        numberTranslated.error != undefined ?
            alert(numberTranslated.message) : alert(`La traduccion del numero digitado es: ${numberTranslated}`);
    }

    return (
        <>
            <Text style={styleGlobal.header}>Traductor</Text>
            <Text style={styleGlobal.subHeader}>
                Digita un numero del 1 al 1000 para ser traducido
            </Text>

            <View>

                <TextInput
                    keyboardType='numeric'
                    placeholder='Digite el numero a traducir'
                    placeholderTextColor={'black'}
                    onChangeText={(text) => setNumber(text)}
                    style={styleGlobal.input}
                /> 

                <TouchableOpacity
                    style={styleGlobal.submitButton}
                    onPress={() => { handleTranslate() }}>
                    <Text style={styleGlobal.submitButtonText}> Traducir ! </Text>
                </TouchableOpacity>
            </View>
        </ >
    )
}
