// src/components/Footer.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2023 PDF Management App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    padding: 10,
    backgroundColor: '#6200EE',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
  footerText: {
    fontSize: 14,
    color: '#FFF',
    textAlign: 'center',
  },
});

export default Footer;