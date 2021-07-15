//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import PrimaryNavigations from './src/navigations/PrimaryNavigations';

export default function App() {
  return (
    // <View style={styles.container}>

    //   <Text>Okki!</Text>
    //   <StatusBar style="auto" />
    // </View>
       <PrimaryNavigations />
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
