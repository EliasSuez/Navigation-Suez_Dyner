import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Plus2({ route }) {
  const { nombre, telefono } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Datos Ingresados</Text>
      <Text style={styles.text}>Nombre: {nombre}</Text>
      <Text style={styles.text}>Teléfono: {telefono}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    margin: 5,
  },
});
