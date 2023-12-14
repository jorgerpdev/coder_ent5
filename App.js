import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import CarsScreen from './src/screens/CarsScreen';
import { useState } from 'react';
import CarDetailScreen from './src/screens/CarDetailScreen';

export default function App() {
  const [carSelected, setCarSelected] = useState(0)

  const [fontsLoaded] = useFonts({
    'FiraCode-Regular': require('./assets/fonts/FiraCode-Regular.ttf'),
    'FiraCode-Bold': require('./assets/fonts/FiraCode-Bold.ttf'),
  });


  const onSelectCarEvent = (carId) => (
    setCarSelected(carId)
  )

  const setCarSelectedTo0 = () => (
    setCarSelected(0)
  )

  if(!fontsLoaded) return <ActivityIndicator/>

  return (
    <>
    {carSelected != 0 ? 
      <CarDetailScreen carId={carSelected} setCarSelectedTo0={setCarSelectedTo0}/>
      :
      <CarsScreen onSelectCarEvent={onSelectCarEvent} setCarSelectedTo0={setCarSelectedTo0}/>
    }

    </>
    
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
