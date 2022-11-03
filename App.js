// import libraries to create components
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Custom from './Screen/Custom';
import Flatllist from './Screen/Flatllist';
import MyImages from './Screen/MyImages';
import Welcome from './Screen/Welcome';
import Buttons from './Screen/Buttons';
import TO from './Screen/TouchableOpacity';
import Card from './Screen/Card';
import Hooks from './Screen/Hooks';

// create a component that return some jsx/simple function and export the file, so that we can use it elsewere in our app
export default function App() {
  {/* <Text>Love you GOD❤</Text> */}
  return (
    <>
    <View style={styles.container}>
      <Hooks/>
    </View>
    </>
  );
}

// create a stylesheet to style the component.
const styles = StyleSheet.create({
  container: {
    display : 'flex',
    justifyContent : "center",
    alignItems : 'center',
    backgroundColor: 'yellow',
    marginTop : 50,
    padding : 50,
  },
});
