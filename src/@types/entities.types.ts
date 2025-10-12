// ===== ATTACHMENT (Arquivos/Imagens) =====
export interface Attachment {
  id: string; // Guid no C#
  title: string;
  url: string;
}

// ===== CULTURE (Cultura da Empresa) =====
export interface Culture {
  id: string;
  title: string;
  description: string;
  iconId: string;
  icon?: Attachment;
}

// ===== SKILL (Habilidades) =====
export interface Skill {
  id: string;
  name: string;
}

// ===== EXPERIENCE (Experiências do Profissional) =====
export enum ExperienceType {
  WORK = 'work',
  EDUCATION = 'education',
  PROJECT = 'project',
  VOLUNTEER = 'volunteer',
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  type: ExperienceType;
}

// ===== EMPLOYER (Profissional) =====
export interface Employer {
  id: string;
  geoLocationId: string;
  photoId?: string;
  photo?: Attachment;
  name: string;
  phone: string;
  email: string;
  password?: string; // Não retornado pela API normalmente
  document: string; // CPF
  description?: string;
  role: string; // Cargo: "Desenvolvedor React Native"
  createdAt: string; // DateTime do C#
  
  // Relacionamentos
  skills?: Skill[];
  experiences?: Experience[];
}

// ===== ENTERPRISE (Empresa) =====
export interface Enterprise {
  id: string;
  geoLocationId: string;
  photoId?: string;
  photo?: Attachment;
  name: string;
  phone: string;
  email: string;
  password?: string; // Não retornado pela API normalmente
  document: string; // CNPJ
  description?: string;
  field: string; // Setor: "Tecnologia", "Saúde", etc
  createdAt: string;
}

// ===== EVENT (Eventos) =====
export interface Event {
  id: string;
  title: string;
  description: string;
  private: boolean;
  codeAccess?: string; // Código para entrar se for privado
  createdAt: string;
  startDate: string;
  endDate: string;
  
  // Relacionamentos
  attachments?: Attachment[];
  employeesIds?: string[]; // IDs dos participantes
  employees?: Employer[]; // Dados completos dos participantes
}

// ===== HACKATON (Hackathons) =====
export interface Hackaton {
  id: string;
  title: string;
  description: string;
  private: boolean;
  codeAccess?: string;
  createdAt: string;
  startDate: string;
  endDate: string;
  
  // Relacionamentos
  attachments?: Attachment[];
  employeesIds?: string[];
  employees?: Employer[];
}

// ===== PROBLEM (Desafio/Problema da Empresa) =====
export interface Problem {
  id: string;
  enterpriseId: string;
  enterprise?: Enterprise;
  title: string;
  description: string;
  createdAt: string;
  
  // Relacionamentos
  solutions?: Solution[]; // Soluções enviadas
  solutionsCount?: number; // Quantidade de soluções
}

// ===== SOLUTION (Solução do Profissional) =====
export interface Solution {
  id: string;
  problemId: string;
  problem?: Problem;
  employeeId: string; // employeeId no diagrama (Employer)
  employee?: Employer;
  title: string;
  attachmentId?: string;
  attachment?: Attachment;
  createdAt: string;
}

// ===== UNION TYPES (User pode ser Employer ou Enterprise) =====
export type User = Employer | Enterprise;

// Type guard para verificar se é Employer
export const isEmployer = (user: User): user is Employer => {
  return 'role' in user;
};

// Type guard para verificar se é Enterprise
export const isEnterprise = (user: User): user is Enterprise => {
  return 'field' in user;
};