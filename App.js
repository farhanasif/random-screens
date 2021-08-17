//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { DefaultTheme } from 'react-native-paper';
import PrimaryNavigations from './src/navigations/PrimaryNavigations';

export default function App() {
  return (
    // <PaperProvider theme={theme}>

        <PrimaryNavigations />

    // </PaperProvider>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};