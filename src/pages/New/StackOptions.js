import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';

export const ProviderOptions = ({ navigation }) => ({
  title: 'Selecione o prestador',
  headerTransparent: true,
  headerTintColor: '#fff',
  headerLeftContainerStyle: {
    marginLeft: 20,
  },
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Dashboard');
      }}
    >
      <Icon name="chevron-left" size={40} color="#fff" />
    </TouchableOpacity>
  ),
});

export const DateOptions = ({ navigation }) => ({
  title: 'Selecione o horário',
  headerTransparent: true,
  headerTintColor: '#fff',
  headerLeftContainerStyle: {
    marginLeft: 20,
  },
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Provider');
      }}
    >
      <Icon name="chevron-left" size={40} color="#fff" />
    </TouchableOpacity>
  ),
});

export const ConfirmOptions = ({ navigation }) => ({
  title: 'Confimar agendamento',
  headerTransparent: true,
  headerTintColor: '#fff',
  headerLeftContainerStyle: {
    marginLeft: 20,
  },
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Date');
      }}
    >
      <Icon name="chevron-left" size={40} color="#fff" />
    </TouchableOpacity>
  ),
});
