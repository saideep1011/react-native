import React from 'react';
import { Text, StyleSheet ,View,Button,TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  return <View>
    <Text style={styles.text}>Hi ssss!</Text>
    <Button onPress={()=>navigation.navigate('Components') }
    title=
    "Go to Components Screen"/>
    <Button onPress={()=>navigation.navigate('Image') }
    title=
    "Go to Image Screen"/>
    <Button onPress={()=>navigation.navigate('Counter') }
    title=
    "Go to Counter screen"/>
    <Button onPress={()=>navigation.navigate('Colour') }
    title=
    "Go to Colour screen"/>
    <Button onPress={()=>navigation.navigate('Square') }
    title=
    "Go to Square screen"/>

    <Button onPress={()=>navigation.navigate('List') }
     title="go to list demo"
    />
    <Button onPress={()=>navigation.navigate('Text') }
     title="go to Text Screen"
    />
    </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;