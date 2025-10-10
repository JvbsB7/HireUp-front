// ===== FORMATAÇÃO DE DOCUMENTOS =====

// Formatar CPF: 00000000000 → 000.000.000-00
export const formatCPF = (cpf: string): string => {
  const cleaned = cpf.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})(\d{2})$/);
  
  if (match) {
    return `${match[1]}.${match[2]}.${match[3]}-${match[4]}`;
  }
  
  return cpf;
};

// Formatar CNPJ: 00000000000000 → 00.000.000/0000-00
export const formatCNPJ = (cnpj: string): string => {
  const cleaned = cnpj.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/);
  
  if (match) {
    return `${match[1]}.${match[2]}.${match[3]}/${match[4]}-${match[5]}`;
  }
  
  return cnpj;
};

// Formatar Telefone: 11999999999 → (11) 99999-9999
export const formatPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  
  if (cleaned.length === 11) {
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
  } else if (cleaned.length === 10) {
    const match = cleaned.match(/^(\d{2})(\d{4})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
  }
  
  return phone;
};

// ===== FORMATAÇÃO DE DATAS =====

// Formatar data: 2025-10-10T10:30:00 → 10/10/2025
export const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
  } catch {
    return dateString;
  }
};

// Formatar data e hora: 2025-10-10T10:30:00 → 10/10/2025 às 10:30
export const formatDateTime = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${day}/${month}/${year} às ${hours}:${minutes}`;
  } catch {
    return dateString;
  }
};

// Formatar data relativa: "há 2 dias", "há 3 horas"
export const formatRelativeTime = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);
    const diffWeek = Math.floor(diffDay / 7);
    const diffMonth = Math.floor(diffDay / 30);
    
    if (diffSec < 60) return 'agora mesmo';
    if (diffMin < 60) return `há ${diffMin} minuto${diffMin > 1 ? 's' : ''}`;
    if (diffHour < 24) return `há ${diffHour} hora${diffHour > 1 ? 's' : ''}`;
    if (diffDay < 7) return `há ${diffDay} dia${diffDay > 1 ? 's' : ''}`;
    if (diffWeek < 4) return `há ${diffWeek} semana${diffWeek > 1 ? 's' : ''}`;
    if (diffMonth < 12) return `há ${diffMonth} ${diffMonth > 1 ? 'meses' : 'mês'}`;
    
    return formatDate(dateString);
  } catch {
    return dateString;
  }
};

// ===== FORMATAÇÃO DE TEXTO =====

// Truncar texto: "Lorem ipsum dolor..." (máx 50 chars)
export const truncateText = (text: string, maxLength: number = 50): string => {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
};

// Primeira letra maiúscula
export const capitalize = (text: string): string => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

// Iniciais: "João Silva" → "JS"
export const getInitials = (name: string): string => {
  if (!name) return '';
  
  const words = name.trim().split(' ');
  if (words.length === 1) return words[0].charAt(0).toUpperCase();
  
  return (words[0].charAt(0) + words[words.length - 1].charAt(0)).toUpperCase();
};

// ===== FORMATAÇÃO DE NÚMEROS =====

// Formatar número com separadores: 1000 → 1.000
export const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

// Formatar tamanho de arquivo: 1024 → "1 KB"
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return `${Math.round(bytes / Math.pow(k, i))} ${sizes[i]}`;
};

// ===== MASCARAS DE INPUT =====

// Aplicar máscara de CPF enquanto digita
export const maskCPF = (value: string): string => {
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  return value;
};

// Aplicar máscara de CNPJ enquanto digita
export const maskCNPJ = (value: string): string => {
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{2})(\d)/, '$1.$2');
  value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
  value = value.replace(/\.(\d{3})(\d)/, '.$1/$2');
  value = value.replace(/(\d{4})(\d)/, '$1-$2');
  return value;
};

// Aplicar máscara de telefone enquanto digita
export const maskPhone = (value: string): string => {
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
  value = value.replace(/(\d)(\d{4})$/, '$1-$2');
  return value;
};