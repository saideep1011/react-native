import React ,{useState}from 'react'
import { View, Text ,Button} from 'react-native'

export default function CounterScreen() {
    const[counter,setcounter]= useState(0);
    return (
        <View>
            < Button title='increase' onPress={() =>{
                setcounter(counter+1);
            }}/>
                        < Button title='decrease' onPress={() =>{
                setcounter(counter-1);
            }}/>
            <Text>current count {counter}</Text>
        </View>
    )
}
