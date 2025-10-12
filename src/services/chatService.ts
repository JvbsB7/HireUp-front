import api, { getErrorMessage } from './api';
import {
  Conversation,
  Message,
  SendMessageInput,
  StartConversationInput,
  ConversationListResponse,
  MessageListResponse,
} from '../@types/chat.types';

class ChatService {
  // Listar todas as conversas do usuário
  async getConversations(): Promise<ConversationListResponse> {
    try {
      const response = await api.get<ConversationListResponse>('/chat/conversations');
      return response.data;
    } catch (error) {
      throw new Error(getErrorMessage(error));
    }
  }

  // Obter mensagens de uma conversa específica
  async getMessages(conversationId: string, page: number = 1, limit: number = 50): Promise<MessageListResponse> {
    try {
      const response = await api.get<MessageListResponse>(
        `/chat/conversations/${conversationId}/messages`,
        {
          params: { page, limit }
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(getErrorMessage(error));
    }
  }

  // Enviar mensagem
  async sendMessage(input: SendMessageInput): Promise<Message> {
    try {
      const response = await api.post<Message>(
        `/chat/conversations/${input.conversationId}/messages`,
        {
          content: input.content
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(getErrorMessage(error));
    }
  }

  // Iniciar nova conversa (EMPRESA com PROFISSIONAL ou vice-versa)
  async startConversation(input: StartConversationInput): Promise<Conversation> {
    try {
      const response = await api.post<Conversation>('/chat/conversations', {
        recipientId: input.recipientId,
        initialMessage: input.initialMessage
      });
      return response.data;
    } catch (error) {
      throw new Error(getErrorMessage(error));
    }
  }

  // Marcar mensagens como lidas
  async markAsRead(conversationId: string): Promise<void> {
    try {
      await api.put(`/chat/conversations/${conversationId}/read`);
    } catch (error) {
      throw new Error(getErrorMessage(error));
    }
  }

  // Deletar conversa
  async deleteConversation(conversationId: string): Promise<void> {
    try {
      await api.delete(`/chat/conversations/${conversationId}`);
    } catch (error) {
      throw new Error(getErrorMessage(error));
    }
  }

  // ⚠️ NOTA: Para chat em tempo real, você precisará integrar SignalR (C#)
  // Essas funções usam polling (requisições HTTP normais).
  // Quando o backend estiver pronto com WebSockets/SignalR, podemos atualizar.
}

export default new ChatService();