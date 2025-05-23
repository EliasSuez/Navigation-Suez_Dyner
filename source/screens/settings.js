import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla Settings</Text>
      <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff5cc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
});
