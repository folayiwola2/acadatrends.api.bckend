import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackParamList} from './navigationTypes';
import HomeScreen from '../screens/HomeScreen';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigation = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="HomeItems" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigation;
