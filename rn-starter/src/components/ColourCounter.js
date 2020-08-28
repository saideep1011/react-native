import React from 'react'
import { View, Text , Button} from 'react-native'

export default function ColourCounter({colour}) {
    return (
        <View>
            <Text>{colour}</Text>
            <Button title ={`increase ${colour}`}/>
            <Button title ={`decrease ${colour}`}/>
        </View>
    )
}
