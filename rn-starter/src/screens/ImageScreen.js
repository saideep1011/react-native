import React from 'react';
import { View, Text } from 'react-native';
import ImageDetail from "../components/ImageDetail";

export default function ImageScreen() {
    return (
        <View>
            <ImageDetail title="messi"/>
            <ImageDetail title="neymar"/>
            <ImageDetail title="suarez"/>
        </View>
    )
}
