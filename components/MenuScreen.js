import React from 'react'
import styleGlobal from '../styles/global';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const MenuScreen = ({ setScreen }) => {
    return (
        <>
            <Text style={styleGlobal.header} >Menu</Text>

            <TouchableOpacity style={styles.button} onPress={() => { setScreen("Inicial") }}>
                <Text style={styles.textButton}>Pagina principal</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button} onPress={() => { setScreen("Sumadora") }} >
                <Text style={styles.textButton}>Sumadora numeros</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => { setScreen("Traductor") }}>
                <Text style={styles.textButton}>Traductor numeros</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={styles.button} onPress={() => { setScreen("Tabla") }}>
                <Text style={styles.textButton}>Tabla multiplicar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => { setScreen("Video") }}>
                <Text style={styles.textButton}>Video</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({        
    textButton: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },  
    button: {        
        backgroundColor: 'orange',
        height:30, 
        margin: 30
    }
});



export default MenuScreen
