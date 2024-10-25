// src/components/Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>PDF Management App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#6200EE',
  },
  headerText: {
    fontSize: 20,
    color: '#FFF',
    textAlign: 'center',
  },
});

export default Header;