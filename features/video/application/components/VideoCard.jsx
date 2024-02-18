import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
//https://drive.google.com/drive/folders/1S2VW0uyn8LW24OsFEqGOEM_C-0_Cft9Z
export default function VideoCard() {
    
  return (
    <View>
        <View style={styles.rectangle}>
           <Text style={styles.title}>Video en tiempo real</Text>
        </View>
      <View style={styles.container}>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 2,
        width:'%98',
        height:300,
        borderColor: 'black',
        padding: 10,
        marginBottom: 8,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
    },
    title:{
        color:'blue',
        fontSize:18
    },
    rectangle:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        padding:10
    }
})