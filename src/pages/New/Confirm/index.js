import React from 'react';
import { View, Text } from 'react-native';

import Background from '~/components/Background';

// import { Container } from './styles';

export default function Confirm() {
  return (
    <Background>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Confirm</Text>
      </View>
    </Background>
  );
}
