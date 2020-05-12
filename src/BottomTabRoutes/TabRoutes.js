import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

import {
  TabBarOptions,
  AppointmentOptions,
  ProfileOptions,
} from './TabOptions';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={TabBarOptions}>
        <Tab.Screen
          name="Agendamentos"
          component={Dashboard}
          options={AppointmentOptions}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={ProfileOptions}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
