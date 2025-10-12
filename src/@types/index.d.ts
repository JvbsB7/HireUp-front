// Centralizador de todos os tipos do projeto
// Facilita imports: import { User, Problem } from '@types'

// Entidades
export * from './entities.types';

// DTOs
export * from './dto.types';

// Navegação
export * from './navigation.types';

// Chat
export * from './chat.types';

// ===== TIPOS GLOBAIS =====

// Resposta padrão de sucesso
export interface SuccessResponse {
  success: boolean;
  message?: string;
}

// Resposta padrão de erro
export interface ErrorResponse {
  success: false;
  error: string;
  statusCode?: number;
  errors?: Record<string, string[]>;
}

// Opções de paginação
export interface PaginationOptions {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

// Resposta paginada genérica
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasMore: boolean;
}

// Estado de loading
export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

// Filtros de busca genéricos
export interface SearchFilters {
  query?: string;
  tags?: string[];
  dateFrom?: string;
  dateTo?: string;
}

// Coordenadas geográficas
export interface GeoLocation {
  id: string;
  latitude: number;
  longitude: number;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
}

// Notificação
export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  createdAt: string;
  data?: Record<string, any>;
}