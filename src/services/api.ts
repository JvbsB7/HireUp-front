import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// ===== CONFIGURAÇÃO DA URL DA API =====

// Para desenvolvimento local (quando seu backend C# estiver rodando):
// - Android Emulator: use 'http://10.0.2.2:5000/api'
// - iOS Simulator: use 'http://localhost:5000/api'
// - Device físico: use o IP da sua máquina (ex: 'http://192.168.1.100:5000/api')

const API_URL = __DEV__ 
  ? 'http://localhost:5000/api'  // 🔧 DESENVOLVIMENTO: Trocar quando backend rodar
  : 'https://sua-api-producao.com/api'; // 🚀 PRODUÇÃO: Trocar pela URL real

// ===== TIMEOUT =====
const TIMEOUT = 15000; // 15 segundos

// ===== INTERFACE PARA ERROS DA API =====
export interface ApiError {
  message: string;
  statusCode?: number;
  errors?: Record<string, string[]>; // Erros de validação do backend
}

const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// ===== INTERCEPTOR DE REQUEST =====

api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    try {

      const token = await AsyncStorage.getItem('@hireup:token');
      
 
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }


      if (__DEV__) {
        console.log('📡 API Request:', {
          method: config.method?.toUpperCase(),
          url: config.url,
          hasToken: !!token,
        });
      }
    } catch (error) {
      console.error('❌ Erro ao buscar token:', error);
    }
    
    return config;
  },
  (error: AxiosError) => {
    console.error('❌ Erro no request interceptor:', error);
    return Promise.reject(error);
  }
);

// ===== INTERCEPTOR DE RESPONSE =====

api.interceptors.response.use(
  (response) => {

    if (__DEV__) {
      console.log('✅ API Response:', {
        url: response.config.url,
        status: response.status,
      });
    }
    return response;
  },
  async (error: AxiosError<ApiError>) => {
    // Log do erro
    if (__DEV__) {
      console.error('❌ API Error:', {
        url: error.config?.url,
        status: error.response?.status,
        message: error.response?.data?.message || error.message,
      });
    }

    if (error.response) {
      const { status } = error.response;

      // ===== TRATAMENTO DE ERROS POR STATUS CODE =====

      // 401 - Token expirado ou inválido
      if (status === 401) {
        console.log('🔒 Token expirado. Limpando autenticação...');
        
        // Limpar dados de autenticação
        await AsyncStorage.removeItem('@hireup:token');
        await AsyncStorage.removeItem('@hireup:user');
        await AsyncStorage.removeItem('@hireup:userType');
        

      }

      // 403 - Sem permissão
      if (status === 403) {
        console.error('🚫 Acesso negado. Você não tem permissão para esta ação.');
      }

      // 404 - Recurso não encontrado
      if (status === 404) {
        console.error('🔍 Recurso não encontrado.');
      }

      // 422 - Erro de validação
      if (status === 422) {
        console.error('⚠️ Erro de validação:', error.response.data?.errors);
      }

      // 500+ - Erro no servidor
      if (status >= 500) {
        console.error('🔥 Erro no servidor. Tente novamente mais tarde.');
      }
    } else if (error.request) {
      // Requisição foi feita mas sem resposta (problema de rede)
      console.error('📡 Sem resposta do servidor. Verifique sua conexão com a internet.');
    } else {
      // Erro ao configurar a requisição
      console.error('⚙️ Erro ao configurar requisição:', error.message);
    }

    return Promise.reject(error);
  }
);

// ===== FUNÇÃO AUXILIAR PARA EXTRAIR MENSAGEM DE ERRO =====
export const getErrorMessage = (error: unknown): string => {
  // Se for um erro do Axios
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<ApiError>;
    
    // Mensagem customizada da API
    if (axiosError.response?.data?.message) {
      return axiosError.response.data.message;
    }
    
    // Mensagem padrão por status code
    const status = axiosError.response?.status;
    if (status === 401) return 'Sessão expirada. Faça login novamente.';
    if (status === 403) return 'Você não tem permissão para esta ação.';
    if (status === 404) return 'Recurso não encontrado.';
    if (status === 422) return 'Dados inválidos. Verifique os campos.';
    if (status && status >= 500) return 'Erro no servidor. Tente novamente mais tarde.';
    
    // Erro de rede
    if (!axiosError.response) {
      return 'Erro de conexão. Verifique sua internet.';
    }
  }
  
  // Se for um Error genérico
  if (error instanceof Error) {
    return error.message;
  }
  
  // Fallback
  return 'Erro desconhecido. Tente novamente.';
};

export default api;