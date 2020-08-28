import React from 'react'
import { View, Text } from 'react-native';
import ColourCounter from "../components/ColourCounter";
import { useState } from 'react';


export default function SquareScreen() {
    const [Red, setRed]=useState(0);
    const [Blue, setBlue]=useState(0);
    const [Green, setGreen]=useState(0);
    console.log(Blue);
    
    return (
        <View>
            
            <ColourCounter colour="Red" 
            onIncrease ={() => setRed(Red+10)}
            onDecrease = {() => setRed(Red-10)}/>
            <ColourCounter colour="Blue"
            onIncrease ={() => setBlue(Blue+10)}
            onDecrease = {() => setBlue(Blue-10)}
            />
            <ColourCounter colour="Green"
            onIncrease ={() => setGreen(Green+10)}
            onDecrease = {() => setGreen(Green-10)}/>
            <View style={{ height:100, width:100, backgroundColor:`rgb(${Red}, ${Green}, ${Blue})`}}/>
        </View>
    )
}
