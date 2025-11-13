import fs from 'fs';
import path from 'path';
import { Chat, Message, User, Agent, Article, CannedResponse, ChatbotFlow, Analytics } from './types';

const DATA_DIR = path.join(process.cwd(), 'data');

// Ensure data directory exists
export const ensureDataDirectory = () => {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
};

// Generic read function
const readJSONFile = <T>(filename: string, defaultValue: T): T => {
  ensureDataDirectory();
  const filePath = path.join(DATA_DIR, filename);
  
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error(`Error reading ${filename}:`, error);
  }
  
  return defaultValue;
};

// Generic write function
const writeJSONFile = <T>(filename: string, data: T): void => {
  ensureDataDirectory();
  const filePath = path.join(DATA_DIR, filename);
  
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    console.error(`Error writing ${filename}:`, error);
    throw error;
  }
};

// Chat operations
export const getChats = (): Chat[] => {
  return readJSONFile<Chat[]>('chats.json', []);
};

export const saveChats = (chats: Chat[]): void => {
  writeJSONFile('chats.json', chats);
};

export const getChat = (chatId: string): Chat | undefined => {
  const chats = getChats();
  return chats.find(chat => chat.id === chatId);
};

export const addChat = (chat: Chat): void => {
  const chats = getChats();
  chats.push(chat);
  saveChats(chats);
};

export const updateChat = (chatId: string, updates: Partial<Chat>): void => {
  const chats = getChats();
  const index = chats.findIndex(chat => chat.id === chatId);
  
  if (index !== -1) {
    chats[index] = { ...chats[index], ...updates };
    saveChats(chats);
  }
};

// Message operations
export const getMessages = (): Message[] => {
  return readJSONFile<Message[]>('messages.json', []);
};

export const saveMessages = (messages: Message[]): void => {
  writeJSONFile('messages.json', messages);
};

export const getMessagesByChat = (chatId: string): Message[] => {
  const messages = getMessages();
  return messages.filter(msg => msg.chatId === chatId);
};

export const addMessage = (message: Message): void => {
  const messages = getMessages();
  messages.push(message);
  saveMessages(messages);
};

// User operations
export const getUsers = (): User[] => {
  return readJSONFile<User[]>('users.json', []);
};

export const saveUsers = (users: User[]): void => {
  writeJSONFile('users.json', users);
};

export const getUser = (userId: string): User | undefined => {
  const users = getUsers();
  return users.find(user => user.id === userId);
};

export const addUser = (user: User): void => {
  const users = getUsers();
  users.push(user);
  saveUsers(users);
};

// Agent operations
export const getAgents = (): Agent[] => {
  return readJSONFile<Agent[]>('agents.json', []);
};

export const saveAgents = (agents: Agent[]): void => {
  writeJSONFile('agents.json', agents);
};

export const getAgent = (agentId: string): Agent | undefined => {
  const agents = getAgents();
  return agents.find(agent => agent.id === agentId);
};

export const updateAgent = (agentId: string, updates: Partial<Agent>): void => {
  const agents = getAgents();
  const index = agents.findIndex(agent => agent.id === agentId);
  
  if (index !== -1) {
    agents[index] = { ...agents[index], ...updates };
    saveAgents(agents);
  }
};

// Article operations
export const getArticles = (): Article[] => {
  return readJSONFile<Article[]>('articles.json', []);
};

export const saveArticles = (articles: Article[]): void => {
  writeJSONFile('articles.json', articles);
};

export const getArticle = (articleId: string): Article | undefined => {
  const articles = getArticles();
  return articles.find(article => article.id === articleId);
};

export const addArticle = (article: Article): void => {
  const articles = getArticles();
  articles.push(article);
  saveArticles(articles);
};

// Canned responses operations
export const getCannedResponses = (): CannedResponse[] => {
  return readJSONFile<CannedResponse[]>('canned-responses.json', []);
};

export const saveCannedResponses = (responses: CannedResponse[]): void => {
  writeJSONFile('canned-responses.json', responses);
};

// Chatbot flows operations
export const getChatbotFlows = (): ChatbotFlow[] => {
  return readJSONFile<ChatbotFlow[]>('chatbot-flows.json', []);
};

export const saveChatbotFlows = (flows: ChatbotFlow[]): void => {
  writeJSONFile('chatbot-flows.json', flows);
};

export const getChatbotFlow = (flowId: string): ChatbotFlow | undefined => {
  const flows = getChatbotFlows();
  return flows.find(flow => flow.id === flowId);
};

// Analytics operations
export const getAnalytics = (): Analytics[] => {
  return readJSONFile<Analytics[]>('analytics.json', []);
};

export const saveAnalytics = (analytics: Analytics[]): void => {
  writeJSONFile('analytics.json', analytics);
};

export const addAnalyticsEntry = (entry: Analytics): void => {
  const analytics = getAnalytics();
  const existing = analytics.findIndex(a => a.date === entry.date);
  
  if (existing !== -1) {
    analytics[existing] = entry;
  } else {
    analytics.push(entry);
  }
  
  saveAnalytics(analytics);
};
