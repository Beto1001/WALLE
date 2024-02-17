import { StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthScreen from './features/auth/application/screens/AuthScreen'
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <AuthScreen />
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
