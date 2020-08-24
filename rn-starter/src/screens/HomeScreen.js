import React from 'react';
import { Text, StyleSheet ,View,Button} from 'react-native';

const HomeScreen = () => {
  return <View>
    <Text style={styles.text}>Hi ssss!</Text>
    <Button title=
    "Go to Components Screen"/>
    </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;