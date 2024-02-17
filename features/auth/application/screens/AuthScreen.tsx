import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'
import { supabase } from '../../../../lib/supabase'
import Auth from '../components/Auth'
// import Account from '../components/Account'
import { View, Text, StyleSheet } from 'react-native'
import { Session } from '@supabase/supabase-js'
import ControlScreen from '../../../control/aplication/screens/ControlScreen'

export default function AuthScreen() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <View>
      <View>
        <Text style={styles.title}> Wall-e</Text>
      </View>

          //Aquí lo importante es la propiedad ControlScreen que es hacia donde te dirige al momento de que te autenticas si quieres quitar el botón de cerrar sesión, no le envíes la variable session y en controlScreen.tsx

      {session && session.user ? <ControlScreen key={session.user.id} session={session} /> : <Auth />}
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: '#F8F0E3',
    borderRadius: 9,
    marginTop: 100,
    color: '#422719',
    fontSize: 40,
    textAlign: 'center',
    maxWidth: 200,
    marginLeft: '23%',
    fontWeight: 'bold'
  },
})