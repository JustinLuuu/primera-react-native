import React from 'react'
import styleGlobal from '../styles/global';
import { StyleSheet, Text, View } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";

export const VideoScreen = () => {
    return (
        <>
            <Text style={styleGlobal.header}>Video</Text>
            <Text style={styleGlobal.subHeader}>Video sobre mi experiencia en clases</Text>

            <View>
                <YoutubePlayer height={300} play={true} videoId={"7vbbn6uUXtI"} />
            </View>
        </>
    )
}   