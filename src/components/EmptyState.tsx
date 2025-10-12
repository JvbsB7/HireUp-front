import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Button from './Button';
import { COLORS, SPACING, FONT_SIZES } from '../utils/constants';

// ===== TIPOS =====
interface EmptyStateProps {
  icon?: keyof typeof Ionicons.glyphMap;
  title: string;
  message: string;
  buttonText?: string;
  onButtonPress?: () => void;
}

// ===== COMPONENTE =====
const EmptyState: React.FC<EmptyStateProps> = ({
  icon = 'file-tray-outline',
  title,
  message,
  buttonText,
  onButtonPress,
}) => {
  return (
    <View style={styles.container}>
      <Ionicons name={icon} size={80} color={COLORS.textLight} />
      
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>

      {buttonText && onButtonPress && (
        <Button
          title={buttonText}
          onPress={onButtonPress}
          variant="primary"
          style={styles.button}
        />
      )}
    </View>
  );
};

// ===== ESTILOS =====
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SPACING.xl,
    backgroundColor: COLORS.background,
  },
  title: {
    fontSize: FONT_SIZES.xl,
    fontWeight: '700',
    color: COLORS.text,
    marginTop: SPACING.lg,
    marginBottom: SPACING.sm,
    textAlign: 'center',
  },
  message: {
    fontSize: FONT_SIZES.md,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginBottom: SPACING.lg,
    lineHeight: 22,
  },
  button: {
    minWidth: 200,
  },
});

export default EmptyState;