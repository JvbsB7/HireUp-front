import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, BORDER_RADIUS, FONT_SIZES, SHADOWS } from '../utils/constants';
import { formatRelativeTime, truncateText } from '../utils/formatters';

// ===== TIPOS =====
interface CardProps {
  title: string;
  description: string;
  enterpriseName: string;
  enterpriseLogo?: string;
  createdAt: string;
  solutionsCount?: number;
  onPress: () => void;
  style?: ViewStyle;
}

// ===== COMPONENTE =====
const Card: React.FC<CardProps> = ({
  title,
  description,
  enterpriseName,
  enterpriseLogo,
  createdAt,
  solutionsCount = 0,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity
      style={[styles.card, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {/* Header - Empresa */}
      <View style={styles.header}>
        <View style={styles.enterpriseInfo}>
          {enterpriseLogo ? (
            <Image
              source={{ uri: enterpriseLogo }}
              style={styles.logo}
            />
          ) : (
            <View style={[styles.logo, styles.logoPlaceholder]}>
              <Text style={styles.logoText}>
                {enterpriseName.charAt(0).toUpperCase()}
              </Text>
            </View>
          )}
          
          <View style={styles.enterpriseDetails}>
            <Text style={styles.enterpriseName} numberOfLines={1}>
              {enterpriseName}
            </Text>
            <Text style={styles.time}>
              {formatRelativeTime(createdAt)}
            </Text>
          </View>
        </View>
      </View>

      {/* Body - Título e Descrição */}
      <View style={styles.body}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.description} numberOfLines={3}>
          {truncateText(description, 150)}
        </Text>
      </View>

      {/* Footer - Estatísticas */}
      <View style={styles.footer}>
        <View style={styles.stat}>
          <Ionicons name="bulb-outline" size={18} color={COLORS.primary} />
          <Text style={styles.statText}>
            {solutionsCount} {solutionsCount === 1 ? 'solução' : 'soluções'}
          </Text>
        </View>
        
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Ver desafio</Text>
          <Ionicons name="arrow-forward" size={14} color={COLORS.primary} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

// ===== ESTILOS =====
const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    ...SHADOWS.md,
  },
  
  // Header
  header: {
    marginBottom: SPACING.md,
  },
  enterpriseInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: BORDER_RADIUS.md,
  },
  logoPlaceholder: {
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: COLORS.surface,
    fontSize: FONT_SIZES.xl,
    fontWeight: '700',
  },
  enterpriseDetails: {
    flex: 1,
    marginLeft: SPACING.sm,
  },
  enterpriseName: {
    fontSize: FONT_SIZES.md,
    fontWeight: '600',
    color: COLORS.text,
  },
  time: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  
  // Body
  body: {
    marginBottom: SPACING.md,
  },
  title: {
    fontSize: FONT_SIZES.lg,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: SPACING.xs,
  },
  description: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textSecondary,
    lineHeight: 20,
  },
  
  // Footer
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: SPACING.sm,
    borderTopWidth: 1,
    borderTopColor: COLORS.divider,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
  },
  statText: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textSecondary,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
    backgroundColor: COLORS.primaryLight + '20', // 20 = opacity
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs,
    borderRadius: BORDER_RADIUS.full,
  },
  badgeText: {
    fontSize: FONT_SIZES.xs,
    fontWeight: '600',
    color: COLORS.primary,
  },
});

export default Card;