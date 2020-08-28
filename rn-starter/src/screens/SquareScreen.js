import React from 'react'
import { View, Text } from 'react-native';
import ColourCounter from "../components/ColourCounter";


export default function SquareScreen() {
    return (
        <View>
            
            <ColourCounter colour="Red"/>
            <ColourCounter colour="Blue"/>
            <ColourCounter colour="Green"/>
        </View>
    )
}
