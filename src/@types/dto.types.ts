import { Employer, Enterprise, User, ExperienceType } from './entities.types';

// ===== AUTHENTICATION DTOs =====

export interface LoginDto {
  email: string;
  password: string;
}

export interface AuthResponseDto {
  token: string;
  user: User; // Pode ser Employer ou Enterprise
  userType: 'employer' | 'enterprise'; // Para saber qual tipo
}

// ===== EMPLOYER (Profissional) DTOs =====

export interface RegisterEmployerDto {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  document: string; // CPF
  role: string; // Cargo
  geoLocationId: string;
  description?: string;
}

export interface UpdateEmployerDto {
  name?: string;
  phone?: string;
  role?: string;
  description?: string;
  geoLocationId?: string;
  photoId?: string;
}

export interface AddSkillDto {
  skillId: string;
}

export interface AddExperienceDto {
  title: string;
  description: string;
  type: ExperienceType;
}

// ===== ENTERPRISE (Empresa) DTOs =====

export interface RegisterEnterpriseDto {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  document: string; // CNPJ
  field: string; // Setor
  geoLocationId: string;
  description?: string;
}

export interface UpdateEnterpriseDto {
  name?: string;
  phone?: string;
  field?: string;
  description?: string;
  geoLocationId?: string;
  photoId?: string;
}

// ===== PROBLEM (Desafio) DTOs =====

export interface CreateProblemDto {
  title: string;
  description: string;
}

export interface UpdateProblemDto {
  title?: string;
  description?: string;
}

export interface ProblemListResponseDto {
  problems: Array<{
    id: string;
    title: string;
    description: string;
    enterpriseId: string;
    enterpriseName: string;
    enterpriseLogo?: string;
    createdAt: string;
    solutionsCount: number;
  }>;
  total: number;
  page: number;
  limit: number;
}

// ===== SOLUTION (Solução) DTOs =====

export interface CreateSolutionDto {
  problemId: string;
  title: string;
  attachmentId?: string;
}

export interface UpdateSolutionDto {
  title?: string;
  attachmentId?: string;
}

export interface SolutionWithEmployerDto {
  id: string;
  problemId: string;
  title: string;
  attachmentId?: string;
  attachmentUrl?: string;
  createdAt: string;
  employee: {
    id: string;
    name: string;
    role: string;
    photoUrl?: string;
    skills: string[]; // Array de nomes de skills
  };
}

// ===== EVENT DTOs =====

export interface CreateEventDto {
  title: string;
  description: string;
  private: boolean;
  codeAccess?: string;
  startDate: string; // ISO string
  endDate: string;
  attachmentIds?: string[];
}

export interface UpdateEventDto {
  title?: string;
  description?: string;
  private?: boolean;
  codeAccess?: string;
  startDate?: string;
  endDate?: string;
}

export interface JoinEventDto {
  eventId: string;
  codeAccess?: string; // Necessário se o evento for privado
}

// ===== HACKATON DTOs =====

export interface CreateHackatonDto {
  title: string;
  description: string;
  private: boolean;
  codeAccess?: string;
  startDate: string;
  endDate: string;
  attachmentIds?: string[];
}

export interface UpdateHackatonDto {
  title?: string;
  description?: string;
  private?: boolean;
  codeAccess?: string;
  startDate?: string;
  endDate?: string;
}

export interface JoinHackatonDto {
  hackatonId: string;
  codeAccess?: string;
}

// ===== ATTACHMENT DTOs =====

export interface UploadAttachmentDto {
  title: string;
  file: File | Blob; // Para web
  // ou
  uri?: string; // Para React Native
  type?: string; // MIME type
  name?: string; // Nome do arquivo
}

export interface UploadAttachmentResponseDto {
  id: string;
  url: string;
  title: string;
}

// ===== SKILL DTOs =====

export interface CreateSkillDto {
  name: string;
}

export interface SkillListDto {
  skills: Array<{
    id: string;
    name: string;
    usageCount?: number; // Quantos profissionais usam essa skill
  }>;
}

// ===== PAGINATION =====

export interface PaginationParams {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}