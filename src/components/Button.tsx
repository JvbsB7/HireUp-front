import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, BORDER_RADIUS, FONT_SIZES, SHADOWS } from '../utils/constants';

// ===== TIPOS =====
interface ButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'white';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  leftIcon?: keyof typeof Ionicons.glyphMap;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

// ===== COMPONENTE =====
const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'large',
  loading = false,
  disabled = false,
  fullWidth = true,
  leftIcon,
  rightIcon,
  style,
  textStyle,
  ...rest
}) => {
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles[variant],
        styles[size],
        fullWidth && styles.fullWidth,
        isDisabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.8}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'white' ? COLORS.primary : COLORS.buttonPrimaryText}
          size="small"
        />
      ) : (
        <>
          {leftIcon && (
            <Ionicons
              name={leftIcon}
              size={22}
              color={variant === 'white' ? COLORS.text : COLORS.buttonPrimaryText}
              style={styles.leftIcon}
            />
          )}
          <Text
            style={[
              styles.text,
              styles[`${variant}Text`],
              styles[`${size}Text`],
              isDisabled && styles.disabledText,
              textStyle,
            ]}
          >
            {title}
          </Text>
          {rightIcon && (
            <Ionicons
              name={rightIcon}
              size={22}
              color={variant === 'white' ? COLORS.text : COLORS.buttonPrimaryText}
              style={styles.rightIcon}
            />
          )}
        </>
      )}
    </TouchableOpacity>
  );
};

// ===== ESTILOS =====
const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BORDER_RADIUS.xl, // Bem arredondado
  },
  text: {
    fontWeight: '600',
    textAlign: 'center',
  },
  leftIcon: {
    marginRight: SPACING.sm,
  },
  rightIcon: {
    marginLeft: SPACING.sm,
  },
  
  // ===== VARIANTES =====
  primary: {
    backgroundColor: COLORS.buttonPrimary,
    ...SHADOWS.md,
  },
  primaryText: {
    color: COLORS.buttonPrimaryText,
  },
  
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: COLORS.buttonSecondaryBorder,
  },
  secondaryText: {
    color: COLORS.buttonSecondaryText,
  },
  
  ghost: {
    backgroundColor: 'transparent',
  },
  ghostText: {
    color: COLORS.primary,
  },
  
  white: {
    backgroundColor: COLORS.surface,
    ...SHADOWS.md,
  },
  whiteText: {
    color: COLORS.text,
  },
  
  // ===== TAMANHOS =====
  small: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    minHeight: 40,
  },
  smallText: {
    fontSize: FONT_SIZES.sm,
  },
  
  medium: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    minHeight: 48,
  },
  mediumText: {
    fontSize: FONT_SIZES.md,
  },
  
  large: {
    paddingHorizontal: SPACING.xl,
    paddingVertical: SPACING.md,
    minHeight: 56, // Altura igual aos inputs
  },
  largeText: {
    fontSize: FONT_SIZES.lg,
  },
  
  // ===== ESTADOS =====
  fullWidth: {
    width: '100%',
  },
  
  disabled: {
    opacity: 0.5,
  },
  
  disabledText: {
    opacity: 0.7,
  },
});

export default Button;