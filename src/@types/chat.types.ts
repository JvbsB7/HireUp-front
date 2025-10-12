import { User } from './entities.types';

// Status de leitura da mensagem
export enum MessageStatus {
  SENT = 'sent',
  DELIVERED = 'delivered',
  READ = 'read',
}

// Mensagem individual
export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  content: string;
  status: MessageStatus;
  createdAt: string;
  updatedAt?: string;
}

// Conversa (thread de mensagens)
export interface Conversation {
  id: string;
  participantIds: string[]; // IDs dos 2 participantes
  participants: User[]; // Dados completos dos participantes
  lastMessage?: Message; // Última mensagem enviada
  unreadCount: number; // Mensagens não lidas
  createdAt: string;
  updatedAt: string;
}

// Tipo para enviar mensagem
export interface SendMessageInput {
  conversationId: string;
  content: string;
}

// Tipo para iniciar conversa
export interface StartConversationInput {
  recipientId: string;
  initialMessage: string;
}

// Lista de conversas
export interface ConversationListResponse {
  conversations: Conversation[];
  total: number;
}

// Lista de mensagens com paginação
export interface MessageListResponse {
  messages: Message[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean; // Tem mais mensagens para carregar?
}