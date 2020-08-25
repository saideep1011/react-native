import   React, {useState} from 'react'
import { View, Text,Button } from 'react-native'

export default function ColourScreen() {
    return (
        <View>
            <Button title= "add a color"/>
            <View style={{height:100, width:100, backgroundColor: randomRgb()}}></View>
        </View>
    )
}


const randomRgb =() =>{
    const red= Math.floor(Math.random()*256);
    const green= Math.floor(Math.random()*256);
    const blue= Math.floor(Math.random()*256);
    return `rgb(${red},${blue},${green})`;
    
};



