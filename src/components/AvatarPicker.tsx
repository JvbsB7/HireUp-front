import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, BORDER_RADIUS, FONT_SIZES } from '../utils/constants';
import attachmentService from '@services/attachmentService';

// ===== TIPOS =====
interface AvatarPickerProps {
  imageUri?: string | null;
  onImageSelected: (uri: string) => void;
  size?: number;
}

// ===== COMPONENTE =====
const AvatarPicker: React.FC<AvatarPickerProps> = ({
  imageUri,
  onImageSelected,
  size = 100,
}) => {
  const [loading, setLoading] = useState(false);

  const handlePickImage = async () => {
    try {
      setLoading(true);
      const uri = await attachmentService.pickImageFromGallery();
      
      if (uri) {
        onImageSelected(uri);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      Alert.alert('Erro', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.avatarContainer, { width: size, height: size }]}
        onPress={handlePickImage}
        activeOpacity={0.8}
        disabled={loading}
      >
        {loading ? (
          <View style={styles.placeholder}>
            <ActivityIndicator size="large" color={COLORS.primary} />
          </View>
        ) : imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.avatar} />
        ) : (
          <View style={styles.placeholder}>
            <Ionicons
              name="person-outline"
              size={size * 0.5}
              color={COLORS.avatarIcon}
            />
          </View>
        )}
        
        {/* Botão de adicionar foto */}
        {!loading && (
          <View style={styles.addButton}>
            <Ionicons name="add" size={20} color={COLORS.surface} />
          </View>
        )}
      </TouchableOpacity>
      
      <Text style={styles.label}>Adicionar foto de perfil</Text>
    </View>
  );
};

// ===== ESTILOS =====
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: SPACING.lg,
  },
  avatarContainer: {
    borderRadius: BORDER_RADIUS.full,
    overflow: 'hidden',
    position: 'relative',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  placeholder: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.avatarPlaceholder,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 32,
    height: 32,
    borderRadius: BORDER_RADIUS.full,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: COLORS.surface,
  },
  label: {
    marginTop: SPACING.sm,
    fontSize: FONT_SIZES.sm,
    color: COLORS.text,
    fontWeight: '500',
  },
});

export default AvatarPicker;