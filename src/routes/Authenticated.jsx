import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTE} from './routes';
import Dashboard from '../screens/Version2/Dashboard';
import ChooseCategory from '../screens/ChooseCategory';
import CreateQuiz from '../screens/Version2/CreateQuiz';
import AddQuestions from '../screens/Version2/AddQuestions';
import AddCategory from '../screens/Version2/AddCategory';
import QuestionsListing from '../screens/Version2/QuestionsListing';

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
        <Stack.Screen name={ROUTE.ADD_QUESTIONS} component={AddQuestions} />
        <Stack.Screen name={ROUTE.ADD_CATEGORY} component={AddCategory} />
        <Stack.Screen name={ROUTE.QUESTION_LISTING} component={QuestionsListing} />
      </Stack.Navigator>
    </>
  );
};

export default Authenticated;
