import { View} from 'react-native'
import React from 'react'
import { Button } from 'react-native'

export default function HomeScreen({navigation}) {
  return (
   <View>
    <Button
    title='Notifications'
    onPress={()=>navigation.navigate('Notifications')}
    />
   </View>
  )
}
