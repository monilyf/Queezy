import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {ROUTE} from './routes';
import SplashScreen from '../screens/SplashScreen';
import Authenticated from './Authenticated';
import Unauthenticated from './Unauthenticated';

const RootNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ROUTE.SPLASH}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTE.SPLASH} component={SplashScreen} />
        <Stack.Screen name={ROUTE.AUTHENTICATED} component={Authenticated} />
        <Stack.Screen
          name={ROUTE.UNAUTHENTICATED}
          component={Unauthenticated}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
