import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const TabBarOptions = {
  keyboardHidesTabBar: true,
  activeTintColor: '#fff',
  inactiveTintColor: 'rgba(255, 255, 255, 0.4)',
  style: {
    backgroundColor: '#090909',
  },
};

export const AppointmentOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ size }) => <Icon name="event" size={size} color="#eee" />,
};

export const ProfileOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({ size }) => <Icon name="person" size={size} color="#eee" />,
};
