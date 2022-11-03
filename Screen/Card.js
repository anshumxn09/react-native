import React from 'react'
import {View, StyleSheet, Text, Image, Button, Linking} from 'react-native';

const Card = () => {
  return (
    <>
        <View style={styles.box}>
          <Image source={{uri: "https://rollingstoneindia.com/wp-content/uploads/2022/04/Raftaar-6-scaled-e1650289863809.jpg"}} style={styles.image}/>
          <Text style={styles.text}>Kalamkaar Raftaar❤</Text>
          <Button 
            title='Channel'
            onPress={() => {
                Linking.openURL('https://www.youtube.com/channel/UCMXMp3Lc6v6v8dJH5ZGwtqA')
            }}
            style={styles.text}
          ></Button>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
  box : {
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    flexDirection : 'column',
    borderColor : 'red',
    borderWidth : 1
  },
  image : {
    width : '100%',
    height : undefined,
    aspectRatio : 1,
    borderRadius :  10
  },
  text : {
    marginVertical : 10
  }
})

export default Card;