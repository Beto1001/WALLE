import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Auth from '../components/Auth';
import HomeScreen from '../../../../src/navigations/HomeScreen';
import { supabase } from '../../../../lib/supabase';
import { Session } from '@supabase/supabase-js';
const Stack = createStackNavigator();

export default function AuthScreen({ navigation }) {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <Stack.Navigator>
      
      {session && session.user ? (
        
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen 
          name="Auth" 
          component={Auth} 
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
}
