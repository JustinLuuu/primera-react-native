import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MenuScreen from './components/MenuScreen';
import returnScreen from './helpers/returnScreen'


export default function App() {

  const [screen, setScreen] = useState("Menu");

  return (
    <View>

      {screen === 'Menu' ?
        (
          <>
            <MenuScreen setScreen={setScreen} />
          </>
        )
        :
        (
          <>
            {returnScreen(screen)}

            <TouchableOpacity style={styles.button} onPress={() => { setScreen("Menu") }}>
              <Text style={styles.textButton}>Volver al menu</Text>
            </TouchableOpacity>
          </>
        )
      }
      
    </View>
  )
}

const styles = StyleSheet.create({
  textButton: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: 'red'
  },
  button: {
    backgroundColor: 'orange',
    height: 32,
    margin: 30
  }
});
