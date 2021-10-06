import React from 'react'
import styleGlobal from '../styles/global';
import { StyleSheet, Text, View, Image } from 'react-native';


const InicialScreen = () => {
    return (
        <>
            <Text style={styleGlobal.header} >Pagina principal</Text>
            <Text style={styleGlobal.subHeader} >
                Mis datos personales
            </Text>

            <View>
                <Image source={require('../assets/yo.jpg')} style={styles.image} />
                <Text style={styles.info}>Justin Jr. Minaya Gil</Text>
                <Text style={styles.info}>justinjr2001@hotmail.com</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        marginRight: 60,
        marginLeft: 60,
        marginTop: 30,
        marginBottom: 14
    },
    info: {
        fontSize: 30,
        textAlign: 'center',
    }
});


export default InicialScreen
