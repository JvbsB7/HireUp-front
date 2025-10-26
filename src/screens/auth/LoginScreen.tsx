import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TextInput, 
  SafeAreaView 
} from 'react-native';

import { FontAwesome } from '@expo/vector-icons'; 

import Button from 'src/components/Button'; 

const SCREEN_COLORS = {
  primary: '#1B65F6',
  white: '#FFFFFF',
  darkText: '#000000',
};

export default function SignInScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        {/* --- CABEÇALHO (LOGO + TÍTULO) --- */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image
              source={require('assets/Icone.png')} 
              style={{ width: 64, height: 64 }}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.title}>HireUp</Text>
        </View>

        {/* --- FORMULÁRIO DE LOGIN --- */}
        <View style={styles.formContainer}>
          
          {/* Campo Usuário */}
          <View style={styles.inputContainer}>
            {/* 2. ÍCONE DE USUÁRIO (RESTAURADO) */}
            <FontAwesome name="user" size={20} color={SCREEN_COLORS.darkText} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Usuário"
              placeholderTextColor="#888"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          
          {/* Campo Senha */}
          <View style={styles.inputContainer}>
            {/* 3. ÍCONE DE SENHA (RESTAURADO) */}
            <FontAwesome name="lock" size={20} color={SCREEN_COLORS.darkText} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#888"
              secureTextEntry={true} 
            />
          </View>

          {/* Botão Login */}
          <Button
            title="Login"
            onPress={() => console.log('Login...')}
            variant="primary" 
            size="large"
            fullWidth
            style={styles.customButton}
            textStyle={styles.customButtonText}
          />
        </View>

        <View style={{ flex: 1 }} /> 

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SCREEN_COLORS.primary,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 40, 
    marginBottom: 60, 
  },
  logoContainer: {
    backgroundColor: SCREEN_COLORS.white,
    padding: 32,
    borderRadius: 30,
    marginBottom: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: SCREEN_COLORS.white,
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: SCREEN_COLORS.white,
    borderRadius: 50,
    paddingHorizontal: 20,
    marginBottom: 16,
    height: 56, 
  },
  inputIcon: {
    marginRight: 15,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: SCREEN_COLORS.darkText,
  },
  customButton: {
    backgroundColor: SCREEN_COLORS.white, 
    marginTop: 10,
  },
  customButtonText: {
    color: SCREEN_COLORS.darkText, 
    fontWeight: '600',
  },
});