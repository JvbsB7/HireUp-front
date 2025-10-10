// ===== CORES DO APP =====
export const COLORS = {
  // Primárias
  primary: '#6366F1',      // Indigo (cor principal do HireUp)
  primaryDark: '#4F46E5',
  primaryLight: '#818CF8',
  
  // Secundárias
  secondary: '#EC4899',    // Pink
  secondaryDark: '#DB2777',
  secondaryLight: '#F472B6',
  
  // Neutras
  background: '#F9FAFB',   // Cinza muito claro
  surface: '#FFFFFF',      // Branco
  card: '#FFFFFF',
  
  // Texto
  text: '#111827',         // Preto suave
  textSecondary: '#6B7280', // Cinza médio
  textLight: '#9CA3AF',    // Cinza claro
  
  // Estados
  success: '#10B981',      // Verde
  warning: '#F59E0B',      // Amarelo/Laranja
  error: '#EF4444',        // Vermelho
  info: '#3B82F6',         // Azul
  
  // Bordas
  border: '#E5E7EB',       // Cinza para bordas
  divider: '#F3F4F6',      // Cinza para divisores
  
  // Overlay
  overlay: 'rgba(0, 0, 0, 0.5)',
  overlayLight: 'rgba(0, 0, 0, 0.3)',
  
  // Específicos de tipo de usuário
  employer: '#6366F1',     // Cor para Employer (Profissional)
  enterprise: '#EC4899',   // Cor para Enterprise (Empresa)
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
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 24,
  full: 9999,
};

// ===== SOMBRAS =====
export const SHADOWS = {
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
  xl: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
};

// ===== SKILLS DISPONÍVEIS =====
export const AVAILABLE_SKILLS = [
  // Frontend
  'React Native',
  'React',
  'JavaScript',
  'TypeScript',
  'Vue.js',
  'Angular',
  'HTML/CSS',
  'Tailwind CSS',
  
  // Backend
  'Node.js',
  'C#',
  '.NET',
  'Python',
  'Java',
  'PHP',
  'Ruby',
  'Go',
  
  // Mobile
  'iOS',
  'Android',
  'Flutter',
  'Swift',
  'Kotlin',
  
  // Design
  'UI/UX',
  'Figma',
  'Adobe XD',
  'Photoshop',
  'Illustrator',
  
  // Data & Cloud
  'SQL',
  'MongoDB',
  'PostgreSQL',
  'Firebase',
  'AWS',
  'Azure',
  'Docker',
  'Kubernetes',
  
  // Outros
  'DevOps',
  'Git',
  'Scrum',
  'Agile',
];

// ===== TIPOS DE EXPERIÊNCIA =====
export const EXPERIENCE_TYPES = [
  { value: 'work', label: 'Trabalho' },
  { value: 'education', label: 'Educação' },
  { value: 'project', label: 'Projeto' },
  { value: 'volunteer', label: 'Voluntariado' },
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
  'Energia',
  'Construção',
  'Logística',
  'Entretenimento',
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
  DELETE_SUCCESS: 'Item deletado com sucesso!',
  SOLUTION_SENT: 'Solução enviada com sucesso!',
  PROBLEM_CREATED: 'Desafio criado com sucesso!',
};

// ===== REGEX PATTERNS =====
export const PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  CPF: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
  CNPJ: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
  PHONE: /^\(\d{2}\)\s\d{4,5}-\d{4}$/,
};