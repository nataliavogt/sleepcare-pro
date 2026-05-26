export interface User {
  uid: string;
  email: string;
  name: string;
  cpf: string;
  lgpdAccepted: boolean;
  tcleAccepted: boolean;
  tcleDate: string;
  whatsappNumber?: string;
  createdAt: string;
}

export interface QuestionnaireResponse {
  id: string;
  uid: string;
  questionnaireType: 'stop-bang' | 'epworth' | 'psqi' | 'isi';
  responses: Record<string, number | string>;
  score: number;
  interpretation: string;
  respondedAt: string;
  sentToEmail: boolean;
  sentAt?: string;
}

export interface SleepDiaryEntry {
  id: string;
  uid: string;
  date: string;
  bedtime: string;
  wakeTime: string;
  sleepDuration: number; // minutos
  awakenings: number;
  awakenDuration: number;
  sleepQuality: number; // 0-5
  medications: boolean;
  alcohol: boolean;
  caffeine: boolean;
  exercise: boolean;
  notes: string;
  submittedAt: string;
}

export interface QuestionnaireDefinition {
  id: string;
  name: string;
  shortName: string;
  description: string;
  reference: string;
  maxScore: number;
  questions: Question[];
  interpretations: Interpretation[];
}

export interface Question {
  id: string;
  text: string;
  type: 'binary' | 'likert' | 'numeric' | 'text';
  options?: AnswerOption[];
  required?: boolean;
  help?: string;
}

export interface AnswerOption {
  value: number | string;
  label: string;
}

export interface Interpretation {
  min: number;
  max: number;
  meaning: string;
  color: string;
}

export interface EmailPayload {
  to: string;
  subject: string;
  html: string;
  from: string;
}
