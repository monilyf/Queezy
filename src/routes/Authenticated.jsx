import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTE} from './routes';
import Dashboard from '../screens/Version2/Dashboard';
import ChooseCategory from '../screens/Version1/ChooseCategory';
import CreateQuiz from '../screens/Version2/CreateQuiz';
import AddQuestions from '../screens/Version2/AddQuestions';
import AddCategory from '../screens/Version2/AddCategory';
import QuestionsListing from '../screens/Version2/QuestionsListing';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Settings from '../screens/Version2/Settings';
import QuizInto from '../screens/Player/QuizIntro';
import Quiz from '../screens/Player/Quiz';
import { Image } from 'react-native';
import { ICONS } from '../utils/images';
import themeUtils from '../utils/theme/themeUtils';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={ROUTE.DASHBOARD} component={Dashboard} options={{tabBarLabel:'Home',
      tabBarIcon:({color, size})=>(
        <Image source={ICONS.home} style={{height:themeUtils.relativeHeight(4),width:themeUtils.relativeHeight(4)}}/>
      )}}
      />
      <Tab.Screen name={ROUTE.SETTINGS} component={Settings} options={{
        tabBarLabel:'Settings',
        tabBarIcon:({color, size})=>(
        <Image source={ICONS.settings} style={{height:themeUtils.relativeHeight(4),width:themeUtils.relativeHeight(4)}}/>

        )
      }}/>
    </Tab.Navigator>
  );
};

const Authenticated = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <Stack.Navigator
        initialRouteName={ROUTE.DASHBOARD}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTE.HOME} component={TabNavigator} />
        <Stack.Screen name={ROUTE.CREATE_QUIZ} component={CreateQuiz} />
        <Stack.Screen name={ROUTE.CHOOSE_CATEGORY} component={ChooseCategory} />
        <Stack.Screen name={ROUTE.ADD_QUESTIONS} component={AddQuestions} />
        <Stack.Screen name={ROUTE.ADD_CATEGORY} component={AddCategory} />
        <Stack.Screen
          name={ROUTE.QUESTION_LISTING}
          component={QuestionsListing}
        />
        <Stack.Screen name={ROUTE.QUIZ_INTRO} component={QuizInto} />
        <Stack.Screen name={ROUTE.QUIZ} component={Quiz} />
      </Stack.Navigator>
    </>
  );
};

export default Authenticated;
