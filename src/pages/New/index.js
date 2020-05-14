import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SelectProvider from './SelectProvider';
import SelectDateTime from './SelectDateTime';
import Confirm from './Confirm';

import { ProviderOptions } from './StackOptions';

// import { Container } from './styles';

const Stack = createStackNavigator();

export default function New() {
  return (
    <Stack.Navigator initialRouteName="Provider">
      <Stack.Screen
        name="Provider"
        component={SelectProvider}
        options={ProviderOptions}
      />
      <Stack.Screen
        name="Date"
        component={SelectDateTime}
        // options={DateOptions}
      />
      <Stack.Screen
        name="Confirm"
        component={Confirm}
        // options={ConfirmOptions}
      />
    </Stack.Navigator>
  );
}
