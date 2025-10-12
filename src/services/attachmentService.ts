import api, { getErrorMessage } from './api';
import { UploadAttachmentResponseDto } from '../@types/dto.types';
import * as ImagePicker from 'expo-image-picker';

class AttachmentService {
  // Upload de arquivo (imagem, PDF, etc)
  async uploadFile(file: {
    uri: string;
    type: string;
    name: string;
  }): Promise<UploadAttachmentResponseDto> {
    try {
      const formData = new FormData();
      
      // @ts-ignore - FormData aceita objetos no React Native
      formData.append('file', {
        uri: file.uri,
        type: file.type,
        name: file.name,
      });

      const response = await api.post<UploadAttachmentResponseDto>(
        '/attachments/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(getErrorMessage(error));
    }
  }

  // Selecionar imagem da galeria
  async pickImageFromGallery(): Promise<string | null> {
    try {
      // Pedir permissão
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
      if (status !== 'granted') {
        throw new Error('Permissão negada para acessar galeria');
      }

      // Abrir galeria
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1], // Quadrado
        quality: 0.8,
      });

      if (!result.canceled && result.assets && result.assets[0]) {
        return result.assets[0].uri;
      }

      return null;
    } catch (error) {
      console.error('Erro ao selecionar imagem:', error);
      throw new Error(getErrorMessage(error));
    }
  }

  // Tirar foto com câmera
  async takePhoto(): Promise<string | null> {
    try {
      // Pedir permissão
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      
      if (status !== 'granted') {
        throw new Error('Permissão negada para acessar câmera');
      }

      // Abrir câmera
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (!result.canceled && result.assets && result.assets[0]) {
        return result.assets[0].uri;
      }

      return null;
    } catch (error) {
      console.error('Erro ao tirar foto:', error);
      throw new Error(getErrorMessage(error));
    }
  }

  // Deletar arquivo
  async deleteFile(fileId: string): Promise<void> {
    try {
      await api.delete(`/attachments/${fileId}`);
    } catch (error) {
      throw new Error(getErrorMessage(error));
    }
  }
}

export default new AttachmentService();