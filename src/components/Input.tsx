import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, BORDER_RADIUS, FONT_SIZES } from '../utils/constants';

// ===== TIPOS =====
interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  leftIcon?: keyof typeof Ionicons.glyphMap;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  containerStyle?: ViewStyle;
  isPassword?: boolean;
  onRightIconPress?: () => void;
}

// ===== COMPONENTE =====
const Input: React.FC<InputProps> = ({
  label,
  error,
  leftIcon,
  rightIcon,
  containerStyle,
  isPassword = false,
  secureTextEntry,
  onRightIconPress,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);

  return (
    <View style={[styles.container, containerStyle]}>
      {/* Label - Não mostrar nas telas de auth */}
      {label && <Text style={styles.label}>{label}</Text>}

      {/* Input Container */}
      <View
        style={[
          styles.inputContainer,
          isFocused && styles.inputContainerFocused,
          error && styles.inputContainerError,
        ]}
      >
        {/* Left Icon */}
        {leftIcon && (
          <Ionicons
            name={leftIcon}
            size={22}
            color={COLORS.text}
            style={styles.leftIcon}
          />
        )}

        {/* Text Input */}
        <TextInput
          style={[styles.input, leftIcon && styles.inputWithLeftIcon]}
          placeholderTextColor={COLORS.inputPlaceholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          secureTextEntry={isPassword ? !isPasswordVisible : secureTextEntry}
          autoCapitalize="none"
          {...rest}
        />

        {/* Password Toggle Icon */}
        {isPassword && (
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.rightIcon}
            activeOpacity={0.7}
          >
            <Ionicons
              name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
              size={22}
              color={COLORS.textSecondary}
            />
          </TouchableOpacity>
        )}

        {/* Right Icon (custom) */}
        {!isPassword && rightIcon && (
          <TouchableOpacity
            onPress={onRightIconPress}
            style={styles.rightIcon}
            activeOpacity={0.7}
            disabled={!onRightIconPress}
          >
            <Ionicons name={rightIcon} size={22} color={COLORS.textSecondary} />
          </TouchableOpacity>
        )}
      </View>

      {/* Error Message */}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

// ===== ESTILOS =====
const styles = StyleSheet.create({
  container: {
    marginBottom: SPACING.md,
  },
  label: {
    fontSize: FONT_SIZES.sm,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: SPACING.xs,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.inputBackground,
    borderRadius: BORDER_RADIUS.xl, // Bem arredondado como nas imagens
    borderWidth: 0, // Sem borda por padrão
    paddingHorizontal: SPACING.md,
    minHeight: 56, // Altura maior
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  inputContainerFocused: {
    borderWidth: 2,
    borderColor: COLORS.inputBorderFocused,
  },
  inputContainerError: {
    borderWidth: 2,
    borderColor: COLORS.error,
  },
  input: {
    flex: 1,
    fontSize: FONT_SIZES.md,
    color: COLORS.text,
    paddingVertical: SPACING.sm,
  },
  inputWithLeftIcon: {
    marginLeft: SPACING.xs,
  },
  leftIcon: {
    marginRight: SPACING.xs,
  },
  rightIcon: {
    marginLeft: SPACING.xs,
    padding: SPACING.xs,
  },
  errorText: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.error,
    marginTop: SPACING.xs,
    marginLeft: SPACING.md,
  },
});

export default Input;