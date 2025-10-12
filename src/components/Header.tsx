import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  StatusBar,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, FONT_SIZES, SHADOWS } from '../utils/constants';

// ===== TIPOS =====
interface HeaderProps {
  title?: string;
  subtitle?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  rightComponent?: React.ReactNode;
  leftComponent?: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  style?: ViewStyle;
  variant?: 'default' | 'transparent' | 'colored';
}

// ===== COMPONENTE =====
const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  showBackButton = false,
  onBackPress,
  rightComponent,
  leftComponent,
  backgroundColor,
  textColor,
  style,
  variant = 'default',
}) => {
  // Cores baseadas na variante
  const getBackgroundColor = () => {
    if (backgroundColor) return backgroundColor;
    if (variant === 'transparent') return 'transparent';
    if (variant === 'colored') return COLORS.primary;
    return COLORS.surface;
  };

  const getTextColor = () => {
    if (textColor) return textColor;
    if (variant === 'colored') return COLORS.textOnPrimary;
    return COLORS.text;
  };

  const bgColor = getBackgroundColor();
  const txtColor = getTextColor();

  return (
    <>
      {/* StatusBar */}
      <StatusBar
        barStyle={variant === 'colored' ? 'light-content' : 'dark-content'}
        backgroundColor={bgColor}
      />

      <View
        style={[
          styles.container,
          { backgroundColor: bgColor },
          variant === 'default' && styles.containerWithShadow,
          style,
        ]}
      >
        {/* Left Side */}
        <View style={styles.leftContainer}>
          {showBackButton && onBackPress ? (
            <TouchableOpacity
              onPress={onBackPress}
              style={styles.backButton}
              activeOpacity={0.7}
            >
              <Ionicons
                name="arrow-back"
                size={24}
                color={txtColor}
              />
            </TouchableOpacity>
          ) : leftComponent ? (
            leftComponent
          ) : (
            <View style={styles.placeholder} />
          )}
        </View>

        {/* Center - Title */}
        <View style={styles.centerContainer}>
          {title && (
            <View style={styles.titleContainer}>
              <Text
                style={[styles.title, { color: txtColor }]}
                numberOfLines={1}
              >
                {title}
              </Text>
              {subtitle && (
                <Text
                  style={[styles.subtitle, { color: txtColor, opacity: 0.7 }]}
                  numberOfLines={1}
                >
                  {subtitle}
                </Text>
              )}
            </View>
          )}
        </View>

        {/* Right Side */}
        <View style={styles.rightContainer}>
          {rightComponent || <View style={styles.placeholder} />}
        </View>
      </View>
    </>
  );
};

// ===== ESTILOS =====
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
    minHeight: 56,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : SPACING.md,
  },
  containerWithShadow: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
    ...SHADOWS.sm,
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  centerContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  titleContainer: {
    alignItems: 'center',
  },
  backButton: {
    padding: SPACING.xs,
    marginLeft: -SPACING.xs, // Ajuste fino
  },
  title: {
    fontSize: FONT_SIZES.lg,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: FONT_SIZES.sm,
    marginTop: 2,
  },
  placeholder: {
    width: 40, // Espaço para manter o título centralizado
  },
});

export default Header;