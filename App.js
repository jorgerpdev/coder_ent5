import { StyleSheet, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import TabNavigator from './src/navigation/TabNavigator';
import { Provider } from 'react-redux';
import store from './src/store'

export default function App() {
  const [fontsLoaded] = useFonts({
    'FiraCode-Regular': require('./assets/fonts/FiraCode-Regular.ttf'),
    'FiraCode-Bold': require('./assets/fonts/FiraCode-Bold.ttf'),
  });

  if(!fontsLoaded) return <ActivityIndicator/>

  return (
    <Provider store={store}>
      <TabNavigator/>
    </Provider>
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
