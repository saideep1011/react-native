import React from 'react';
import { Text, StyleSheet ,View,Button,TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  return <View>
    <Text style={styles.text}>Hi ssss!</Text>
    <Button onPress={()=>navigation.navigate('Components') }
    title=
    "Go to Components Screen"/>
    <TouchableOpacity onPress={()=>navigation.navigate('List') }>
      <Text>go to list demo</Text>
    </TouchableOpacity>

    </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;