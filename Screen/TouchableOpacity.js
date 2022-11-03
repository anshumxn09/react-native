import React from "react";
import { Text, TouchableOpacity } from 'react-native'

const TO = () => {
    return (
        <TouchableOpacity
        onPress={() => {
            console.log('oops dont click on me')
        }} 
        >
        <Text>Anshuman</Text>
        </TouchableOpacity>
    )
}

// props for buttons --> disabled.
// for simple work we use buttons and for complex work we use touchableopacity.

export default TO;