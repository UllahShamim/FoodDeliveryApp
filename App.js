import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
  Montserrat_500Medium,
  Montserrat_600SemiBold
} from '@expo-google-fonts/montserrat';
import Icon from 'react-native-vector-icons/Ionicons';

import Colors from './assets/colors/colors';


export default function App() {
  
  let [fontsLoaded] = useFonts({
      Montserrat_400Regular,
      Montserrat_700Bold,
      Montserrat_500Medium,
      Montserrat_600SemiBold
    });

  if (!fontsLoaded) {
    return null;
  }

  return <Text>Open up App.js to start working on your app!</Text>

};