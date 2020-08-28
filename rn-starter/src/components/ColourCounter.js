import React from 'react'
import { View, Text , Button} from 'react-native'

export default function ColourCounter({colour , onIncrease, onDecrease}) {
    return (
        <View>
            <Text>{colour}</Text>
            <Button    
            onPress ={() =>onIncrease()}
            title ={`increase ${colour}`}/>
            <Button 
            onPress ={() =>onDecrease()}
            title ={`decrease ${colour}`}/>
        </View>
    )
}
