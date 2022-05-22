import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
  Montserrat_500Medium,
  Montserrat_600SemiBold
} from '@expo-google-fonts/montserrat';

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

  return (
    <View style={styles.container}>
      <Text style={styles.font}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  font: {
    fontFamily: "Montserrat_400Regular",
    color: Colors.textDark,
  }
});
