import React from 'react'
import { View, Text } from 'react-native';
import ColourCounter from "../components/ColourCounter";
import { useState } from 'react';


export default function SquareScreen() {
    const [Red, setRed]=useState(0);
    const [Blue, setBlue]=useState(0);
    const [Green, setGreen]=useState(0);
    console.log(Red);
    return (
        <View>
            
            <ColourCounter colour="Red" 
            onIncrease ={() => setRed(Red+1)}
            onDecrease = {() => setRed(Red-1)}/>
            <ColourCounter colour="Blue"/>
            <ColourCounter colour="Green"/>
        </View>
    )
}
