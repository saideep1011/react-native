import   React, {useState} from 'react'
import { View, Text,Button , FlatList} from 'react-native'

export default function ColourScreen() {
    const [colours, setcolours]= useState([]);
    return (
        <View>
            <Button title= "add a color" onPress ={() =>{
                setcolours([...colours , randomRgb()]);

            }}/>
            <FlatList 
            keyExtractor ={ (item) => item}
            data ={colours}
            renderItem ={({item}) =>{
                return(
                    <View style={{height:100, width:100, backgroundColor: item}}></View>
                );
            }}/>
            
        </View>
    )
}


const randomRgb =() =>{
    const red= Math.floor(Math.random()*256);
    const green= Math.floor(Math.random()*256);
    const blue= Math.floor(Math.random()*256);
    return `rgb(${red},${blue},${green})`;
    
};



