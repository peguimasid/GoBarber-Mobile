import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import New from '~/pages/New';

import {
  TabBarOptions,
  AppointmentOptions,
  ProfileOptions,
  NewOptions,
} from './TabOptions';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={TabBarOptions}>
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={AppointmentOptions}
        />

        <Tab.Screen name="Agendar" component={New} options={NewOptions} />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={ProfileOptions}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
