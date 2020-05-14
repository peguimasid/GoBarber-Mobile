import React from 'react';
import { View, Text, Button } from 'react-native';

import Backgroud from '~/components/Background';

// import { Container } from './styles';

export default function SelectProvider({ navigation }) {
  return (
    <Backgroud>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Select Provider</Text>
        <Button
          title="Go To Time"
          onPress={() => navigation.navigate('Date')}
        />
      </View>
    </Backgroud>
  );
}
