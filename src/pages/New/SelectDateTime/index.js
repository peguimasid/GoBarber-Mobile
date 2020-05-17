import React from 'react';
import { View, Text, Button } from 'react-native';

// import { Container } from './styles';

import Background from '~/components/Background';

export default function SelectDateTime({ navigation }) {
  return (
    <Background>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Select Date Time</Text>
        <Button
          title="Confirm"
          onPress={() => navigation.navigate('Confirm')}
        />
      </View>
    </Background>
  );
}
