import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const TabBarOptions = {
  keyboardHidesTabBar: true,
  activeTintColor: '#fff',
  inactiveTintColor: 'rgba(255, 255, 255, 0.4)',
  style: {
    backgroundColor: '#101010',
    borderTopWidth: 0,
  },
};

export const AppointmentOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ size, color }) => (
    <Icon name="event" size={size} color={color} />
  ),
};

export const ProfileOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({ size, color }) => (
    <Icon name="person" size={size} color={color} />
  ),
};
