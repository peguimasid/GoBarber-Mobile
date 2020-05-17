import React, { useEffect, useState } from 'react';

import Backgroud from '~/components/Background';

import api from '~/services/api';

import { Container, ProvidersList, Provider, Avatar, Name } from './styles';

export default function SelectProvider({ navigation }) {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    async function loadProviders() {
      const response = await api.get('providers');

      setProviders(response.data);
    }
    loadProviders();
  }, []);

  return (
    <Backgroud>
      <Container>
        <ProvidersList
          data={providers}
          keyExtractor={(provider) => String(provider.id)}
          renderItem={({ item: provider }) => (
            <Provider onPress={() => navigation.navigate('Date', { provider })}>
              <Avatar
                source={{
                  uri: provider.avatar
                    ? provider.avatar.url
                    : `https://api.adorable.io/avatar/50/${provider.name}.png`,
                }}
              />
              <Name>{provider.name}</Name>
            </Provider>
          )}
        />
      </Container>
    </Backgroud>
  );
}
