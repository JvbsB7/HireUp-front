import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import RegisterEmployerScreen from './src/screens/auth/RegisterEmployerScreen';
import RegisterEnterpriseScreen from './src/screens/auth/RegisterEnterpriseScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <RegisterEmployerScreen />
      <RegisterEnterpriseScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
