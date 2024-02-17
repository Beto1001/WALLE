import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Session } from '@supabase/supabase-js'
export default function ControlScreen( { session }: { session: Session }) {
    
    return (
        <View>
            <Text style={styles.subTitle}>
                Control Screen
            </Text>
                <Image 
                    source={require('../../../../assets/control.png')}
                    style={{width:300, height:300, margin: 30}}
                />

            <View style={styles.verticallySpaced}>
      </View>
        </View>
    );
}

const styles = StyleSheet.create({
    subTitle: {
        backgroundColor: '#A18262',
        borderRadius: 9,
        marginTop: 20,
        color: '#6D4C38',
        fontSize: 40,
        textAlign: 'center',
        maxWidth: 300,
        marginLeft: '9%',
        fontWeight: 'bold'
      },
    container: {
      marginTop: 40,
      padding: 12,
    },
    verticallySpaced: {
      paddingTop: 4,
      paddingBottom: 4,
      alignSelf: 'stretch',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#009C8C',
      width: 210,
      height: 60,
      borderRadius: 10,
      marginTop: 10,
      marginLeft: 80
      },
      textButton: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
      },
  })