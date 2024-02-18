import React from 'react'
import NotificationsScreen from '../../features/notifications/application/screens/NotificationsScreen'
import GraficasSensoresScreen from '../../features/sensores/aplicacion/screens/GraficasSensoresScreen'
import ControlScreen from '../../features/control/aplication/screens/ControlScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons,FontAwesome,FontAwesome5 } from '@expo/vector-icons';
import Logout from '../../features/auth/application/components/LogOut';
import Farewell from '../../features/auth/application/components/Farewell';
import VideoScreen from '../../features/video/application/screens/VideoScreen';
export default function HomeScreen() {
  const Tab = createBottomTabNavigator();
  return (
   
      <Tab.Navigator>
        <Tab.Screen
        name="Graficas"
        component={GraficasSensoresScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bar-chart-o" size={24} color="black" />
          ),
        }}
        
        />
        <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" size={24} color="black" />
          ),
        }}
        />
        <Tab.Screen
        name="Control"
        component={ControlScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="game-controller" size={24} color="black" />
          ),
        }}
        />
         <Tab.Screen
        name="Video"
        component={VideoScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="video" size={24} color="black" />
          ),
        }}
        />
         <Tab.Screen
        name="Salir"
        component={Farewell}
        options={{
          tabBarIcon: ({ color, size }) => <Logout/>,
          headerShown: false
        }}
        />
     </Tab.Navigator>
  )
}

