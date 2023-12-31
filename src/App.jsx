import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ButtonBack from './components/ButtonBack/ButtonBack';
import { styles } from './styles';

import RegistrationScreen from './components/RegistrationScreen/RegistrationScreen';
import LoginScreen from './components/LoginScreen/LoginScreen';
import Home from './components/Home/Home';
import Map from './components/MapScreen/MapScreen';
import Comments from './components/CommentsScreen/CommentsScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    Regular: require('../assets/fonts/Roboto-Regular.ttf'),
    Medium: require('../assets/fonts/Roboto-Medium.ttf'),
    Bold: require('../assets/fonts/Roboto-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  const MainStack = createStackNavigator();

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Comments"
          component={Comments}
          options={{
            title: 'Коментарі',
            headerStyle: styles.wrapperPostHeader,
            headerTitleStyle: styles.titlePostHeader,
            headerLeft: () => <ButtonBack />,
          }}
        />
        <MainStack.Screen
          name="Map"
          component={Map}
          options={{
            title: 'Мапа',
            headerStyle: styles.wrapperPostHeader,
            headerTitleStyle: styles.titlePostHeader,
            headerLeft: () => <ButtonBack />,
          }}
        />
      </MainStack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
