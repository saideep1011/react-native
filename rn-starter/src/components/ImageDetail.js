import React from 'react';
import { View, Text ,Image} from 'react-native';

export default function ImageDetail(props) {
    return (
        <View>
            <Image source={require('../../assets/beach.jpg')}/>
            <Text>{props.title}</Text>
        </View>
    )
}
