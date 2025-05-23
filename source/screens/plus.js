import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Plus({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ingresar Datos</Text>
      <TextInput placeholder="Nombre" style={styles.input} onChangeText={setNombre} />
      <TextInput placeholder="Teléfono" style={styles.input} onChangeText={setTelefono} keyboardType="phone-pad" />
      <Button title="Enviar a Plus2" onPress={() => navigation.navigate('plus2', { nombre, telefono })} />
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
    fontSize: 24,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    width: '80%',
    padding: 10,
    marginBottom: 10,
  },
});
