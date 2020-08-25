import React from 'react';
import { Text, StyleSheet ,View,Button,TouchableOpacity} from 'react-native';

const HomeScreen = (props) => {
  return <View>
    <Text style={styles.text}>Hi ssss!</Text>
    <Button 
    title=
    "Go to Components Screen"/>
    <TouchableOpacity onPress={()=>props.navigation.navigate('Components') }>
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