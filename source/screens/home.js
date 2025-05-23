import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla Home</Text>
      <Button title="Ir a Home2" onPress={() => navigation.navigate('home2')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
});
