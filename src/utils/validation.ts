import { LIMITS, PATTERNS } from './constants';

// ===== TIPOS =====
export interface ValidationResult {
  valid: boolean;
  message?: string;
}

export interface FormErrors {
  [key: string]: string;
}

// ===== VALIDAÇÕES BÁSICAS =====

// Validar email
export const validateEmail = (email: string): ValidationResult => {
  if (!email || email.trim().length === 0) {
    return { valid: false, message: 'O email é obrigatório' };
  }
  
  if (!PATTERNS.EMAIL.test(email)) {
    return { valid: false, message: 'Email inválido' };
  }
  
  return { valid: true };
};

// Validar senha
export const validatePassword = (password: string): ValidationResult => {
  if (!password || password.length === 0) {
    return { valid: false, message: 'A senha é obrigatória' };
  }
  
  if (password.length < LIMITS.MIN_PASSWORD_LENGTH) {
    return {
      valid: false,
      message: `A senha deve ter no mínimo ${LIMITS.MIN_PASSWORD_LENGTH} caracteres`,
    };
  }
  
  if (password.length > LIMITS.MAX_PASSWORD_LENGTH) {
    return {
      valid: false,
      message: `A senha deve ter no máximo ${LIMITS.MAX_PASSWORD_LENGTH} caracteres`,
    };
  }
  
  return { valid: true };
};

// Validar nome
export const validateName = (name: string): ValidationResult => {
  if (!name || name.trim().length === 0) {
    return { valid: false, message: 'O nome é obrigatório' };
  }
  
  if (name.trim().length < 2) {
    return { valid: false, message: 'O nome deve ter pelo menos 2 caracteres' };
  }
  
  return { valid: true };
};

// Validar CPF (formato: 000.000.000-00)
export const validateCPF = (cpf: string): ValidationResult => {
  if (!cpf || cpf.trim().length === 0) {
    return { valid: false, message: 'O CPF é obrigatório' };
  }
  
  // Remove formatação
  const cleanCPF = cpf.replace(/[^\d]/g, '');
  
  if (cleanCPF.length !== 11) {
    return { valid: false, message: 'CPF deve ter 11 dígitos' };
  }
  
  // Validação simples (você pode adicionar validação completa depois)
  if (/^(\d)\1{10}$/.test(cleanCPF)) {
    return { valid: false, message: 'CPF inválido' };
  }
  
  return { valid: true };
};

// Validar CNPJ (formato: 00.000.000/0000-00)
export const validateCNPJ = (cnpj: string): ValidationResult => {
  if (!cnpj || cnpj.trim().length === 0) {
    return { valid: false, message: 'O CNPJ é obrigatório' };
  }
  
  const cleanCNPJ = cnpj.replace(/[^\d]/g, '');
  
  if (cleanCNPJ.length !== 14) {
    return { valid: false, message: 'CNPJ deve ter 14 dígitos' };
  }
  
  return { valid: true };
};

// Validar telefone
export const validatePhone = (phone: string): ValidationResult => {
  if (!phone || phone.trim().length === 0) {
    return { valid: false, message: 'O telefone é obrigatório' };
  }
  
  const cleanPhone = phone.replace(/[^\d]/g, '');
  
  if (cleanPhone.length < 10 || cleanPhone.length > 11) {
    return { valid: false, message: 'Telefone inválido' };
  }
  
  return { valid: true };
};

// ===== VALIDAÇÕES DE FORMULÁRIOS =====

// Validar formulário de login
export const validateLoginForm = (email: string, password: string): { valid: boolean; errors: FormErrors } => {
  const errors: FormErrors = {};
  
  const emailValidation = validateEmail(email);
  if (!emailValidation.valid) {
    errors.email = emailValidation.message!;
  }
  
  const passwordValidation = validatePassword(password);
  if (!passwordValidation.valid) {
    errors.password = passwordValidation.message!;
  }
  
  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
};

// Validar formulário de registro do Employer (Profissional)
export const validateEmployerRegisterForm = (data: {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  document: string;
  role: string;
}): { valid: boolean; errors: FormErrors } => {
  const errors: FormErrors = {};
  
  const nameValidation = validateName(data.name);
  if (!nameValidation.valid) {
    errors.name = nameValidation.message!;
  }
  
  const emailValidation = validateEmail(data.email);
  if (!emailValidation.valid) {
    errors.email = emailValidation.message!;
  }
  
  const passwordValidation = validatePassword(data.password);
  if (!passwordValidation.valid) {
    errors.password = passwordValidation.message!;
  }
  
  if (data.password !== data.confirmPassword) {
    errors.confirmPassword = 'As senhas não coincidem';
  }
  
  const phoneValidation = validatePhone(data.phone);
  if (!phoneValidation.valid) {
    errors.phone = phoneValidation.message!;
  }
  
  const cpfValidation = validateCPF(data.document);
  if (!cpfValidation.valid) {
    errors.document = cpfValidation.message!;
  }
  
  if (!data.role || data.role.trim().length === 0) {
    errors.role = 'O cargo é obrigatório';
  }
  
  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
};

// Validar formulário de registro da Enterprise (Empresa)
export const validateEnterpriseRegisterForm = (data: {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  document: string;
  field: string;
}): { valid: boolean; errors: FormErrors } => {
  const errors: FormErrors = {};
  
  const nameValidation = validateName(data.name);
  if (!nameValidation.valid) {
    errors.name = nameValidation.message!;
  }
  
  const emailValidation = validateEmail(data.email);
  if (!emailValidation.valid) {
    errors.email = emailValidation.message!;
  }
  
  const passwordValidation = validatePassword(data.password);
  if (!passwordValidation.valid) {
    errors.password = passwordValidation.message!;
  }
  
  if (data.password !== data.confirmPassword) {
    errors.confirmPassword = 'As senhas não coincidem';
  }
  
  const phoneValidation = validatePhone(data.phone);
  if (!phoneValidation.valid) {
    errors.phone = phoneValidation.message!;
  }
  
  const cnpjValidation = validateCNPJ(data.document);
  if (!cnpjValidation.valid) {
    errors.document = cnpjValidation.message!;
  }
  
  if (!data.field || data.field.trim().length === 0) {
    errors.field = 'O setor é obrigatório';
  }
  
  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
};

// Validar formulário de criação de problema
export const validateProblemForm = (data: {
  title: string;
  description: string;
}): { valid: boolean; errors: FormErrors } => {
  const errors: FormErrors = {};
  
  if (!data.title || data.title.trim().length === 0) {
    errors.title = 'O título é obrigatório';
  } else if (data.title.length > LIMITS.MAX_TITLE_LENGTH) {
    errors.title = `O título deve ter no máximo ${LIMITS.MAX_TITLE_LENGTH} caracteres`;
  }
  
  if (!data.description || data.description.trim().length === 0) {
    errors.description = 'A descrição é obrigatória';
  } else if (data.description.length > LIMITS.MAX_PROBLEM_DESCRIPTION) {
    errors.description = `A descrição deve ter no máximo ${LIMITS.MAX_PROBLEM_DESCRIPTION} caracteres`;
  }
  
  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
};

// Validar seleção de skills
export const validateSkills = (skills: string[]): ValidationResult => {
  if (!skills || skills.length === 0) {
    return { valid: false, message: 'Selecione pelo menos uma habilidade' };
  }
  
  if (skills.length > LIMITS.MAX_SKILLS) {
    return {
      valid: false,
      message: `Selecione no máximo ${LIMITS.MAX_SKILLS} habilidades`,
    };
  }
  
  return { valid: true };
};