import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NotificationsScreen from './features/notifications/application/screens/NotificationsScreen';
import HomeScreen from './HomeScreen';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
         />
          <Stack.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{title: 'Notifications'}}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
