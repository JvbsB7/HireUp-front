// ===== CORES DO APP (BASEADAS NO DESIGN REAL) =====
export const COLORS = {
  // Primária (Roxo HireUp)
  primary: '#6366F1',      // Roxo principal
  primaryDark: '#4F46E5',  // Roxo escuro (hover/pressed)
  primaryLight: '#818CF8', // Roxo claro
  
  // Backgrounds
  background: '#F9FAFB',   // Cinza muito claro (telas internas)
  backgroundAuth: '#6366F1', // Roxo (telas de auth)
  surface: '#FFFFFF',      // Branco (cards, inputs)
  surfaceSecondary: '#E5E7EB', // Cinza claro (telas de cadastro)
  
  // Texto
  text: '#111827',         // Preto suave (texto principal)
  textSecondary: '#6B7280', // Cinza médio
  textLight: '#9CA3AF',    // Cinza claro (placeholders)
  textOnPrimary: '#FFFFFF', // Branco (texto em roxo)
  
  // Estados
  success: '#10B981',      // Verde
  warning: '#F59E0B',      // Amarelo/Laranja
  error: '#EF4444',        // Vermelho
  info: '#3B82F6',         // Azul
  
  // Bordas
  border: '#E5E7EB',       // Cinza para bordas
  divider: '#F3F4F6',      // Cinza para divisores
  
  // Input
  inputBackground: '#FFFFFF',
  inputBorder: '#E5E7EB',
  inputBorderFocused: '#6366F1',
  inputPlaceholder: '#9CA3AF',
  
  // Botão
  buttonPrimary: '#6366F1',
  buttonPrimaryText: '#FFFFFF',
  buttonSecondary: '#FFFFFF',
  buttonSecondaryText: '#6366F1',
  buttonSecondaryBorder: '#6366F1',
  
  // Overlay
  overlay: 'rgba(0, 0, 0, 0.5)',
  overlayLight: 'rgba(0, 0, 0, 0.3)',
  
  // Ícone de perfil placeholder
  avatarPlaceholder: '#E0E7FF', // Roxo muito claro
  avatarIcon: '#6366F1',
};

// ===== TAMANHOS DE FONTE =====
export const FONT_SIZES = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  huge: 48,
};

// ===== FONT WEIGHTS =====
export const FONT_WEIGHTS = {
  regular: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold: '700' as const,
};

// ===== ESPAÇAMENTOS =====
export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
};

// ===== BORDER RADIUS =====
export const BORDER_RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  full: 9999,
};

// ===== SOMBRAS =====
export const SHADOWS = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
};

// ===== ÍCONES (Expo Vector Icons) =====
export const ICONS = {
  user: 'person-outline',
  briefcase: 'briefcase-outline',
  mail: 'mail-outline',
  lock: 'lock-closed-outline',
  phone: 'call-outline',
  id: 'card-outline',
  back: 'arrow-back',
  camera: 'camera-outline',
  checkmark: 'checkmark-circle',
  close: 'close-circle',
};

// ===== SKILLS DISPONÍVEIS =====
export const AVAILABLE_SKILLS = [
  'React Native', 'React', 'JavaScript', 'TypeScript',
  'Node.js', 'C#', '.NET', 'Python', 'Java',
  'UI/UX', 'Figma', 'Design',
  'SQL', 'MongoDB', 'Firebase', 'AWS', 'Azure',
];

// ===== SETORES DE EMPRESAS =====
export const COMPANY_FIELDS = [
  'Tecnologia',
  'Saúde',
  'Educação',
  'Finanças',
  'Varejo',
  'Indústria',
  'Serviços',
  'Agronegócio',
  'Outro',
];

// ===== LIMITES DE VALIDAÇÃO =====
export const LIMITS = {
  MAX_SKILLS: 10,
  MIN_SKILLS: 1,
  MIN_PASSWORD_LENGTH: 6,
  MAX_PASSWORD_LENGTH: 100,
  MAX_DESCRIPTION_LENGTH: 500,
  MAX_TITLE_LENGTH: 100,
  MAX_PROBLEM_DESCRIPTION: 2000,
  MAX_FILE_SIZE_MB: 10,
};

// ===== MENSAGENS PADRÃO =====
export const MESSAGES = {
  NETWORK_ERROR: 'Erro de conexão. Verifique sua internet.',
  GENERIC_ERROR: 'Algo deu errado. Tente novamente.',
  LOGIN_SUCCESS: 'Login realizado com sucesso!',
  LOGOUT_SUCCESS: 'Logout realizado com sucesso!',
  REGISTER_SUCCESS: 'Conta criada com sucesso!',
  UPDATE_SUCCESS: 'Perfil atualizado com sucesso!',
};

// ===== REGEX PATTERNS =====
export const PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  CPF: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
  CNPJ: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
  PHONE: /^\(\d{2}\)\s\d{4,5}-\d{4}$/,
};