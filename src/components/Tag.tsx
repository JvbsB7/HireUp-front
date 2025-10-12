import React from 'react';
import { Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, BORDER_RADIUS, FONT_SIZES } from '../utils/constants';

// ===== TIPOS =====
interface TagProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium';
  onPress?: () => void;
  onRemove?: () => void;
  style?: ViewStyle;
}

// ===== COMPONENTE =====
const Tag: React.FC<TagProps> = ({
  label,
  variant = 'primary',
  size = 'medium',
  onPress,
  onRemove,
  style,
}) => {
  const isClickable = !!onPress;

  const Container = isClickable ? TouchableOpacity : React.Fragment;
  const containerProps = isClickable ? { onPress, activeOpacity: 0.7 } : {};

  return (
    <Container {...containerProps}>
      <Text
        style={[
          styles.tag,
          styles[variant],
          styles[size],
          style,
        ]}
      >
        <Text style={[styles.text, styles[`${variant}Text`], styles[`${size}Text`]]}>
          {label}
        </Text>
        
        {onRemove && (
          <TouchableOpacity onPress={onRemove} style={styles.removeButton}>
            <Ionicons
              name="close-circle"
              size={16}
              color={variant === 'primary' ? COLORS.surface : COLORS.primary}
            />
          </TouchableOpacity>
        )}
      </Text>
    </Container>
  );
};

// ===== ESTILOS =====
const styles = StyleSheet.create({
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs,
    borderRadius: BORDER_RADIUS.full,
    alignSelf: 'flex-start',
  },
  text: {
    fontWeight: '600',
  },
  removeButton: {
    marginLeft: SPACING.xs,
  },
  
  // Variantes
  primary: {
    backgroundColor: COLORS.primary,
  },
  primaryText: {
    color: COLORS.surface,
  },
  
  secondary: {
    backgroundColor: COLORS.primaryLight + '30',
  },
  secondaryText: {
    color: COLORS.primary,
  },
  
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: COLORS.primary,
  },
  outlineText: {
    color: COLORS.primary,
  },
  
  // Tamanhos
  small: {
    paddingHorizontal: SPACING.sm,
    paddingVertical: 4,
  },
  smallText: {
    fontSize: FONT_SIZES.xs,
  },
  
  medium: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs,
  },
  mediumText: {
    fontSize: FONT_SIZES.sm,
  },
});

export default Tag;