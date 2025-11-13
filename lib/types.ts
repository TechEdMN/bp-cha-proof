export interface Message {
  id: string;
  chatId: string;
  senderId: string;
  senderType: 'user' | 'agent' | 'bot';
  senderName: string;
  content: string;
  timestamp: string;
  read: boolean;
  attachments?: Attachment[];
}

export interface Attachment {
  id: string;
  name: string;
  type: string;
  size: number;
  url: string;
}

export interface Chat {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  agentId?: string;
  agentName?: string;
  status: 'waiting' | 'active' | 'closed';
  startedAt: string;
  closedAt?: string;
  rating?: number;
  feedback?: string;
  tags: string[];
  language: string;
  unreadCount: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: string;
}

export interface Agent {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  status: 'online' | 'away' | 'offline';
  activeChats: number;
  maxChats: number;
  role: 'agent' | 'admin';
  createdAt: string;
}

export interface Article {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  views: number;
  helpful: number;
  notHelpful: number;
  createdAt: string;
  updatedAt: string;
  published: boolean;
}

export interface CannedResponse {
  id: string;
  title: string;
  content: string;
  shortcut: string;
  category: string;
  agentId: string;
}

export interface ChatbotFlow {
  id: string;
  name: string;
  trigger: string;
  nodes: ChatbotNode[];
  active: boolean;
  createdAt: string;
}

export interface ChatbotNode {
  id: string;
  type: 'message' | 'question' | 'action' | 'condition';
  content: string;
  options?: string[];
  nextNode?: string;
  action?: string;
}

export interface Analytics {
  date: string;
  totalChats: number;
  activeChats: number;
  closedChats: number;
  averageRating: number;
  averageResponseTime: number;
  totalMessages: number;
}
