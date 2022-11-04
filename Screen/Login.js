import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";

const Login = () => {
    const [data, setData] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
  return (
    <View style={styles.view1}>
      <Text style={styles.text}>Credentials</Text>
      <Image
        source={{
          uri: "https://img.freepik.com/free-vector/data-center-abstract-concept-illustration_335657-3707.jpg?w=360",
        }}
        style={styles.image}
      ></Image>
      <Text style={styles.common}>Username:</Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        value={username}
        onChangeText={(data) => {setUsername(data)}}
      ></TextInput>
      <Text style={styles.common}>Password:</Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        value={password}
        onChangeText={(data) => {setPassword(data)}}
      ></TextInput>
      <TouchableOpacity style={styles.width} disabled={ username && password ? false : true}
      activeOpacity={username && password ? 1 : 0.7}
      onPress={() => {
        Alert.alert(`Welcome ${username}`)
      }}
      >
        <Text style={styles.btn}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  width: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  view1: {
    width: "100%",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 20,
    margin: 10,
    borderRadius: 30,
  },
  text: {
    textTransform: "uppercase",
    fontWeight: "bolder",
    fontSize: 18,
    backgroundColor: "rgb(230,230,250)",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    letterSpacing: 2,
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    borderRadius: 10,
    margin: 10,
  },
  common: {
    width: "100%",
    fontSize: 15,
    marginVertical: 5,
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 5,
    height: 30,
  },
  btn: {
    width: "70%",
    marginTop: 30,
    backgroundColor: "purple",
    textAlign: "center",
    padding: 10,
    textTransform: "uppercase",
    letterSpacing: 3,
    borderRadius: 10,
    backgroundColor: "rgb(230,230,250)",
  },
});
export default Login;

// rnfe
// to insert checkbox
// 1. expo install expo-checkbox
// 2. import Checkbox from "expo-checkbox";
// 3. value, onValueChange.
// 4. <CheckBox value={agree} onValueChange={() => setAgree(!agree)}
//     color={agree ? 'blue' : undefined} ></CheckBox>
