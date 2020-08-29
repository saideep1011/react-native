import React from 'react'
import { View, Text,StyleSheet, TextInput } from 'react-native'

export default function TextScreen() {
    return (
        <View>
            <TextInput style={styles.input}/>
        </View>
    )
}
const styles = StyleSheet.create({
input:{
    margin:10,
    borderColor:'black',
    borderWidth:1
}
});
