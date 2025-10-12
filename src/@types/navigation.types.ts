import { NavigatorScreenParams } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';

// ===== AUTH NAVIGATOR =====
export type AuthStackParamList = {
  ChooseRole: undefined;
  Login: undefined;
  RegisterEmployer: undefined; // Profissional
  RegisterEnterprise: undefined; // Empresa
};

// ===== EMPLOYER (PROFISSIONAL) NAVIGATOR =====
export type EmployerTabParamList = {
  Feed: undefined; // Feed de Problemas (Desafios)
  MySolutions: undefined; // Minhas soluções enviadas
  Events: undefined; // Eventos e Hackathons
  Profile: undefined;
};

export type EmployerStackParamList = {
  EmployerTabs: NavigatorScreenParams<EmployerTabParamList>;
  ProblemDetail: { problemId: string }; // Detalhes do desafio
  SubmitSolution: { problemId: string }; // Enviar solução
  EventDetail: { eventId: string };
  HackatonDetail: { hackatonId: string };
  Chat: { conversationId: string; recipientName: string };
  EditProfile: undefined;
  AddExperience: undefined;
  SelectSkills: undefined;
};

// ===== ENTERPRISE (EMPRESA) NAVIGATOR =====
export type EnterpriseTabParamList = {
  Dashboard: undefined; // Painel com seus problemas
  CreateProblem: undefined; // Criar novo desafio
  Events: undefined; // Gerenciar eventos/hackathons
  EnterpriseProfile: undefined;
};

export type EnterpriseStackParamList = {
  EnterpriseTabs: NavigatorScreenParams<EnterpriseTabParamList>;
  ProblemDetail: { problemId: string };
  EditProblem: { problemId: string };
  Solutions: { problemId: string }; // Ver soluções enviadas
  SolutionDetail: { solutionId: string }; // Ver detalhes de uma solução
  CreateEvent: undefined;
  CreateHackaton: undefined;
  EventDetail: { eventId: string };
  HackatonDetail: { hackatonId: string };
  Chat: { conversationId: string; recipientName: string };
  EditEnterpriseProfile: undefined;
};

// ===== ROOT NAVIGATOR =====
export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Employer: NavigatorScreenParams<EmployerStackParamList>;
  Enterprise: NavigatorScreenParams<EnterpriseStackParamList>;
};

// ===== TIPOS DE NAVEGAÇÃO (para usar nas telas) =====

// Auth
export type LoginScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'Login'>;
export type RegisterEmployerScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'RegisterEmployer'>;
export type RegisterEnterpriseScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'RegisterEnterprise'>;

// Employer (Profissional)
export type FeedScreenNavigationProp = BottomTabNavigationProp<EmployerTabParamList, 'Feed'>;
export type ProblemDetailNavigationProp = StackNavigationProp<EmployerStackParamList, 'ProblemDetail'>;
export type ProblemDetailRouteProp = RouteProp<EmployerStackParamList, 'ProblemDetail'>;
export type SubmitSolutionNavigationProp = StackNavigationProp<EmployerStackParamList, 'SubmitSolution'>;
export type SubmitSolutionRouteProp = RouteProp<EmployerStackParamList, 'SubmitSolution'>;

// Enterprise (Empresa)
export type DashboardScreenNavigationProp = BottomTabNavigationProp<EnterpriseTabParamList, 'Dashboard'>;
export type CreateProblemNavigationProp = BottomTabNavigationProp<EnterpriseTabParamList, 'CreateProblem'>;
export type SolutionsNavigationProp = StackNavigationProp<EnterpriseStackParamList, 'Solutions'>;
export type SolutionsRouteProp = RouteProp<EnterpriseStackParamList, 'Solutions'>;
export type SolutionDetailNavigationProp = StackNavigationProp<EnterpriseStackParamList, 'SolutionDetail'>;
export type SolutionDetailRouteProp = RouteProp<EnterpriseStackParamList, 'SolutionDetail'>;

// Events (usado por ambos)
export type EventDetailNavigationProp = StackNavigationProp<EmployerStackParamList | EnterpriseStackParamList, 'EventDetail'>;
export type EventDetailRouteProp = RouteProp<EmployerStackParamList | EnterpriseStackParamList, 'EventDetail'>;

// Chat (usado por ambos)
export type ChatNavigationProp = StackNavigationProp<EmployerStackParamList | EnterpriseStackParamList, 'Chat'>;
export type ChatRouteProp = RouteProp<EmployerStackParamList | EnterpriseStackParamList, 'Chat'>;