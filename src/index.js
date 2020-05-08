import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar barStyle="light-content" />
    </>
  );
}
