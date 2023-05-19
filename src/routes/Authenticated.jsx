import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTE} from './routes';
import Dashboard from '../screens/Dashboard';

const Authenticated = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator
        initialRouteName={ROUTE.DASHBOARD}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTE.DASHBOARD} component={Dashboard} />
      </Stack.Navigator>
    </>
  );
};

export default Authenticated;
