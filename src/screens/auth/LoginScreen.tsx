import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { FontAwesome } from '@expo/vector-icons'; 

import Button from 'src/components/Button'; 

const SCREEN_COLORS = {
  primary: '#1B65F6', 
  white: '#FFFFFF',
  darkText: '#000000', 
};

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <FontAwesome name="handshake-o" size={48} color={SCREEN_COLORS.primary} />
        </View>
        <Text style={styles.title}>HireUp</Text>
        <Text style={styles.subtitle}>conecte-se com oportunidades</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Sou Profissional"
          onPress={() => console.log('Profissional')}
          variant="primary" 
          size="large" 
          fullWidth
          icon={<FontAwesome name="user" size={20} color={SCREEN_COLORS.darkText} style={{ marginRight: 10 }} />}
          
          style={styles.customButton}
          textStyle={styles.customButtonText}
        />
        <Button
          title="Sou Empresa"
          onPress={() => console.log('Empresa')}
          variant="primary"
          size="large"
          fullWidth
          icon={<FontAwesome name="briefcase" size={20} color={SCREEN_COLORS.darkText} style={{ marginRight: 10 }} />}
          
          style={[styles.customButton, { marginTop: 16 }]} 
          textStyle={styles.customButtonText}
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Ja tem conta ?</Text>
        <TouchableOpacity onPress={() => console.log('Fazer login')}>
          <Text style={[styles.footerText, styles.footerLink]}>
            Fazer login
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SCREEN_COLORS.primary,
    alignItems: 'center',
    justifyContent: 'space-around', 
    padding: 20,
  },
  header: {
    alignItems: 'center',
  },
  logoContainer: {
    backgroundColor: SCREEN_COLORS.white,
    padding: 24,
    borderRadius: 25, 
    marginBottom: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: SCREEN_COLORS.white,
  },
  subtitle: {
    fontSize: 18,
    color: SCREEN_COLORS.white,
    opacity: 0.9,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 10, 
  },
  customButton: {
    backgroundColor: SCREEN_COLORS.white, 
  },
  customButtonText: {
    color: SCREEN_COLORS.darkText, 
    fontWeight: '600',
  },
  footer: {
    alignItems: 'center',
  },
  footerText: {
    color: SCREEN_COLORS.white,
    fontSize: 16,
  },
  footerLink: {
    fontWeight: 'bold',
    marginTop: 4,
  },
});