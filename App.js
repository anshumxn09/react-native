// import libraries to create components
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Custom from './Screen/Custom';
import Flatllist from './Screen/Flatllist';
import Welcome from './Screen/Welcome';
// create a component that return some jsx/simple function and export the file, so that we can use it elsewere in our app
export default function App() {
  return (
    <>
    <View style={styles.container}>
      <Text>Love you GOD❤</Text>
    </View>
    <Custom/>
    <Welcome/>
    <Flatllist/>
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
