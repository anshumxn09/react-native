// import libraries to create components
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Custom from './Screen/Custom';
import Flatllist from './Screen/Flatllist';
import MyImages from './Screen/MyImages';
import Welcome from './Screen/Welcome';
import Buttons from './Screen/Buttons';
import TO from './Screen/TouchableOpacity';

// create a component that return some jsx/simple function and export the file, so that we can use it elsewere in our app
export default function App() {
  return (
    <>
    <View style={styles.container}>
      <Text>Love you GOD❤</Text>
    </View>
    <Buttons/>
    <TO/>
    </>
  );
}

// create a stylesheet to style the component.
const styles = StyleSheet.create({
  container: {
    display : 'flex',
    backgroundColor: 'yellow',
    marginTop : 50
  },
});
