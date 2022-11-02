import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

const MyImages = () => {
  return (
    <View style={styles.listStyle}>
        {/* <Text>Anshuman Sharma</Text> */}
        <Image source={require('../assets/indiagate.jpg')}></Image>
    </View>
  )
}

const styles = StyleSheet.create({
    listStyle : {
        display :'flex',
        justifyContent : 'center',
        alignItems : "center",
        height : 500,
        backgroundColor : "red"
    }
})
export default MyImages