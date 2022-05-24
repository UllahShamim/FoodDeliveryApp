import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
  Montserrat_500Medium,
  Montserrat_600SemiBold
} from '@expo-google-fonts/montserrat';
import Icon from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./components/home";
import Details from "./components/details"

const Stack = createNativeStackNavigator();

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
  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Details" component={Details} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};