import React from "react";
import {Text, StyleSheet} from 'react-native'

const Custom = () => {
    return (
        <Text style={styles.name}>Anshuman Sharma</Text>
    )
}

const styles = StyleSheet.create({
    name:{
        color: 'green',
        backgroundColor : 'red',
        padding : 10
    }
})

export default Custom