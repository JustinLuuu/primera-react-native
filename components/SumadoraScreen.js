import React, { useState } from 'react'
import styleGlobal from '../styles/global';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

export const SumadoraScreen = () => {

    const [numberValues, setnumberValuesForm] = useState({ numberOne: 0, numberTwo: 0 });

    const handlePlus = () => {
        const { numberOne, numberTwo } = numberValues;
        const suma = parseInt(numberOne) + parseInt(numberTwo);
        isNaN(suma) ? alert('Solo se permite sumar numeros !') : alert(`El resultado de la suma es: ${suma}`);
    }

    return (
        <>
            <Text style={styleGlobal.header} >Sumadora ++</Text>
            <Text style={styleGlobal.subHeader}>
                Suma dos numeros
            </Text>

            <TextInput
                keyboardType='numeric'
                maxLength={1}
                placeholder='Digite el primer numero'
                placeholderTextColor={'black'}
                onChangeText={(text) => setnumberValuesForm({ ...numberValues, numberOne: text })}
                style={styleGlobal.input}
            />

            <TextInput
                keyboardType='numeric'
                placeholder='Digite el segundo numero'
                placeholderTextColor={'black'}
                maxLength={1}
                onChangeText={(text) => setnumberValuesForm({ ...numberValues, numberTwo: text })}
                style={styleGlobal.input}
            />

            <TouchableOpacity
                style={styleGlobal.submitButton}
                onPress={() => { handlePlus() }} >
                <Text style={styleGlobal.submitButtonText}> Sumar !</Text>
            </TouchableOpacity>
        </>
    )
}
