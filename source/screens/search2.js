import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Search2() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla Search2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccf2ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
});
