import React from 'react'
import { FlatList, Text, StyleSheet } from 'react-native'

const Flatllist = () => {
    const itemsList = [
        {name : "Anshuman"}, {name :"Mexi"} , {name:"thinker"}, {name:"programmer"}
    ]
  return (
    <FlatList keyExtractor={(data) => {
        return data.name
    }} data={itemsList} renderItem={(elem) => {
        return <Text style={styles.text}>{elem.item.name}</Text>
    }}/>
  )
}

const styles = StyleSheet.create({
    text : {
        color : 'red',
        backgroundColor : 'lightblue',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        textAlign : 'center',
        padding : 50,
        textTransform : "uppercase"
    }
})
export default Flatllist;