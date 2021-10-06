import React from 'react'
import InicialScreen from '../components/InicialScreen';
import MenuScreen from '../components/MenuScreen';
import { SumadoraScreen } from '../components/SumadoraScreen';
import { TablaMultiScreen } from '../components/TablaMultiScreen';
import { TraductorScreen } from '../components/TraductorScreen';
import { VideoScreen } from '../components/VideoScreen';


const returnScreen = (screen)=>{
    switch (screen) {
        case "Inicial":
          return <InicialScreen />

        case "Sumadora":
          return <SumadoraScreen />
      
        case "Traductor":
          return <TraductorScreen />
      
        case "Tabla":
          return <TablaMultiScreen />
      
        case "Video":
          return <VideoScreen />
      
        default:
          return <MenuScreen />
      }          
}

export default returnScreen;