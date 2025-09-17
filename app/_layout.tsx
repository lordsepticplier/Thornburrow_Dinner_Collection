import { Slot } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function RootLayout() {
  return (
    <>
      <View style={styles.container}>
        <Slot />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the View takes up the entire screen
    backgroundColor: '#660033', // Your desired base background color
  },
});