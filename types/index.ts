export interface Document {
  id: string;
  title: string;
  type: string;
  date: string;
  analyzed: boolean;
  size?: string;
  pages?: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  profileImage?: string;
  plan: 'free' | 'pro' | 'enterprise';
  docsRemaining: number;
  createdAt: string;
}

export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: string;
  read: boolean;
}

export interface Conversation {
  id: string;
  title: string;
  messages: Message[];
  createdAt: string;
  updatedAt: string;
}