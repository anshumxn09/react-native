import React, {useState} from 'react'
import {Text, Button, View, StyleSheet} from 'react-native'

const Hooks = () => {
    const [value, setValue] = useState(0)
  return (
    <>
    <View style={styles.mycontainer}>
        <Text>{value}</Text>
        <Button title='+10' onPress={() => setValue(value+10)} style={styles.btn}/>
        <Button title='Reset' onPress={() => setValue(0)} style={styles.btn}/>
        <Button title='-10' onPress={() => {
            if(value === 0){
                return
            }
            setValue(value - 10)
        }} style={styles.btn}/>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    mycontainer : {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'column',
        borderWidth : 1,
        borderColor : 'red',
        padding : 10
    },
    btn : {
        width : '100%',
        height : 30,
        margin: 10
    }
})
export default Hooks