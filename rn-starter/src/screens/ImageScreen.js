import React from 'react';
import { View, Text } from 'react-native';
import ImageDetail from "../components/ImageDetail";

export default function ImageScreen() {
    return (
        <View>
            <ImageDetail title="messi" imageSource={require('../../assets/beach.jpg')}/>
            <ImageDetail title="neymar" imageSource={require('../../assets/forest.jpg')}/> 
            <ImageDetail title="suarez" imageSource={require('../../assets/mountain.jpg')}/>
        </View>
    )
}
