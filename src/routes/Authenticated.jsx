import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTE} from './routes';
import Dashboard from '../screens/Dashboard';
import ChooseCategory from '../screens/ChooseCategory';
import CreateQuiz from '../screens/CreateQuiz';

const Authenticated = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator
        initialRouteName={ROUTE.DASHBOARD}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTE.DASHBOARD} component={Dashboard} />
        <Stack.Screen name={ROUTE.CREATE_QUIZ} component={CreateQuiz} />
        <Stack.Screen name={ROUTE.CHOOSE_CATEGORY} component={ChooseCategory} />
      </Stack.Navigator>
    </>
  );
};

export default Authenticated;
