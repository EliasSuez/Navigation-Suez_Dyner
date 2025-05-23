import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Search({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla Search</Text>
      <Button title="Ir a Search2" onPress={() => navigation.navigate('search2')} />
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
