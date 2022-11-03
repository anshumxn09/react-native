import React from "react";
import { Button, Text, Alert } from 'react-native'

const Buttons = () => {
    return (
        <Button 
            title="Join Me"
            onPress={() => {
                Alert.alert('Anshuman Sharma')
            }}
        />
    )
}

// props for buttons --> disabled.
// for simple work we use buttons and for complex work we use touchableopacity.

export default Buttons;