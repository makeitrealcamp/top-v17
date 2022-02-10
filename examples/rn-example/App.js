import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useEffect } from 'react';

import useAuth from './hooks/useAuth';
import LoginScreen from './screens/Login';
import CharactersScreen from './screens/Characters';
import LocationsScreen from './screens/Locations';
import EpisodesScreen from './screens/Episodes';

import iconsName from './utils/icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Landing() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = iconsName(route.name);

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Characters" component={CharactersScreen} />
      <Tab.Screen name="Episodes" component={EpisodesScreen} />
      <Tab.Screen name="Locations" component={LocationsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const { isAuthenticated } = useAuth()

  // useEffect(() => {
  //   AsyncStorage.removeItem('@storage_Key')
  // }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          isAuthenticated
          ? (
            <Stack.Screen
              name="Home"
              component={Landing}
              options={{ headerShown: false }}
            />
          )
          : (
            <Stack.Screen
              name="Login"
              options={{ headerShown: false }}
              component={LoginScreen}
            />
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
