import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Welcome';
import { ROUTE } from './routes';

const Authenticated = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator initialRouteName={ROUTE.LOGIN} screenOptions={{headerShown:false}}>
        <Stack.Screen name={ROUTE.LOGIN} component={Login} />
      </Stack.Navigator>
    </>
  );
};

export default Authenticated;
