import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'

export default function Farewell() {
  const imageUrl = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9A115262450554620990F45242A2287B24E04EEF508B45BFF5C0318234048DA4/scale?width=440&aspectRatio=1.78&format=webp";
  return (
    <View style={styles.container}>
      <Text style={styles.fare}>Cerrando sesión</Text>
      <Image
      style = {styles.image}
      source={{uri:imageUrl}}
      />
      <Text style={styles.fare}>¡Vuelve pronto!</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:60,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
  },
  fare:{
    color:'black',
    fontSize:20,
    fontWeight:'600',
    marginTop:10,
  },
  image:{
    width:300,
    height:300,
    marginTop:10,
    borderRadius:40,
  }

});