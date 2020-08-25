import React from 'react';
import { View, Text ,Image} from 'react-native';

export default function ImageDetail(props) {
    console.log(props);
    return (
        <View>
            <Image source={props.imageSource}/>
            <Text>{props.title}</Text>
        </View>
    )
}
