import React from 'react'
import NotificationsScreen from '../../features/notifications/application/screens/NotificationsScreen'
import GraficasSensoresScreen from '../../features/sensores/aplicacion/screens/GraficasSensoresScreen'
import ControlScreen from '../../features/control/aplication/screens/ControlScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons,FontAwesome } from '@expo/vector-icons';
import Logout from '../../features/auth/application/components/LogOut';
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
        name="Salir"
        component={()=>null}
        options={{
          tabBarIcon: ({ color, size }) => <Logout/>,
        }}
        />
     </Tab.Navigator>
  )
}

