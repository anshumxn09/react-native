// import libraries to create components
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Custom from './Screen/Custom';
import Flatllist from './Screen/Flatllist';
import MyImages from './Screen/MyImages';
import Welcome from './Screen/Welcome';
import Buttons from './Screen/Buttons';
import TO from './Screen/TouchableOpacity';
import Card from './Screen/Card';
import Hooks from './Screen/Hooks';
import Login from './Screen/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Navigation from './Screen/Navigation';
// create a component that return some jsx/simple function and export the file, so that we can use it elsewere in our app
export default function App() {
  const Stack = createNativeStackNavigator();
  {/* <Text>Love you GOD❤</Text> */}
  return (
    <>
    <NavigationContainer>
    <Stack.Navigator initialRouteName='login page'>
    <Stack.Screen name='Login' component={Login}>
    </Stack.Screen>

    <Stack.Screen name='Home' component={Navigation}>
    </Stack.Screen>
    </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

{/* <ScrollView>
    <View style={styles.container}>
      <Login/>
    </View>
    </ScrollView> */}
// create a stylesheet to style the component.
const styles = StyleSheet.create({
  container: {
    display : 'flex',
    justifyContent : "center",
    alignItems : 'center',
    backgroundColor: 'white',
    marginTop : 50,
    padding : 10,
    paddingVertical : 40,
    color : 'white',
  }
});
