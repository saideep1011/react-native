import React from 'react'
import { View, Text,StyleSheet, TextInput } from 'react-native'

export default function TextScreen() {
    return (
        <View>
            <TextInput style={styles.input}
            autoCapitalize="none"
            />
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
